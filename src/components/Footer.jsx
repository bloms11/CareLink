import React from "react";
import App from "../assets/app.png";
import Play from "../assets/play.png";
import Logo from "../assets/logo.png";
import {
  FaLinkedin,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";
const Footer = () => {
  return (
    <>
      <div className="flex w-[87%] mt-[5%] mx-auto">
        <div className="grid grid-cols-1 smd:grid-cols-2 mxl:grid-cols-4 space-y-8 xxl:grid-cols-6 gap-x-4">
          <div className="flex space-y-6 flex-col">
            <img className="w-[100px] md:w-auto" src={Logo} />
            <p>
              ClearLink is your gateway to effortless, high-quality video
              conferencing. Join us in shaping the future of communication!
            </p>
          </div>
          <div className="flex pl-28 flex-col space-y-4">
            <p className="text-[14px]">Product</p>
            <p>Overview</p>
            <p>Features</p>
            <p>Solutions</p>
            <p>Tutorials</p>
            <p>Pricing</p>
          </div>
          <div className="flex pl-28 flex-col space-y-4">
            <p className="text-[14px]">Company</p>
            <p>ABout us</p>
            <p>Careers</p>
            <p>Press</p>
            <p>News</p>
            <p>Contact</p>
          </div>
          <div className="flex flex-col space-y-4 pl-28">
            <p className="text-[14px]">Resources</p>
            <p>Blog</p>
            <p>Events</p>
            <p>Help Center</p>
            <p>Tutorials</p>
            <p>Support</p>
          </div>
          <div className="flex flex-col space-y-4 pl-28">
            <p className="text-[14px]">Legal</p>
            <p>Terms</p>
            <p>Privacy</p>
            <p>Cookies</p>
            <p>Licenses</p>
            <p>Contact</p>
          </div>
          <div className="flex flex-col pl-28 space-y-4">
            <p className="text-[#004EEB]">Get the app</p>
            <img src={App} width={100} />
            <img src={Play} width={100} />
          </div>
        </div>
      </div>
      <div className="flex py-8 mt-2 w-full bg-[#F9FAFB]">
        <div className="flex justify-between mx-auto w-[87%]">
          <p>© 2023 ClearLink. All rights reserved.</p>
          <div className="flex gap-x-4">
            <FaLinkedin color="#98A2B3" size={20} />
            <FaTwitter color="#98A2B3" size={20} />
            <FaFacebook color="#98A2B3" size={20} />
            <FaInstagram color="#98A2B3" size={20} />
            <FaGithub color="#98A2B3" size={20} />
            <FaYoutube color="#98A2B3" size={20} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
