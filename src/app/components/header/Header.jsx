"use client"
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'

const Header = () => {
    const [language, setLanguage] = useState("en");
  return (
    <header className='w-full h-10 font-semibold flex items-center justify-between'>
        <Image src={"/images/hero/Logo.svg"} width={100} height={40} alt='LOGO'/>        
        <nav>
            <ul className='flex gap-10 text-[#212832] '>
                <li tabIndex={'0'} className='focus:rounded p-1 border-2 border-transparent focus:border-[#212832] text-center content-center cursor-pointer'><Link className=' hover:text-gray-400' href={"/"}>Destinations</Link></li>
                <li tabIndex={'0'}  className='focus:rounded p-1 border-2 border-transparent focus:border-[#212832] text-center content-center cursor-pointer'><Link className=' hover:text-gray-400' href={"/"}>Hotels</Link></li>
                <li tabIndex={'0'}  className='focus:rounded p-1 border-2 border-transparent focus:border-[#212832] text-center content-center cursor-pointer'><Link className=' hover:text-gray-400' href={"/"}>Flights</Link></li>
                <li tabIndex={'0'}  className='focus:rounded p-1 border-2 border-transparent focus:border-[#212832] text-center content-center cursor-pointer'><Link className=' hover:text-gray-400' href={"/"}>Bookings</Link></li>
            </ul>
        </nav>
        <div className='flex gap-10 text-[#212832] '>
            <button className='focus:rounded p-1 border-2 border-transparent focus:border-[#212832] text-center content-center cursor-pointer hover:text-gray-400'>Login</button>
            <button className='focus:rounded p-1 border-2 border-transparent focus:border-[#212832] text-center content-center cursor-pointer hover:text-gray-400'>Sign up</button>
            <select className='bg-transparent hover:text-gray-400' name="language" id="language" value={language}
              onChange={(e)=>setLanguage(e.target.value)}>
                <option value={"english"}>EN</option>
                <option value={"spanish"}>SP</option>
            </select>
        </div>
    </header>
  )
}

export default Header
