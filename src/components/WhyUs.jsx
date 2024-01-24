import React from "react";
import { IoVideocamOutline } from "react-icons/io5";
import { RiVoiceprintLine } from "react-icons/ri";
import { GoCalendar } from "react-icons/go";
import { LiaUnlockAltSolid } from "react-icons/lia";
import Arrow from "../assets/arrow.png";
import Grid from "../assets/grid.png";

const WhyUs = () => {
  return (
    <div className="w-[87%] mt-[5%] mx-auto  justify-between flex flex-col-reverse md:flex-row">
      <div className="flex flex-col w-[100%] md:w-[50%]">
        <p className="text-[#175CD3] text-[13px]">The ClearLink Advantage</p>
        <h2>Why choose ClearLink?</h2>
        <p>
          In a world where connection is everything, ClearLink takes the lead.
          Our cutting-edge video conferencing app offers:
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 gap-x-10">
          <div className="flex space-y-2 mb-10  flex-col">
            <div className="flex w-max justify-center p-4 bg-[#F9FAFB] items-center rounded-full">
              <IoVideocamOutline size={20} color="#175CD3" />
            </div>
            <h4>Crystal-clear HD video</h4>
            <p>
              No more pixelation or blurriness – just stunning, lifelike clarity
              that brings your team closer in meetings.
            </p>
          </div>
          <div className="flex space-y-2 mb-10 flex-col">
            <div className="flex w-max justify-center p-4 bg-[#F9FAFB] items-center rounded-full">
              <RiVoiceprintLine size={20} color="#175CD3" />
            </div>
            <h4>Noise-canceling audio</h4>
            <p>
              Say goodbye to distractions with our advanced audio tech for
              crisp, interruption-free conversations.{" "}
            </p>
          </div>
          <div className="flex space-y-2 mb-10 flex-col">
            <div className="flex w-max justify-center p-4 bg-[#F9FAFB] items-center rounded-full">
              <GoCalendar size={20} color="#175CD3" />
            </div>
            <h4>Scheduling made easy</h4>
            <p>
              Streamline your agenda with ClearLink's intuitive scheduling. Set
              up meetings, send invitations, and receive reminders in one place.{" "}
            </p>
          </div>
          <div className="flex space-y-2 mb-10 flex-col">
            <div className="flex w-max justify-center p-4 bg-[#F9FAFB] items-center rounded-full">
              <LiaUnlockAltSolid size={20} color="#175CD3" />
            </div>
            <h4>Bank-grade security</h4>
            <p>
              Your privacy is our priority with bank-grade security protocols
              safeguarding your meetings and data from unwanted intruders.{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="flex w-full md:w-[40%] flex-col items-center">
        <img className="mr-28" src={Arrow} width={180} />
        <img className="-z-10 mt-[-4%]" src={Grid} />
      </div>
    </div>
  );
};

export default WhyUs;
