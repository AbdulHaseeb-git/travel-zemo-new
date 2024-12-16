import Image from 'next/image'
import React from 'react'

const DestinationCard = ({props}) => {
  return (
      <div className='max-w-[300px] hover:grayscale bg-white rounded-3xl flex flex-col gap-5 items-center justify-between shadow-2xl cursor-pointer'>
        <div className='w-full h-[300px] rounded-t-3xl overflow-hidden'>
        <Image className='h-auto w-auto' src={props.img}  width={300} height={300} objectFit='cover' alt='Category'/>

        </div>
          <div className='w-full flex flex-col gap-3  font-poppins font-medium text-lg text-[#5E6282] p-3'>

          <div className='flex justify-between w-full'>

          <span className='text-center '>{props.place}</span>
          <span className='text-center '>{props.price}</span>
          </div>
          <p className='w-full flex gap-4 '>
            <Image className='h-auto w-auto' src={props.icon} alt="icon" width={20} height={20} />
            {props.desc}</p>
          </div>
      </div>
  )
}

export default DestinationCard
