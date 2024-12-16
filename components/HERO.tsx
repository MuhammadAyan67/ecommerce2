
import Link from "next/link"
import { Button } from "./ui/button"
import Image from "next/image"
export default function Hero(){
    return(
        <section className="flex justify-center flex-col items-center m-4 ">
            <div className="flex justify-center flex-col w-full bg-gray-100 items-center p-3">
            <h3 className="text-xl text-black font-medium">Hello Nike App</h3>
         <p className="text-sm text-gray-600" >
         <span>Download the app to access everything Nike.</span>{" "}
           <Link href={"/"} className="font-bold underline"> Get Your Great</Link>
        </p>
            </div>
            <Image src={"/Hero.png"} alt={"shoes"} width={1344} height={700}/>
           
               <div className="flex pt-20 font-bold p-2 justify-center items-center">
                <h1>First Look</h1></div>
            <div className=' flex justify-center  items-center text-6xl font-medium'> <h1>NIKE AIR MAX PULSE</h1></div>
            <div>
                <div className='flex font-medium p-4 justify-center items-center'>
                    Extreme comfort. Hyper durable. Max volume. Introducing the Air Max Pulse <br />
                    —designed to push you past your limits and help you go to the max.
                </div>

                <div className='flex justify-center p-4 items-center rounded-2xl'>
                    <Button className='rounded-full m-1'><Link href={"/joinus"}>Notify Me</Link></Button>
                    <Button className='rounded-full m-1'> <Link href={"/featured"}>Shop Air Max</Link></Button>
                </div>
            </div>
        </section>
    )
    
}