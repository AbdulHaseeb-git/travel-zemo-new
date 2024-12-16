import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white py-10 px-[10%]">
      <div className="w-full flex flex-wrap justify-center lg:justify-between md:gap-14 gap-4">
        <div className=" max-w-48">
          <h2 className="text-[44px] font-poppins font-medium text-[#181E4B] mb-2">Jadoo.</h2>
          <p className="w-full text-[#5E6282] text-[13px] font-poppins font-medium">
          Book your trip in minute, get full Control for much longer.
          </p>
        </div>

        {/* Company */}
        <div className="w-fit">
          <h3 className="text-[21px] font-bold font-poppins text-[#080809] mb-3">Company</h3>
          <ul className="space-y-2 text-[#5E6282] font-poppins font-medium text-[18px]">
            <li><Link href="#">About</Link></li>
            <li><Link href="#">Careers</Link></li>
            <li><Link href="#">Mobile</Link></li>
          </ul>
        </div>

        {/* Contact */}
        <div className=" w-fit">
          <h3 className="text-[21px] font-bold font-poppins text-[#080809] mb-3">Contact</h3>
          <ul className="space-y-2 text-[#5E6282] font-poppins font-medium text-[18px]">
            <li><Link href="#">Help/FAQ</Link></li>
            <li><Link href="#">Press</Link></li>
            <li><Link href="#">Affiliates</Link></li>
          </ul>
        </div>

        {/* More */}
        <div className=" w-fit">
          <h3 className="text-[21px] font-bold font-poppins text-[#080809] mb-3">More</h3>
          <ul className="space-y-2 text-[#5E6282] font-poppins font-medium text-[18px]">
            <li><Link href="#">Airline Fees</Link></li>
            <li><Link href="#">Airline</Link></li>
            <li><Link href="#">Low Fare Tips</Link></li>
          </ul>
        </div>

        <div className=" min-w-fit w-[250px] flex flex-col gap-3 items-center">
        {/* Social Icons */}
        <div className="flex justify-between w-full">
          <Link href="#" className="  rounded-full">
            <span className="sr-only">Facebook</span>
            <Image
              src="/images/footer/Social (2).svg" 
              alt="Facebook"
              width={40}
              height={40}
            />
          </Link>
          <Link href="#" className="bg-[conic-gradient(from_90deg,_#f58529,_#dd2a7b,_#8134af,_#515bd4)] rounded-full overflow-hidden">
            <span className="sr-only">Instagram</span>
            <Image className="rounded-full overflow-hidden"
              src="/images/footer/instagram 1.svg" 
              alt="Instagram"
              width={40}
              height={40}
            />
          </Link>
          <Link href="#" className=" rounded-full">
            <span className="sr-only">Twitter</span>
            <Image
              src="/images/footer/Social (1).svg" 
              alt="Twitter"
              width={40}
              height={40}
/>
          </Link>
        </div>
         
         <h5 className="w-full font-poppins font-medium text-[20px] text-[#5E6282]">
          Discover Our App
          </h5>
        {/* App Links */}
        <div className="w-full flex justify-between">
          <Link className="bg-[#080809] rounded-full" href="#">
          <div className="w-[110px] h-10 flex justify-center items-center gap-2">
            <Image
              src="/images/footer/google-play 1.svg" 
              alt="Google Play"
              width={20}
              height={20}
            />
            <div>
              <h6 className="font-poppins font-bold text-white text-[10px]">GET IT ON</h6>
              <p className="font-poppins font-normal text-white text-[8px]">GOOGLE PLAY</p>
            </div>

          </div>
          </Link>
          <Link className="bg-[#080809] rounded-full" href="#">
                      <div className="w-[110px] h-10 flex justify-center items-center gap-2">
                      <Image
              src="/images/footer/apple (2) 1.svg"
              alt="App Store"
              width={20}
              height={20}
            />
            <div>
              <p className="font-poppins font-normal text-white text-[8px]">Available on the</p>
              <h6 className="font-poppins font-bold text-white text-[10px]">Apple Store</h6>
            </div>

          </div>

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
