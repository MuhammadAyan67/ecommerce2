
import { GearCarousel1 } from "@/components/GearCarousel1";
import { GearCarousel2 } from "@/components/GearCarousel2";

export default function GearUp() {
  return (
    <section>
      <h1 className="font-bold text-2xl p-5 mb-3 ml-2">Gear Up</h1>
        <h1 className="text-center pr-96">Shop Men&apos;s</h1>
      <div className="md:flex space-y-10 md:space-y-0  md:space-x-10">
        <GearCarousel1 />
        <GearCarousel2 />
      </div>
    </section>

  
  );
}
