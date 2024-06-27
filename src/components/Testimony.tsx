import testimonyImage from "../assets/testimony.jpeg";

function Testimony() {
  return (
    <div className="bg-[#4393D8] bg-opacity-25 py-20 px-20 text-black">
    <div className="font-medium text-[28px] leading-[40px] text-[#8D8D8D]">
      Testimonials
      </div>
      <div className="font-bold text-[48px] leading-[58.51px] mt-5">
      See what others are saying about us
      </div>
      <div className="grid grid-cols-2 gap-10 my-20">
        <div>
          <div className="font-normal text-[28px] leading-[44px]">
            “Explore the course catalog and syllables to identify courses that align with personal learning objectives. Take advantage of interactive tutorials we offer to reinforce your understanding and apply concepts in real world scenarios.”
          </div>
          <div className="font-bold text-[28px] leading-[29.26px] pt-8 pb-2">Faaruq Azeez</div>
          <div className="font-normal text-[28px] leading-[29.26px] pb-2">Founder, Justwear</div>
          <div className="font-normal text-[28px] leading-[29.26px] opacity-50">United Arab Emirate</div>
        </div>
        <div className="ml-auto">
          <div className="relative">
            <div className="bg-[#324151] h-[500px] w-[500px] rounded-3xl"></div>
            <img className="h-[500px] w-[500px] absolute top-[40px] right-[40px] rounded-3xl object-cover" src={testimonyImage} alt="testimony-image" />
          </div>
        </div>

      </div>
    </div>
  );
}

export default Testimony;
