import Image from "next/image";

export default function ProductCard3({ item, qty, handleAdd, handleRemove }) {
  return (
    <div className="w-full mb-2 flex gap-4">
      {/* Image */}
      <div className="w-[60%] h-28 relative overflow-hidden rounded-xl">
        <Image src={item.image} alt={item.name} fill className="object-cover" />
      </div>
      <div className="w-[40%]">
        {/* Name */}
        <h3 className="text-sm font-medium mt-3 leading-tight text-black line-clamp-1">
          {item.name}
        </h3>

        {/* Price */}
        <p className="text-md font-semibold text-gray-800 mt-1">
          ₹ {item.price}
        </p>

        {/* Quantity Buttons */}
        <div className="mt-3">
          {qty === 0 ? (
            <button
              onClick={() => handleAdd(item.name)}
              className="w-[65%] bg-blue-500 text-white py-1 rounded-lg flex justify-center items-center gap-1 text-sm font-medium cursor-pointer"
            >
              <span className="text-lg ">＋</span> Add
            </button>
          ) : (
            <div className="w-[65%] flex items-center justify-between border border-blue-500 text-black rounded-lg px-1 py-1">
              <button
                onClick={() => handleRemove(item.name)}
                className="w-[65%] text-xl px-2 cursor-pointer text-blue-500"
              >
                −
              </button>
              <span className="text-sm font-medium">{qty}</span>
              <button
                onClick={() => handleAdd(item.name)}
                className="w-1/2 text-xl px-2 cursor-pointer text-blue-500"
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
