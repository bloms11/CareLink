import React from "react";
import ShopifyImage from "../assets/shopify.png";
import Stars from "../assets/Stars.png";
import Avatar from "../assets/Avatar.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import Collage from "../assets/collage.png";
const Shopify = () => {
  return (
    <div className="w-full mt-[5%] flex flex-col-reverse md:flex-row bg-[#F9FAFB] py-10  justify-center">
      <div className="lex flex-col-reverse md:flex-row w-full md:w-[87%] items-center justify-between">
        <div className="flex w-full md:w-[45%] flex-col space-y-6">
          <img src={ShopifyImage} width={100} />
          <img src={Stars} width={100} />
          <h2>
            ClearLink has upgraded our remote meetings. High-quality video,
            screen sharing, and top-notch security make it essential for our
            team.
          </h2>
          <div className="flex justify-between w-full">
            <div className="flex gap-x-4">
              <img src={Avatar} />
              <div className="flex flex-col">
                <h4 className="text-[#101828]">Sarah Thompson</h4>
                <p>Project Manager, Shopify</p>
              </div>
            </div>
            <div className="flex gap-x-3">
              <div className="flex rounded-full justify-between items-center h-max p-4 border-[1px] bg-white">
                <FaArrowLeft color="#175CD3" />
              </div>
              <div className="flex rounded-full justify-between items-center h-max p-4 border-[1px] bg-white">
                <FaArrowRight color="#175CD3" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full md:w-[45%]">
          <img src={Collage} />
        </div>
      </div>
    </div>
  );
};

export default Shopify;
