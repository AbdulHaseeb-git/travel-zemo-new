import Image from 'next/image'
import React from 'react'

const Logos = () => {
    const logos = [
        {img : "/images/logos/image 27.png"},
        {img : "/images/logos/image 28.png"},
        {img : "/images/logos/image 29.png"},
        {img : "/images/logos/image 30.png"},
        {img : "/images/logos/image 31.png"},
    ]
  return (
    <div className='w-full min-h-[20vh] px-[10%] py-10 flex  flex-wrap justify-center md:justify-between gap-5 items-center'>
        {logos.map((logo,index)=>(
            <div key={index} className='min-w-[120px] h-16 rounded hover:shadow-xl flex gap-6 justify-center items-center p-2'>
                <Image src={logo.img} width={100} height={50} alt='logo' className='w-auto h-auto'/>
            </div>))}
    </div>
  )
}

export default Logos
