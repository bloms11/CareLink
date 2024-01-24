import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { RiMenu3Fill } from "react-icons/ri";
import { FaAngleDown } from "react-icons/fa";
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="py-3 mt-[2%] w-[87%] mx-auto rounded-full md:py-4 px-8 border-[#D0D5DD] border-2 flex justify-between items-center bg-[#F2F4F7]">
        <img className="w-[100px] md:w-auto" src={Logo} />
        <div className="hidden md:flex items-center gap-x-[40px]">
          <p className="cursor-pointer flex items-center gap-x-2 text-[#667085] text-[17px] font-[600]">
            Product
            <FaAngleDown />
          </p>
          <p className="cursor-pointer flex items-center gap-x-2 text-[#667085] text-[17px] font-[600]">
            Solutions
            <FaAngleDown />
          </p>
          <p className="cursor-pointer flex items-center gap-x-2 text-[#667085] text-[17px] font-[600]">
            Resources
            <FaAngleDown />
          </p>
          <p className="cursor-pointer flex items-center gap-x-2 text-[#667085] text-[17px] font-[600]">
            Pricing
          </p>
        </div>
        <div className="hidden md:flex gap-x-4">
          <button className="border-[#98A2B3] text-[#0A2640] font-[600] border-2 p-2 py-3 px-6 rounded-[24px]">
            Talk to sales
          </button>
          <button className="bg-[#175CD3] text-[white] font-[600] py-3 px-6 rounded-[24px]">
            Sign up for free
          </button>
        </div>
        <RiMenu3Fill
          onClick={() => setOpen(!open)}
          className="flex md:hidden"
          color="#0A2640"
        />
      </div>

      {open && (
        <div className="flex border-2 p-2 flex-col space-y-4">
          <p className="cursor-pointer text-[#0A2640] text-[17px] font-[600]">
            Product
          </p>
          <p className="cursor-pointer text-[#0A2640] text-[17px] font-[600]">
            Services
          </p>
          <p className="cursor-pointer text-[#0A2640] text-[17px] font-[600]">
            About
          </p>
          <button className="border-[#0A2640] text-[#0A2640] font-[600] border-2 p-2 px-10 rounded-[24px]">
            Log In
          </button>
        </div>
      )}
    </>
  );
};
export default Navbar;
