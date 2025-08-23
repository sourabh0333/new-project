// components/customer/CustomerCard.jsx
"use client";

import { useEffect, useRef, useState } from "react";
import {
  FiPhone,
  FiCalendar,
  FiTag,
  FiLink,
  FiMail,
  FiChevronDown,
  FiMoreVertical,
} from "react-icons/fi";

export default function CustomerCard({ customer }) {
  const [open, setOpen] = useState(!!customer.openByDefault);
  const [menuOpen, setMenuOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  // measure expandable content height
  const measure = () => {
    if (!contentRef.current) return;
    setHeight(contentRef.current.scrollHeight);
  };

  useEffect(() => {
    if (!contentRef.current) return;
    if (open) measure();
    else setHeight(0);
  }, [open]);

  // re-measure on resize (helps when content wraps differently)
  useEffect(() => {
    const onResize = () => open && measure();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [open]);

  // close popover on outside click
  useEffect(() => {
    function onDoc(e) {
      if (!menuOpen) return;
      const p = e.target.closest?.("[data-card-root]");
      if (!p) setMenuOpen(false);
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, [menuOpen]);

  const d = customer.details ?? {};

  // Safe fallbacks so details always render
  const phone = d.phone ?? "-";
  const dateRange = d.dateRange ?? "-";
  const type = d.type ?? "-";
  const slug = d.slug ?? "-";
  const email = d.email ?? "-";
  const kyc = d.kyc ?? "-";

  return (
    <div
      data-card-root
      className="relative rounded-md border border-gray-200 bg-white shadow-sm"
    >
      {/* HEADER */}
      <div className="flex items-center justify-between gap-3 px-4 py-2.5">
        <div className="flex-1">
          <h3 className="text-sm font-semibold text-slate-800 line-clamp-1">
            {customer.name}
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <StatusPill status={customer.status} />
          <button
            type="button"
            className=""
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen((v) => !v);
            }}
            aria-haspopup="menu"
            aria-expanded={menuOpen}
          >
            <FiMoreVertical className="text-slate-800" />
          </button>
        </div>
      </div>

      <div className="border-t border-gray-100" />

      {!open && (
        <div className="px-4 py-2">
          <div className="flex items-center justify-between">
            <p className="text-sm text-slate-700">
              {hasText(customer.summary) ? customer.summary : "\u00A0"}
            </p>
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="p-1 rounded-md hover:bg-slate-50"
              aria-expanded={open}
              aria-controls={`cust-${customer.id}-details`}
            >
              <FiChevronDown className="text-blue-500" />
            </button>
          </div>
        </div>
      )}

      {/* EXPANDABLE CONTENT (details + bottom bar) */}
      <div
        id={`cust-${customer.id}-details`}
        style={{ height: open ? height : 0 }}
        className="transition-[height] duration-300 ease-in-out overflow-hidden"
      >
        <div ref={contentRef}>
          <div className="px-4 py-3 space-y-2 text-[13px]">
            <Row
              icon={<FiPhone />}
              content={
                phone !== "-" ? (
                  <>
                    :{" "}
                    <a
                      href={`tel:${phone}`}
                      className="text-blue-500 font-semibold hover:underline"
                    >
                      {phone}
                    </a>
                  </>
                ) : (
                  <span className="text-slate-700">: -</span>
                )
              }
            />
            <Row icon={<FiCalendar />} content={`: ${dateRange}`} />
            <Row icon={<FiTag />} content={`: ${type} `} />
            <Row icon={<FiLink />} content={`: ${slug}`} />
            <Row icon={<FiMail />} content={`: ${email}`} />
            <Row icon={<FiMail />} content={`: KYC - ${kyc}`} />
          </div>

          <div className="border-t border-gray-100" />
          <div className="flex items-center justify-between px-4 py-2">
            <p className="text-sm text-slate-700">
              {hasText(customer.summary) ? customer.summary : "\u00A0"}
            </p>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="p-1 rounded-md hover:bg-slate-50"
              aria-expanded={open}
              aria-controls={`cust-${customer.id}-details`}
            >
              <FiChevronDown className="text-blue-500 rotate-180" />
            </button>
          </div>
        </div>
      </div>

      {/* POPOVER MENU */}
      {menuOpen && (
        <div className="absolute right-2 top-10 z-20 w-36 rounded-lg border border-gray-100 bg-white shadow-lg">
          <button
            className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50"
            onClick={() => setMenuOpen(false)}
          >
            Edit
          </button>
          <button
            className="w-full text-left px-3 py-2 text-sm hover:bg-gray-50"
            onClick={() => setMenuOpen(false)}
          >
            Disposition
          </button>
        </div>
      )}
    </div>
  );
}

function hasText(v) {
  return typeof v === "string" && v.trim().length > 0;
}

function StatusPill({ status }) {
  const isActive = status === "Active";
  return isActive ? (
    <span className="inline-flex items-center gap-1 rounded-sm border border-green-300 px-2 py-0.5 text-[11px] font-medium text-green-600">
      {/* <span className="h-2 w-2 rounded-sm bg-emerald-500" /> */}
      Active
    </span>
  ) : (
    <span className="inline-flex items-center gap-1 rounded-sm border border-red-300 px-2 py-0.5 text-[11px] font-medium text-red-600">
      {/* <span className="h-2 w-2 rounded-sm bg-rose-600" /> */}
      Expired
    </span>
  );
}

function Row({ icon, content }) {
  return (
    <div className="flex items-start gap-2 text-slate-700">
      <span className="mt-0.5 text-slate-700">{icon}</span>
      <span className="leading-5 text-slate-800">{content}</span>
    </div>
  );
}
