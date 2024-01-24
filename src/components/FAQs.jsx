import React, { useState } from "react";
import { FiChevronUp } from "react-icons/fi";
const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const accordionData = [
    {
      title: "How many participants can join a ClearLink video conference?",
      content:
        "ClearLink offers flexible meeting options. Depending on your subscription plan, you can host meetings with varying numbers of participants. Our plans are designed to accommodate small team collaborations and large-scale webinars, ensuring you have the right fit for your needs.",
    },
    {
      title: "Can I use ClearLink on multiple devices?",
      content: "Content for Panel 2 goes here.",
    },
    {
      title: "Is ClearLink compatible with other video conferencing platforms?",
      content: "Content for Panel 3 goes here.",
    },
    {
      title: "How does ClearLink ensure the security of my video conferences?",
      content: "Content for Panel 4 goes here.",
    },
    {
      title: "Do I need to download any software to use ClearLink?",
      content: "Content for Panel 4 goes here.",
    },
    {
      title: "What kind of customer support does ClearLink provide?",
      content: "Content for Panel 4 goes here.",
    },
  ];
  return (
    <div className="w-full md:w-[87%] mt-[5%] mx-auto flex flex-col md:flex-row justify-between">
      <div className="flex flex-col w-full md:w-[45%]">
        <p className="text-[#175CD3] text-[13px]">Support</p>
        <h2>FAQs</h2>
        <p>
          Everything you need to know about the product and billing. Can’t find
          the answer you’re looking for? Please chat to our friendly team.
        </p>
      </div>
      <div className="flex flex-col w-full md:w-[45%]">
        {accordionData.map((item, index) => (
          <div key={index} className="border-b-[1px] my-2">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full py-2 px-4 flex items-center justify-between focus:outline-none"
            >
              <h4 className=" text-[#101828] font-[500] text-[18px]">
                {item.title}
              </h4>
              <span
                className={`transform ${
                  activeIndex === index ? "rotate-0" : "rotate-180"
                } transition-transform`}
              >
                <FiChevronUp />
              </span>
            </button>
            {activeIndex === index && (
              <div className="p-4 border-t">
                <p>{item.content}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQs;
