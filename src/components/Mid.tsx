import { ArrowRight } from "react-bootstrap-icons";
import midImage from "../assets/mid.png";

function Mid() {
  return (
    <div className="gradient-border mx-[86px] my-[100px]">
    <div className="flex justify-between gap-16 text-black">
      <img className="max-w-[582px] block" src={midImage} alt="mid-section-image" />
      <div className="pr-14">
        <div className="text-[36px] font-bold leading-[43.88px] pt-10 pb-5">Fast track your Tech Career </div>
        <div className="text-[24px] font-light leading-[29.26px] pb-10">Get the right teams with zero worries for your project every now and then. Get the right teams with zero worries for your project every now and then. </div>
        <div className="flex gap-7 flex-wrap text-white">
            <button className="bg-[#072951] hover:bg-opacity-90 py-[20px] px-[30px] rounded-[12px] font-semibold text-[18px]">#30,000.00</button>
            <button className="bg-[#4393D8] hover:bg-opacity-90 py-[20px] px-[30px] rounded-[12px] font-semibold text-[18px]">3 months</button>
            <button className="bg-[#000000] hover:bg-opacity-90 py-[20px] px-[30px] rounded-[12px] font-semibold text-[18px]">Mon-Fri (4pm -6pm)</button>
            <button className="bg-[#8D8D8D] hover:bg-opacity-90 py-[20px] px-[30px] rounded-[12px] font-semibold text-[18px]">GoogleMeet</button>
        </div>
        <div className="py-10 flex items-center cursor-pointer">
          <ArrowRight className="inline mr-5 bg-[#072951] hover:bg-opacity-90 text-white w-[60px] h-[60px] p-4 rounded-full text-[1.3em] leading-[0]"/>
          <span className="font-semibold text-[28px]">More details</span>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Mid;
