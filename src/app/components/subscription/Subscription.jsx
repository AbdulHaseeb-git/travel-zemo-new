"use client"
import Image from "next/image";
import React, { useState } from "react";

const Subscription = () => {
    const [email, setEmail] = useState("");
  return (
    <div className="min-h-[400px] h-fit px-[10%]  my-20 relative">

      <Image
        className="absolute -bottom-12 right-12 w-auto h-auto"
        src={"/images/subscription/Group 5.svg"}
        width={50}
        height={50}
        alt="decoration"
      />

      <div className="z-10 flex justify-center items-center bg-[#DFD7F9] py-16 min-h-[400px] h-fit relative rounded-tr-xl rounded-br-xl rounded-bl-xl rounded-tl-[100px]">
      <div className="w-[70%] flex flex-col gap-5">
            <h2 className="w-full text-center font-poppins font-semibold text-2xl md:text-[33px] text-#5E6282]">Subscribe to get information, latest news and other
            interesting offers about Cobham</h2>
            <form className="w-full  flex flex-col items-center md:flex-row  gap-5 z-10 justify-center">
                <div className="w-fit  flex gap-3 p-3 h-12 rounded-lg bg-white">
                <Image src={"/images/subscription/Group 46.svg"} width={21} height={18} alt="email"/>
                <input className="w-[250px] outline-none placeholder-[#39425D] text-black font-poppins" type="email" placeholder="Your email" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                </div>
                <input type="submit" value="Subscribe" className="bg-gradient-to-r from-[#FF946D] to-[#FF7D68] h-12 w-24 rounded-lg font-semibold text-[17px] text-white" />
            </form>
        </div>

        <Image
          className="z-0 w-auto h-auto absolute top-12 -right-12 -rotate-90 opacity-15"
          src={"/images/subscription/Group 42.svg"}
          width={70}
          height={70}
          alt="rings"
        />

        <Image
          className="z-0 absolute bottom-0 left-0 w-auto h-auto opacity-15"
          src={"/images/subscription/Group 42.svg"}
          width={70}
          height={70}
          alt="rings"
        />
        <Image
          className="z-0 absolute -top-4 -right-4 w-auto h-auto bg-indigo-600 rounded-full p-2"
          src={"/images/subscription/send (2) 1.svg"}
          width={20}
          height={20}
          alt="navigation"
        />
      </div>
    </div>
  );
};

export default Subscription;
