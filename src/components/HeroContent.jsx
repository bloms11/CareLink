import React from "react";
import { RiRobot2Line } from "react-icons/ri";
import Reviews from "../assets/reviews.png";
import Vid from "../assets/vid.png";
const HeroContent = () => {
  return (
    <div className="w-[85%] mt-[4%] mx-auto flex flex-col-reverse md:flex-row justify-between">
      <div className="flex flex-col md:h-auto pl-8 pt-10 space-y-6 w-[100%] md:w-[45%]">
        <h1>Uniting the world, one video call at a time</h1>
        <p className="w-[70%]">
          Experience the future of communication with ClearLink – where
          crystal-clear video conferencing meets unparalleled simplicity.
        </p>
        <div className="flex items-center gap-x-4">
          <button className="bg-[#175CD3] text-[white] font-[600] py-3 px-6 rounded-[24px]">
            Start yout free trial
          </button>
          <RiRobot2Line size={22} color="#175cd3" />
          <p className="text-[#175CD3]">Discover AI assistant</p>
        </div>
        <img
          onContextMenu={(e) => e.preventDefault()}
          src={Reviews}
          width={250}
        />
      </div>
      <div className="flex w-[100%] md:w-[45%]">
        <img onContextMenu={(e) => e.preventDefault()} src={Vid} />
      </div>
    </div>
  );
};

export default HeroContent;
