"use client";
import Image from "next/image";
import React, { useState } from "react";

const Booking = () => {
  const [percentage, setPercentage] = useState(40);

  return (
    <div className="w-full h-fit min-h-screen flex flex-wrap lg-justify-between justify-center items-start px-[10%] py-10 ">
      <div className="sm:min-w-[350px] w-full lg:w-1/2 flex flex-col gap-5">
        <div className="headings flex flex-col">
          <h3 className="font-poppins font-semibold text-md md:text-lg text-[#5E6282]">
            Easy and Fast
          </h3>
          <h2 className="flex flex-col font-volkhov font-bold text-3xl  md:text-5xl text-[#14183E]">
            Book Your Next Trip
            <span>In 3 Easy Steps</span>
          </h2>
        </div>
        <div className="flex flex-col gap-5">
          <div className="w-full flex justify-between items-center gap-8">
            <Image
              className="w-auto h-auto"
              src={"/images/booking/Group 7.svg"}
              width={40}
              height={40}
              alt="destination"
            />
            <div>
              <h4 className="font-poppins font-bold text-[16px] text-[#5E6282]">
                Choose Destination
              </h4>
              <p className="font-poppins text-[16px] text-[#5E6282] p-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </div>
          <div className="w-full flex justify-between items-center gap-8">
            <Image
              className="w-auto h-auto"
              src={"/images/booking/Group 11.svg"}
              width={40}
              height={40}
              alt="pay"
            />
            <div>
              <h4 className="font-poppins font-bold text-[16px] text-[#5E6282]">
                Make Payment
              </h4>
              <p className="font-poppins text-[16px] text-[#5E6282]  p-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </div>
          <div className="w-full flex justify-between items-center gap-8">
            <Image
              className="w-auto h-auto"
              src={"/images/booking/Group 12.svg"}
              width={40}
              height={40}
              alt="reach"
            />
            <div>
              <h4 className="font-poppins font-bold text-[16px] text-[#5E6282]">
                Reach Airport on Selected Date
              </h4>
              <p className="font-poppins text-[16px] text-[#5E6282]  p-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                tortor tempus.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Cards  */}
      <div className="min-w-[350px] h-screen md:h-[80vh] lg:w-1/2 p-6 relative ">
        <div className="absolute top-0 -right-16  w-64 h-64 rounded-full bg-blue-500 blur-lg opacity-35 shadow-[0_0_100px_50px_rgba(59,130,246,0.5)]"></div>
        {/* Main Trip Card */}
        <div className="absolute top-[50%] -translate-y-[50%]  right-0 z-10 bg-white rounded-3xl shadow-xl w-80 sm:w- md:w-80 ">
          <div className="rounded-t-3xl overflow-hidden">
            <Image
              src={"/images/booking/Rectangle 17.png"}
              alt="Trip to Greece"
              width={400}
              height={200}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Content Section */}
          <div className="p-4 space-y-3">
            <h2 className="text-lg font-medium font-poppins text-[#080809]">
              Trip to Greece
            </h2>
            <p className="font-poppins font-medium text-[16px] text-[#84829A]">
              14–29 June | by Robbin joseph
            </p>
            <div className="flex gap-4">
              <Image
                className="w-auto h-auto rounded-full bg-slate-300 p-2"
                src={"/images/booking/leaf 1.svg"}
                width={20}
                height={20}
                alt="leaf"
              />
              <Image
                className="w-auto h-auto  rounded-full bg-slate-300 p-2"
                src={"/images/booking/map 1.svg"}
                width={20}
                height={20}
                alt="map"
              />
              <Image
                className="w-auto h-auto  rounded-full bg-slate-300 p-2"
                src={"/images/booking/send 2.svg"}
                width={20}
                height={20}
                alt="navigation"
              />
            </div>
            <div className="flex justify-between items-center mt-4">
              <div className="flex items-center space-x-2 text-sm text-[#5E6282]">
                <Image
                  className="w-auto h-auto"
                  src={"/images/booking/building 1.svg"}
                  width={20}
                  height={20}
                  alt="building"
                />
                <span>24 people going</span>
              </div>
              <Image
                className="w-auto h-auto"
                src={"/images/booking/heart (6) 1.svg"}
                width={20}
                height={20}
                alt="heart"
              />
            </div>
          </div>
        </div>

        {/* Secondary Card */}
        <div className="absolute bottom-[15%] -translate-y-[15%] right-0 sm:-right-16 z-20 bg-white rounded-3xl shadow-lg w-60 p-4 flex flex-col space-y-2">
          <div className="flex items-center space-x-4">
            <Image
              src={"/images/booking/image 32.png"}
              alt="Trip to Rome"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div>
              <p className="font-poppins font-medium text-sm text-[#84829A]">
                Ongoing
              </p>
              <h3 className="text-sm font-semibold text-[#1E1D4C]">
                Trip to Rome
              </h3>
            </div>
          </div>
          <p className="text-xs text-[#5E6282]">
            {percentage}% <span>completed</span>
          </p>
          <div className="w-full bg-gray-200 h-2 rounded-full">
            <div
              className="bg-[#8A79DF] h-2 rounded-full"
              style={{ width: `${percentage}%` }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
