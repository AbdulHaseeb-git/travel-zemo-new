"use client"; // Add this line if using Next.js app router (v13+)

import Image from "next/image";

const Testimonials = () => {
  return (
    <section className="px-[10%] py-10 min-h-[50vh] bg-white">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8  items-start">
        <div className="flex flex-col gap-6 mb-10 w-full items-center">
          <p className="text-[#5E6282] font-poppins font-semibold text-xl md:text-lg uppercase">
            Testimonials
          </p>
          <h2 className="text-5xl md:text-[50px] font-volkhov font-bold text-[#14183E]">
            What People Say <br /> About Us.
          </h2>
          <div className="flex space-x-2 mt-8">
            <span className="w-2 h-2 rounded-full bg-gray-400"></span>
            <span className="w-2 h-2 rounded-full bg-gray-900"></span>
            <span className="w-2 h-2 rounded-full bg-gray-400"></span>
          </div>
        </div>

        <div className="relative">
          <div className="bg-white shadow-lg rounded-lg p-6 mb-8">
            <div className="absolute -top-8 -left-6 w-16 h-16">
              <Image
                src="/images/testimonials/Image.png" 
                alt="Mike Taylor"
                width={64}
                height={64}
                className="rounded-full shadow-md"
              />
            </div>

            <p className="text-gray-600 text-sm mb-4 mt-8 leading-relaxed">
              “On the Windows talking painted posture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </p>
            <p className="font-bold text-gray-900">Mike Taylor</p>
            <p className="text-gray-500 text-sm">Lahore, Pakistan</p>
          </div>

          <div className="absolute top-10 left-10 bg-gray-100 rounded-lg shadow-md p-4 opacity-30 z-[-1]">
            <p className="font-bold text-gray-700">Chris Thomas</p>
            <p className="text-gray-500 text-xs">CEO of Red Button</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
