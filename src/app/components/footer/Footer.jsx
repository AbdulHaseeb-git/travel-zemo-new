import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white py-10 px-[10%]">
      <div className="w-full flex flex-wrap gap-4">
        <div className="bg-red-700 w-fit">
          <h2 className="text-[44px] font-poppins font-medium text-[#181E4B] mb-2">Jadoo.</h2>
          <p className="text-[#5E6282] text-[13px] font-poppins font-medium">
            Book your trip in minutes, get full control for much longer.
          </p>
        </div>

        {/* Company */}
        <div className="bg-red-700 w-fit">
          <h3 className="text-[21px] font-bold font-poppins text-[#080809] mb-3">Company</h3>
          <ul className="space-y-2 text-[#5E6282] font-poppins font-medium text-[18px]">
            <li><Link href="#">About</Link></li>
            <li><Link href="#">Careers</Link></li>
            <li><Link href="#">Mobile</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className="bg-red-700 w-fit">
          <h3 className="text-[21px] font-bold font-poppins text-[#080809] mb-3">Contact</h3>
          <ul className="space-y-2 text-[#5E6282] font-poppins font-medium text-[18px]">
            <li><Link href="#">Help/FAQ</Link></li>
            <li><Link href="#">Press</Link></li>
            <li><Link href="#">Affiliates</Link></li>
          </ul>
        </div>

        {/* More */}
        <div className="bg-red-700 w-fit">
          <h3 className="text-[21px] font-bold font-poppins text-[#080809] mb-3">More</h3>
          <ul className="space-y-2 text-[#5E6282] font-poppins font-medium text-[18px]">
            <li><Link href="#">Airline Fees</Link></li>
            <li><Link href="#">Airline</Link></li>
            <li><Link href="#">Low Fare Tips</Link></li>
          </ul>
        </div>
        <div className=" min-w-[220px] bg-red-700 w-fit flex flex-col items-center mt-10 space-y-4">
        {/* Social Icons */}
        <div className="flex justify-between w-full">
          <Link href="#" className="p-2 bg-gray-200 rounded-full">
            <span className="sr-only">Facebook</span>
            <Image
              src="/icons/facebook.svg" // Replace with your icon path
              alt="Facebook"
              width={20}
              height={20}
            />
          </Link>
          <Link href="#" className="p-2 bg-gray-200 rounded-full">
            <span className="sr-only">Instagram</span>
            <Image
              src="/icons/instagram.svg" 
              alt="Instagram"
              width={20}
              height={20}
            />
          </Link>
          <Link href="#" className="p-2 bg-gray-200 rounded-full">
            <span className="sr-only">Twitter</span>
            <Image
              src="/icons/twitter.svg" 
              alt="Twitter"
              width={20}
              height={20}
            />
          </Link>
        </div>

        {/* App Links */}
        <div className="flex">
          <Link href="#">
            <Image
              src="/images/google-play.png" 
              alt="Google Play"
              width={120}
              height={40}
            />
          </Link>
          <Link href="#">
            <Image
              src="/images/app-store.png" // Replace with your path
              alt="App Store"
              width={120}
              height={40}
            />
          </Link>
        </div>
      </div>

      </div>


      {/* Copyright */}
      <div className="text-center text-[#5E6282] text-[14px] font-poppins font-medium mt-6">
        All rights reserved &copy; jadoo.co
      </div>
    </footer>
  );
}
