import { Link } from "react-router-dom";
import "./../custom.css";

function Footer() {
  return ( 
    <>
      <div className="bg-[#072951] text-white py-16">
        <div className="grid grid-cols-6 gap-10 px-20">
          <div className="col-span-2">
            <div className="text-[72px] font-bold font-poppins pb-7 leading-none">LOGO</div>
            <div className="text-[18px] font-light leading-[21.94px] pb-4">Subscribe to our newsletters and stay up to date on features and releases.</div>
            <div className="text-[18px] font-medium leading-[24px]">Copyrights @ Progfams 2024</div>
          </div>
          <div className="col-span-1">
            <Link to="#" className="text-[20px] font-medium leading-[24px] hover:text-[#4393D8] block mb-7">Home</Link>
            <Link to="#" className="text-[20px] font-medium leading-[24px] hover:text-[#4393D8] block mb-7">About Us</Link>
            <Link to="#" className="text-[20px] font-medium leading-[24px] hover:text-[#4393D8] block">Service</Link>
          </div>
          <div className="col-span-1">
            <Link to="#" className="text-[20px] font-medium leading-[24px] hover:text-[#4393D8] block mb-7">Works</Link>
            <Link to="#" className="text-[20px] font-medium leading-[24px] hover:text-[#4393D8] block mb-7">Boot Camp</Link>
          </div><div className="col-span-1">
            <Link to="#" className="text-[20px] font-medium leading-[24px] hover:text-[#4393D8] block mb-7">Contribution</Link>
            <Link to="#" className="text-[20px] font-medium leading-[24px] hover:text-[#4393D8] block">Blog</Link>
          </div>
          <div>
            <div className="text-[20px] font-medium leading-[24px] block mb-7">Contact</div>
            <Link to="tel:+2348101128072" className="text-[16px] opacity-75 font-medium leading-[24px] mb-5 block">+234 810 112 8072</Link>
            <Link to="mailto:info@progfams.com" className="text-[16px] font-medium leading-[24px] mb-5 block">Info@Progfams.com</Link>
            <div className="text-[16px] font-medium leading-[24px] opacity-75 mb-5">10B, Harmony Close, Ikeja, Lagos.</div>


          </div>
        </div>
      </div>
    </>
  );
}

export default Footer;
