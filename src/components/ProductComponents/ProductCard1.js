import Image from "next/image";

export default function ProductCard1({ item, qty, handleAdd, handleRemove }) {
  return (
    <div className="w-full mb-1">
      <div className="w-full h-28 relative overflow-hidden rounded-xl">
        <Image src={item.image} alt={item.name} fill className="object-cover" />
      </div>

      <h3 className="text-sm font-medium mt-3 leading-tight text-black line-clamp-1">
        {item.name}
      </h3>
      <p className="text-md font-semibold text-gray-800 mt-1">₹ {item.price}</p>

      <div className="mt-3">
        {qty === 0 ? (
          <button
            onClick={handleAdd}
            className="w-full bg-blue-500 text-white py-1 rounded-lg flex justify-center items-center gap-1 text-sm font-medium cursor-pointer"
          >
            <span className="text-lg">+</span> Add
          </button>
        ) : (
          <div className="flex items-center justify-between border border-blue-500 text-black rounded-lg px-2 py-1">
            <button
              onClick={handleRemove}
              className="text-xl px-2 text-blue-500"
            >
              −
            </button>
            <span className="text-sm font-medium">{qty}</span>
            <button onClick={handleAdd} className="text-xl px-2 text-blue-500">
              ＋
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
