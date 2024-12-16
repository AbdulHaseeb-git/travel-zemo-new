import React from "react";
import Header from "../header/Header";
import Image from "next/image";
import { FaPlay } from "react-icons/fa";

const Hero = () => {
  return (
    <section className='flex flex-col gap-10 w-full h-fit min-h-screen px-5 md:px-[10%] py-5 bg-[url("/images/hero/Decore.png")] bg-center bg-cover relative'>
      <Header/>
      <div className="min-h-[80vh] w-full flex flex-col-reverse md:flex-row justify-between overflow-x-hidden">
        <div className="h-full w-full md:w-1/2 flex flex-col gap-0 lg:gap-5 relative z-20">
          <h4 className="text-xl font-poppins font-bold text-[#DF6951]">
            Best Destinations around the world
          </h4>
          <h1 className="w-full min-h-[250px] relative font-volkhov font-bold text-[50px] md:text-[40px] lg:text-[84px] text-[#181E4B]">
            <span className="relative z-10">
              Travel, enjoy and live a new and full life
            </span>
            <img
              className="absolute top-[20%] right-[-30px] z-0"
              src="/images/hero/Decore1.png"
              alt="Decore1"
            />
          </h1>
          <p className="font-poppins font-medium text-[14px] sm:text-[16px] text-[#5E6282] text-justify">
            Built Wicket longer admire do barton vanity itself do in it.
            Preferred to sportsmen it engrossed listening. Park gate sell they
            west hard for the.
          </p>
          <div className="flex flex-col sm:flex-row gap-7 font-poppins font-medium text-lg">
            <button className="focus:border-gray-400 border border-transparent rounded bg-orange-400 text-white h-10 p-2 focus:text-black">
              Find out more
            </button>
            <button className="focus:border-gray-400 border border-transparent flex gap-3 text-[#686D77] h-10 p-2 items-center text-[14px] focus:text-black focus:font-bold">
              <span className="rounded-full grid place-items-center w-8 h-8 bg-red-800">
                <FaPlay className="w-2 h-2" fill="white" />
              </span>{" "}
              Play Demo
            </button>
          </div>
        </div>
        <div className="relative h-full w-full md:w-1/2 flex justify-center items-start">
          <img
            className="absolute top-0 left-20 z-0"
            src="/images/hero/plane.svg"
            alt="Plane"
          />
          <Image
            className="z-10 absolute left-0 top-0"
            src={"/images/hero/Traveller 1.png"}
            width={500}
            height={300}
            objectFit="cover"
          />
          <img
            className="absolute top-5 right-0 z-0"
            src="/images/hero/plane.svg"
            alt="Plane"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

