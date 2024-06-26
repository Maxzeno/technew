import personImage from "../assets/person-hero.png";
import "./../custom.css";
import Navbar from "./Navbar";

function Hero() {
  return ( 
    <>
      <div className="hero-bg px-[96px]">
        <div className="absolute inset-0 bg-[#072951] opacity-50 h-[560px]"></div>
        <div className="relative z-10 text-white">
          <Navbar />
          <div className="grid grid-cols-2 h-[432px]">
            <div className="mt-auto">
              <div className="leading-[58.51px] font-medium text-[48px] font-montserrat">Get the best knowledge from our Versatile Tutors</div>
              <button className="bg-white hover:bg-gray-100 text-black py-[20px] px-[30px] mt-[30px] mb-[100px] rounded-[12px] font-semibold text-[28px]">Start learning!</button>
            </div>
            <div className="mt-auto">
              <img className="w-[30vw] ml-auto block" src={personImage} alt="hero-image" />
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
}

export default Hero;
