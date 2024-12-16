"use client"
import Image from 'next/image'
import Link from 'next/link';
import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa';

const Header = () => {
    const [language, setLanguage] = useState("en");
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    return (
        <header className='w-full h-16 font-semibold flex items-center justify-between  relative'>
            <Image src={"/images/hero/Logo.svg"} width={100} height={40} alt='LOGO'/>        
            <nav className={`h-screen lg:h-full lg:flex ${isMenuOpen ? "flex" : "hidden"} absolute lg:relative top-16 left-0 lg:top-0 lg:left-0 w-full bg-[#FFF1DA]  lg:bg-transparent lg:w-auto z-30`}>
                <ul className='flex flex-col items-center lg:flex-row gap-10 text-[#212832] py-10 lg:py-0 px-10 lg:px-0'>
                    <li tabIndex={'0'} className='focus:rounded p-1 border-2 border-transparent focus:border-white text-center content-center cursor-pointer'>
                        <Link className='hover:text-gray-400' href={"/"}>Destinations</Link>
                    </li>
                    <li tabIndex={'0'} className='focus:rounded p-1 border-2 border-transparent focus:border-white text-center content-center cursor-pointer'>
                        <Link className='hover:text-gray-400' href={"/"}>Hotels</Link>
                    </li>
                    <li tabIndex={'0'} className='focus:rounded p-1 border-2 border-transparent focus:border-white text-center content-center cursor-pointer'>
                        <Link className='hover:text-gray-400' href={"/"}>Flights</Link>
                    </li>
                    <li tabIndex={'0'} className='focus:rounded p-1 border-2 border-transparent focus:border-white text-center content-center cursor-pointer'>
                        <Link className='hover:text-gray-400' href={"/"}>Bookings</Link>
                    </li>
                </ul>
            </nav>
            <div className='flex gap-10 text-[#212832] items-center'>
                <button className='focus:rounded p-1 border-2 border-transparent focus:border-[#212832] text-center content-center cursor-pointer hover:text-gray-400'>
                    Login
                </button>
                <button className='focus:rounded p-1 border-2 border-transparent focus:border-[#212832] text-center content-center cursor-pointer hover:text-gray-400'>
                    Sign up
                </button>
                <select className='bg-transparent hover:text-gray-400' name="language" id="language" value={language}
                    onChange={(e) => setLanguage(e.target.value)}>
                    <option value={"english"}>EN</option>
                    <option value={"spanish"}>SP</option>
                </select>
            </div>

            <div className="lg:hidden flex items-center">
                <button onClick={toggleMenu} className="text-xl">
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>
        </header>
    )
}

export default Header;
