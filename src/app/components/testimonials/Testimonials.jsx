"use client";
import { useState } from "react";
import Image from "next/image";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0); 
  const testimonials = [
    {
      id: 1,
      text: "“On the Windows talking painted posture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.”",
      name: "Mike Taylor",
      location: "Lahore, Pakistan",
      image: "/images/testimonials/Image.png",
      role: "Lahore, Pakistan",
    },
    {
      id: 2,
      text: "“Second testimonial text goes here. It's equally amazing and insightful for everyone reading it.”",
      name: "Chris Thomas",
      location: "Karachi, Pakistan",
      image: "/images/testimonials/Image.png",
      role: "CEO of Red Button",
    },
    {
      id: 3,
      text: "“Third testimonial text is as impressive as the rest. It's short but leaves an impact.”",
      name: "Sara Lee",
      location: "Islamabad, Pakistan",
      image: "/images/testimonials/Image.png",
      role: "Product Manager",
    },
  ];

  // Function to handle button click
  const handleCarouselChange = (index) => {
    setActiveIndex(index);
  };

  return (
    <section className="px-[10%] py-10 min-h-[50vh] bg-white">
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 items-start">
        {/* Headings */}
        <div className="flex flex-col gap-6 mb-10 w-full items-center">
          <p className="text-[#5E6282] font-poppins font-semibold text-xl md:text-lg uppercase">
            Testimonials
          </p>
          <h2 className="text-5xl md:text-[50px] font-volkhov font-bold text-[#14183E]">
            What People Say <br /> About Us.
          </h2>
          {/* Carousel Buttons */}
          <div className="flex space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <span
                key={index}
                onClick={() => handleCarouselChange(index)}
                className={`w-3 h-3 rounded-full cursor-pointer ${
                  activeIndex === index ? "bg-gray-900" : "bg-gray-400"
                }`}
              ></span>
            ))}
          </div>
        </div>

        {/* Carousel */}
        <div className="relative w-full flex justify-center items-center">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`${
                activeIndex === index ? "block" : "hidden"
              } bg-white shadow-lg rounded-lg p-6 mb-8 w-[90%]`}
            >
              <div className="absolute -top-0 -left-0 w-16 h-16">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={64}
                  height={64}
                  className="rounded-full shadow-md"
                />
              </div>

              <p className="text-gray-600 text-sm mb-4 mt-8 leading-relaxed">
                {testimonial.text}
              </p>
              <p className="font-bold text-gray-900">{testimonial.name}</p>
              <p className="text-gray-500 text-sm">{testimonial.location}</p>

              <div className="absolute -bottom-100 right-0 bg-gray-100 shadow-md p-4 z-0 w-[90%]">
                <p className="font-bold text-gray-700">{testimonial.name}</p>
                <p className="text-gray-500 text-xs">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
