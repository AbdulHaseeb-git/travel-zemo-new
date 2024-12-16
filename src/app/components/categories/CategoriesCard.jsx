import Image from 'next/image'
import React from 'react'

const CategoriesCard = ({props}) => {
  return (

      <div className='w-full sm:w-[200px] h-full min-h-[300px] md:w-[250px] hover:bg-white rounded-3xl flex flex-col gap-5 items-center justify-between p-4 hover:shadow-2xl cursor-pointer'>
          <Image className='h-auto w-auto' src={props.img}  width={props.title === "Best Flights" ? 120 : 60} height={props.title === "Best Flights" ? 120 : 60} alt='Category'/>
          <h5 className='text-center font-semibold text-xl text-[#1E1D4C]'>{props.title}</h5>
          <p className='text-center font-poppins font-medium text-[16px] text-[#5E6282]'>{props.desc}</p>
      </div>
      )
    
  
}

export default CategoriesCard
