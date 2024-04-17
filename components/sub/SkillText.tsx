"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "../../utils/motion";
import { GlobeAmericasIcon } from "@heroicons/react/24/solid";

const SkillText = () => {
  return (
    <div className="w-full mt-20 text-wrap h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[10px] my-2 px-[7px] border border-[#ffffff8b] opacity-[0.9]"
      >
        <GlobeAmericasIcon className="text-[#ffffff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">
          The next generation of transition energy{" "}
        </h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[40px] md:text-[100px] font-medium leading-[2.5rem] md:leading-[5rem] max-w-5xl text-center mb-[15px] mt-[15px] bg-gradient-to-r from-[#353535] via-[#fff] to-[#353535] inline-block text-transparent bg-clip-text"
      >
        $VOLTA Coin
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className=" text-[20px] max-w-4xl  text-center bg-gradient-to-r from-[#ffffff] via-[#535353] to-[#fff] inline-block text-transparent bg-clip-text"
      >
        We use top-notch transition-solution energy products for AI, crypto
        mining, industrial, and real estate energy infrastructures. Our $VOLTAI
        coin is pegged to Real World Assets (RWA).
      </motion.div>
    </div>
  );
};

export default SkillText;
