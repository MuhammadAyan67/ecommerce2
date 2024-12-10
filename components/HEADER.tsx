import { Heart, ShoppingBagIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

export default function Nav() {
  return (
    <header className=''>
    {/* Top bar */}
    <div className="bg-gray-100 flex justify-between items-center px-6 py-2 md:text-[11px] sm:text-[9px] text-[8px] font-medium text-gray-600">
      <Image src={"/logo1.png"} alt={''} width={24} height={24}/>
      <div>
 
</div>
      <div className="flex md:gap-4 sm:gap-3 gap-2 ">
        <Link href="/location" className="border-gray-500 hover:text-gray-800 border-r-2 pr-3">Find Link Store</Link>
        <Link href="/help" className="border-gray-500 hover:text-gray-800 border-r-2 pr-3">Help</Link>
        <Link href="/joinus" className="border-gray-500 hover:text-gray-800 border-r-2 pr-3">Join Us</Link>
        <Link href="/login" className=" hover:text-gray-800  pr-3">Sign In</Link>
      </div>
    </div>

    {/* Main navigation */}
    <div className="flex flex-wrap justify-between items-center px-6 py-4">
      {/* Left section (Logo) */}
      <div className="flex items-center">
        <Image
          src={"/logo2.png"}
          alt="Nike Logo"
          width={35} height={35}
        />
      </div>

      {/* Center section (Navigation Links) */}
      <nav className="flex gap-4 md:gap-6 text-gray-700 font-medium md:text-[16px] sm:text-[14px] text-[10px] ">
        <Link href="/featured" className="hover:text-black whitespace-nowrap">New & Featured</Link>
        <Link href="#" className="hover:text-black whitespace-nowrap">Men</Link>
        <Link href="#" className="hover:text-black whitespace-nowrap">Women</Link>
        <Link href="#" className="hover:text-black whitespace-nowrap">Kids</Link>
        <Link href="#" className="hover:text-black whitespace-nowrap">Sale</Link>
        <Link href="#" className="hover:text-black whitespace-nowrap">SNKRS</Link>
      </nav>

      {/* Right section (Search, Wishlist, Cart) */}
      <div className="flex items-center gap-4 mt-4 md:mt-0">
        {/* Search Bar */}
        <div className="relative hidden md:block">
          <input
            type="text"
            placeholder="Search"
            className="border bg-gray-100 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none"
          />
          <FaSearch className="absolute right-3 top-2.5 text-gray-500" />
        </div>
        <Heart  />
        <ShoppingBagIcon className='' />
      </div>
    </div>

    {/* Mobile Search Bar */}
    <div className="block md:hidden px-6 mt-2">
      <div className="relative">
        <input
          type="text"
          placeholder="Search"
          className="border border-gray-300 rounded-full pl-4 pr-10 py-2 text-sm focus:outline-none"
        />
        <FaSearch className="absolute right-3 top-2.5 text-gray-500" />

      </div>
      
    </div>
  </header>
  );
}
