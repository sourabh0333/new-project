import CustomerCard from "./CustomerCard";

export default function CustomerList({ customers = [] }) {
  return (
    <>
      {customers.map((c) => (
        <CustomerCard key={c.id} customer={c} />
      ))}
    </>
  );
}
