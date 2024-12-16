"use client"
import * as React from "react"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

import Link from "next/link"
import { airMax } from "@/data/detail"


export function CarouselSize() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
        <h1 className="text-xl font-bold p-5 pt-12">Best Of Air Max</h1>
        <h1 className="text-end pr-28">Shop</h1>
      <CarouselContent>
        {airMax.map((item) => (
          
          <CarouselItem key={item.id} className="md:basis-1/2 lg:basis-1/3">
            <Link href={item.link}>
            <div className="p-7">
              <Card>
                <CardContent className=" bg-[#F5F5F5]  aspect-square group ">
                 <Image src={item.img} alt={"shoes"} width={440} height={440}/>
                </CardContent>
                
              </Card>
            </div>
                <div className=" flex pl-7 justify-between mx-2 mt-2">
                  <h1 className="font-semibold text-sm">{item.title}</h1>
                    <h2 className="font-semibold text-sm">{item.price}</h2>
                </div>
                <h3 className="ml-2 text-sm pl-7">{item.title2}</h3>
                </Link>
          </CarouselItem>
        ))}
        
      </CarouselContent>
      <div className="absolute  bottom-[390px] right-14 md:bottom-[450px] md:right-14 lg:bottom-[400px] xl:bottom-[500px]">
      <CarouselPrevious />
      <CarouselNext />
      </div>
   
    </Carousel>
  )
}