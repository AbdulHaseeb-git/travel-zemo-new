import React from "react";
import CategoriesCard from "./CategoriesCard";
import Image from "next/image";

const Categories = () => {
  const categories = [
    {
      img: "/images/categories/Group 48.svg",
      title: "Calculated Weather",
      desc: "Built Wicket longer admire do barton vanity itself do in it.",
    },
    {
      img: "/images/categories/Group 51.svg",
      title: "Best Flights",
      desc: "Engrossed listening. Park gate sell they west hard for the.",
    },
    {
      img: "/images/categories/Group 50.svg",
      title: "Local Events",
      desc: "Barton vanity itself do in it. Preferd to men it engrossed listening. ",
    },
    {
      img: "/images/categories/Group 49.svg",
      title: "Customization",
      desc: "We deliver outsourced aviation services for military customers",
    },
  ];

  return (
    <div className="flex flex-col gap-14 px-[10%] py-5">
      <div className="headings relative">
        <h3 className="relative z-10 text-center font-poppins font-semibold text-lg text-[#5E6282]">CATEGORIES</h3>
        <h2 className="relative z-10 text-center font-volkhov font-bold text-5xl text-[#14183E">We Offer Best Services</h2>
        <Image className="absolute top-0 right-0" src={"/images/categories/Group 4.svg"} width={100} height={100} alt="decoration" />
      </div>
      <div className="relative w-full min-h-fit">
        <div className=" flex flex-wrap justify-center sm:justify-between items-center relative z-10">
        {
                categories.map((category)=>(
                    <CategoriesCard props={category} key={category.title} />

                ))
            }
        </div>
        <Image className="absolute -bottom-5 left-[25%]" src={"/images/categories/c.svg"} width={60} height={60}  alt="rectangle"/>
      </div>
    </div>
  );
};

export default Categories;
