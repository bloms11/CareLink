import { useState } from "react";
import "./App.css";
// import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import WhyUs from "./components/WhyUs";
import Shopify from "./components/Shopify";
import FAQs from "./components/FAQs";
import PerfectCommunication from "./components/PerfectCommunication";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="w-full ">
      <Hero />
      <Partners />
      <WhyUs />
      <Shopify />
      <FAQs />
      <PerfectCommunication />
      <Footer />
    </div>
  );
}

export default App;
