
"use client";
import { useState } from "react";
import Image from "next/image";
const FindStoreSection = () => {
  const [location, setLocation] = useState("");

  return (
    <section className="w-full flex flex-col md:flex-row justify-between items-center p-6 md:p-12 bg-gray-50">
      {/* Left Section */}
      <div className="w-full md:w-1/2 flex flex-col gap-4 mb-6 md:mb-0">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Find a Nike Store
        </h2>
        {/* Search Input */}
        <div className="flex items-center w-96 bg-white border border-gray-300 rounded-md overflow-hidden shadow-sm">
          <input
            type="text"
            placeholder="Search Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="w-full p-3 outline-none"
          />
          <button className="px-4 py-2 bg-gray-800 text-white">🔍</button>
        </div>

        {/* Location Filter */}
        <div className="flex items-center gap-2">
          <span className="text-gray-600">14 Stores Near You</span>
          <button className="border border-gray-800 px-4 py-2 rounded-md text-gray-800">
            Filter ⚙️
          </button>
        </div>

        {/* Store Info */}
        <div className="mt-4 p-4 bg-white shadow-md border rounded-md">
          <h3 className="text-lg font-semibold">Nike </h3>
          <p className="text-gray-600 text-sm">
            Nike Store, DBZ-South-43,<br />
           
          </p>
          <p className="text-red-500 font-medium mt-2">
            Closed - Opens Tomorrow at 10:30 am
          </p>
        </div>
        <a
          href="#"
          className="text-gray-800 underline mt-2 inline-block font-medium"
        >
          View all stores
        </a>
      </div>

      {/* Right Section - Map */}
      <div className="w-full md:w-1/2">
       
        <Image
          src="/Map.png"
          alt="maps"
          width={300}
          height={300}
          className="w-full h-80 md:h-full rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
};

export default FindStoreSection;
