import { Link, useLocation } from "react-router-dom";

function Navbar() {
  let location = useLocation();

  return (
    <div className="flex justify-between items-center py-[42px] text-white">
        <div className="font-extrabold text-[28px] leading-[42px] flex-1 font-poppins">TECHNEW</div>
        <div className="font-medium text-[20px] leading-[24px] flex-1 flex justify-center font-montserrat">
        <Link to="/" className={`mr-[50px] ${location.pathname === "/" ? "text-[#4393D8]" : "hover:text-[#4393D8]" }`}>Home</Link>
        <Link to="/todo" className={location.pathname === "/todo" ? "text-[#4393D8]" : "hover:text-[#4393D8]"}>Bootcamp</Link>
        </div>
       <div className="flex-1"></div>
    </div>
  );
}

export default Navbar;
