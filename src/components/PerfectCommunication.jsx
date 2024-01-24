import React from "react";
import { CiCircleCheck } from "react-icons/ci";
import Screen from "../assets/screen.png";
const PerfectCommunication = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between w-[93.5%] mx-auto md:ml-auto py-10 mt-[5%]">
      <div className="flex flex-col space-y-6 w-full md:w-[45%]">
        <h2>Ready to clear the path to perfect communication?</h2>
        <div className="flex flex-col space-y-1">
          <div className="flex items-center gap-x-2">
            <CiCircleCheck color="#175CD3" />
            <p>30 days free trial</p>
          </div>
          <div className="flex items-center gap-x-2">
            <CiCircleCheck color="#175CD3" />
            <p>Cancel at any time</p>
          </div>
          <div className="flex items-center gap-x-2">
            <CiCircleCheck color="#175CD3" />
            <p>Access to all features</p>
          </div>
          <div className="flex items-center gap-x-2">
            <CiCircleCheck color="#175CD3" />
            <p>Peronalized onboarding</p>
          </div>
        </div>
        <div className="flex gap-x-4">
          <button className="border-[#98A2B3] text-[#0A2640] font-[600] border-2 p-2 py-3 px-6 rounded-[24px]">
            Talk to sales
          </button>
          <button className="bg-[#175CD3] text-[white] font-[600] py-3 px-6 rounded-[24px]">
            Start your free trial
          </button>
        </div>
      </div>
      <div className="flex mt-4 md:mt-0">
        <img src={Screen} />
      </div>
    </div>
  );
};

export default PerfectCommunication;
