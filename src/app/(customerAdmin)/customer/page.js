import CustomerList from "@/components/customer/CustomerList";

export default function CustomerPage() {
  const customers = [
    {
      id: 1,
      name: "Sugar & Sweet Cakes",
      status: "Active",
      summary: "Sample",
      details: {
        phone: "9842103574",
        dateRange: "18/08/2025 — 18/09/2025",
        type: "Retailer | Cake Shop",
        slug: "sugar-sweet-cakes",
        email: "sugarsweetcakes@gmail.com",
        kyc: "Pending",
      },
      openByDefault: true,
    },
    {
      id: 2,
      name: "Sugar & Sweet Cakes",
      status: "Expired",
      summary: "Free Trial - 0 days left",
      details: {
        phone: "9842103574",
        dateRange: "18/08/2025 — 18/09/2025",
        type: "Retailer | Cake Shop",
        slug: "sugar-sweet-cakes",
        email: "sugarsweetcakes@gmail.com",
        kyc: "Pending",
      },
    },
    {
      id: 3,
      name: "Sugar & Sweet Cakes",
      status: "Active",
      summary: "Paid",
      details: {
        phone: "9842103574",
        dateRange: "18/08/2025 — 18/09/2025",
        type: "Retailer | Cake Shop",
        slug: "sugar-sweet-cakes",
        email: "sugarsweetcakes@gmail.com",
        kyc: "Pending",
      },
    },
    {
      id: 4,
      name: "Sugar & Sweet Cakes",
      status: "Active",
      summary: "Not Interested - 25 days",
      details: {
        phone: "9842103574",
        dateRange: "18/08/2025 — 18/09/2025",
        type: "Retailer | Cake Shop",
        slug: "sugar-sweet-cakes",
        email: "sugarsweetcakes@gmail.com",
        kyc: "Pending",
      },
    },
  ];

  return (
    <div className="space-y-3 bg-white">
      <CustomerList customers={customers} />
    </div>
  );
}
