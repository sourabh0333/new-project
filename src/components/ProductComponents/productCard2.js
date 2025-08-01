import Image from "next/image";

export default function ProductCard2({ item, qty, handleAdd, handleRemove }) {
  return (
    <div className="w-full mb-1">
      {/* Image */}
      <div className="w-full h-28 relative overflow-hidden rounded-xl">
        <Image src={item.image} alt={item.name} fill className="object-cover" />
      </div>

      {/* Name */}
      <h3 className="text-sm font-medium mt-3 leading-tight text-black line-clamp-1">
        {item.name}
      </h3>
      <div className="flex justify-between items-center">
        <div className="w-1/2">
          {/* Price */}
          <p className="text-lg font-bold text-gray-800">₹ {item.price}</p>
        </div>

        {/* Quantity Buttons */}
        <div className="w-1/2">
          {qty === 0 ? (
            <button
              onClick={() => handleAdd(item.name)}
              className="w-full bg-blue-500 text-white py-1 rounded-lg flex justify-center items-center gap-1 text-sm font-medium cursor-pointer"
            >
              <span className="text-lg ">＋</span> Add
            </button>
          ) : (
            <div className="flex items-center justify-between border border-blue-500 text-black rounded-lg px-1 py-1">
              <button
                onClick={() => handleRemove(item.name)}
                className="text-xl px-2 cursor-pointer text-blue-500"
              >
                −
              </button>
              <span className="text-sm font-medium">{qty}</span>
              <button
                onClick={() => handleAdd(item.name)}
                className="text-xl px-2 cursor-pointer text-blue-500"
              >
                ＋
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
