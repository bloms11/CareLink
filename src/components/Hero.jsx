import React from "react";
import Navbar from "./Navbar";
import HeroContent from "./HeroContent";
import Background from "../assets/pattern.png";
const Hero = () => {
  return (
    <div className="background">
      <Navbar />
      <HeroContent />
    </div>
  );
};

export default Hero;
