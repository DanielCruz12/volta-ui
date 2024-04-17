import React from "react";
import HeroContent from "../sub/HeroContent";

const Hero = () => {
  return (
    <div className="relative flex flex-col  h-full w-full">
      {/* <div className="relative flex flex-col  h-full w-full" id="about-me">
      <video
        autoPlay
        muted
        loop
        className=" absolute  h-full w-full left-0 z-[1] object-cover "
      >
        <source src="/" type="video/webm" />
      </video>   </div>*/}

      <HeroContent />
    </div>
  );
};

export default Hero;
