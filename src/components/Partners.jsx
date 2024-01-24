import React from "react";
import Shopify from "../assets/shopify.png";
import Coinbase from "../assets/coinbase.png";
import Dropbox from "../assets/dropbox.png";
import Intercom from "../assets/intercom.png";
import Marvel from "../assets/marvel.png";
import Auto from "../assets/auto.png";
const Partners = () => {
  return (
    <div className="w-[86%] mt-[5%] mx-auto flex flex-col-reverse md:flex-row items-center space-y-8">
      <p>Join 1,500+ companies already video conferencing the ClearLink way</p>
      <div className="flex items-center gap-x-20">
        <img src={Shopify} />
        <img className="h-[35px]" src={Coinbase} width={200} />
        <img src={Dropbox} />
        <img src={Intercom} />
        <img src={Marvel} />
        <img className="h-[20px]" src={Auto} width={200} />
      </div>
    </div>
  );
};

export default Partners;
