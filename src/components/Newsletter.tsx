import "./../custom.css";

function Newsletter() {
  return ( 
    <>
      <div className="bg-white flex flex-col justify-center items-center px-10 py-5">
        <div className="font-bold text-[36px] leading-[43.88px] pt-5">Email capture form for updates and promotions</div>
        <div className="font-normal text-[24px] leading-[29.26px] pt-5">Subscribe to our newsletters and stay up to date on features and releases.</div>
        <div className="relative my-10">
          <input type="text" placeholder="Enter your work email" className="inline-block h-[55px] border border-black border-opacity-75 rounded-full outline-none w-[590px] px-7 focus:border-opacity-100" />
          <button className="bg-[#031428] hover:bg-opacity-90 text-white py-[10px] px-[15px] rounded-full font-semibold text-[18px] absolute right-[4px] top-[4px]">Subscribe</button>
        </div>
      </div>
    </>
  );
}

export default Newsletter;
