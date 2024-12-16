import Image from "next/image";
export default function ProductSection() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center p-6 md:p-12 bg-white text-black">
      {/* Product Image */}
      <div className="flex justify-center w-full md:w-1/2">
        <div className="bg-white p-4 rounded-lg">
          <Image
            src={"/featured/shoe4.png"}
            alt="Nike Air Force 1"
            width={400}
            height={400}
            className="object-contain"
          />
        </div>
      </div>

      {/* Product Details */}
      <div className="w-full md:w-1/2 mt-6 md:mt-0 md:ml-8 text-center md:text-left">
        <h2 className="text-3xl font-bold mb-2">Nike Air Force 1 React</h2>
        <h3 className="text-3xl font-semibold mb-4">PLT.AF.ORM</h3>
        <p className=" mb-6 leading-relaxed">
          Turn style on its head with this crafted take on the Air Jordan 1 Mid.
          Its &quot;inside-out&quot; inspired construction, unique layering, and exposed
          foam accents give this release an artisan finish.
        </p>

        <p className="text-2xl font-bold mb-4">MRP : ₹ 13 295</p>

        <button className="flex items-center justify-center gap-2 bg-white text-black font-semibold px-6 py-3 rounded-lg hover:bg-gray-300 transition">
          <span>🛒</span> Add To Cart
        </button>
      </div>
    </div>
  );
}
