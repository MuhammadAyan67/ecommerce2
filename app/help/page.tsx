
import { Input } from "@/components/ui/input";
import Link from "next/link";

import React from "react";

const Help = () => {
  return (
    <div className="bg-white text-black min-h-screen">
      <div className="max-w-7xl mx-auto  px-6 lg:px-16 py-12">
        <h1 className="text-center text-4xl p-5">GET HELP</h1>
        <Input className="w-72 p-5 border-black border-2 mx-auto  mb-10 flex justify-center items-center" placeholder="What can we help you with"/>
        {/* Header */}
        <h1 className="text-3xl lg:text-4xl font-medium mb-6 leading-snug">
          WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
        </h1>
        <p className="text-lg leading-relaxed mb-6">
          We want to make buying your favorite Nike shoes and gear online fast and easy, and we accept the following payment options:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-lg">
          <li>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</li>
          <li>
            If you enter your PAN information at checkout, you’ll be able to pay for your order with PayTM or a local credit or debit card.
          </li>
          <li>Apple Pay</li>
        </ul>
        <p className="text-lg mt-6 leading-relaxed">
          Nike Members can store multiple debit or credit cards in their profile for faster checkout. If you’re not already a Member,{" "}
          <a href="/joinus" className="text-blue-500 underline">
            join us
          </a>{" "}
          today.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-wrap gap-4">
          <button className="bg-black text-white font-medium px-5 py-2 rounded-lg shadow hover:bg-gray-800">
          <Link href={"/joinus"}>  JOIN US</Link>
          </button>
          <button className="bg-black text-white font-medium px-5 py-2 rounded-lg shadow hover:bg-gray-800">
           <Link href={"/featured"}>Shop Now</Link>
          </button>
        </div>

        {/* FAQ Section */}
        <div className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">FAQs</h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-bold mb-2">Does my card need international purchases enabled?</h3>
              <p>
                Yes, we recommend asking your bank to enable international purchases on your card. You will be notified at checkout if
                international purchases need to be enabled.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Can I pay for my order with multiple methods?</h3>
              <p>No, payment for Nike orders can’t be split between multiple payment methods.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">What payment method is accepted for SNKRS orders?</h3>
              <p>You can use any accepted credit card to pay for your SNKRS order.</p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Why don’t I see Apple Pay as an option?</h3>
              <p>
                To see Apple Pay as an option in the Nike App or on Nike.com, you’ll need to use a compatible Apple device running the
                latest OS, be signed in to your iCloud account and have a supported card in your Wallet. Additionally, you’ll need to
                use Safari to use Apple Pay on Nike.com.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="mt-16 border-t border-gray-700 pt-10">
          <h2 className="text-2xl font-semibold mb-6">CONTACT US</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Contact Details */}
            <div className="space-y-2">
              <p className="text-lg">📞 000 800 919 0566</p>
              <p className="text-sm">Products & Orders: 24 hours a day, 7 days a week</p>
              <p className="text-sm">Company Info & Enquiries: 07:30 - 16:30, Monday - Friday</p>
            </div>
            {/* Chat Option */}
            <div className="space-y-2">
              <p className="text-lg">💬 24 hours a day, 7 days a week</p>
              <p className="text-sm">We’ll reply within five business days.</p>
            </div>
            {/* Store Locator */}
            <div className="space-y-2">
              <p className="text-lg">📍 STORE LOCATOR</p>
              <p className="text-sm">Find Nike retail stores near you</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Help;
