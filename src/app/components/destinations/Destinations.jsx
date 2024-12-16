import React from 'react'
import DestinationCard from './DestinationCard';
import Image from 'next/image';

const Destinations = () => {
    const destinations = [
        {
          img: "/images/destinations/Rectangle 14.png",
          place: "Rome, Italy",
          price: "$5.42k",
          icon : "/images/destinations/navigation 1.svg",
          desc : "10 Days Trip"
        },
        {
            img: "/images/destinations/Rectangle 15.png",
            place: "London, UK",
            price: "$4.2k",
            icon : "/images/destinations/navigation 1.svg",
          desc : "12 Days Trip"

          },
        {
            img: "/images/destinations/Rectangle 16.png",
            place: "Full Europe",
            price: "$15k",
            icon : "/images/destinations/navigation 1.svg",
          desc : "28 Days Trip"

          }    
        ];
    
  return (
    <div className="h-fit min-h-screen flex flex-col gap-14 px-[10%] py-4">
              <div className="headings">
                <h3 className="text-center font-poppins font-semibold text-lg text-[#5E6282]">Top Selling</h3>
                <h2 className="text-center font-volkhov font-bold text-5xl text-[#14183E">Top Destinations</h2>
              </div>
              <div className="relative w-full flex items-start  min-h-[50vh]">
        <div className="absolute left-0 top-0 max-h-full w-full flex items-start justify-between z-10">
            {
                destinations.map((destination)=>(
                    <DestinationCard props={destination} key={destination.place} />

                ))
            }
        </div>
        <Image className="absolute bottom-2 -right-10 z-0" src={"/images/destinations/spring.svg"} width={100} height={60}  alt="rectangle"/>
      </div>

        
      
    </div>
  )
}

export default Destinations
