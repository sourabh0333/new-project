"use client";

export default function BottomSheet({
  open,
  title,
  onClose,
  onDone,
  doneLabel = "Done",
  children,
}) {
  if (!open) return null;

  const stop = (e) => e.stopPropagation();

  return (
    <>
      <div className="fixed inset-0 z-[60] bg-black/40" onClick={onClose} />
      <div
        className="fixed inset-x-0 bottom-0 z-[61] bg-white rounded-t-2xl shadow-2xl
                   max-h-[85vh] flex flex-col"
        role="dialog"
        aria-modal="true"
        onClick={stop}
      >
        {/* Header */}
        <div className="px-4 pt-4 pb-2 border-b border-gray-100 flex items-center gap-2">
          <button
            onClick={onClose}
            className="p-2 -ml-2 rounded hover:bg-gray-100"
            aria-label="Close"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
              <path
                d="M15 18l-6-6 6-6"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <h3 className="text-base font-medium">{title}</h3>
        </div>

        {/* Body */}
        <div className="p-4 overflow-y-auto">{children}</div>

        {/* Footer */}
        {onDone && (
          <div className="p-4 pt-2 border-t border-gray-100">
            <button
              onClick={onDone}
              className="w-full h-11 rounded-xl bg-pink-600 text-white font-medium"
            >
              {doneLabel}
            </button>
          </div>
        )}
      </div>
    </>
  );
}
