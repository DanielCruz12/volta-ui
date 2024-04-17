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
    <div className="w-full text-wrap h-auto flex flex-col items-center justify-center">
      <motion.div
        variants={slideInFromTop}
        className="Welcome-box py-[10px] my-2 px-[7px] border border-[#ffffff8b] opacity-[0.9]"
      >
        <GlobeAmericasIcon className="text-[#ffffff] mr-[10px] h-5 w-5" />
        <h1 className="Welcome-text text-[13px]">
          Think better with Next js 13
        </h1>
      </motion.div>
      <motion.div
        variants={slideInFromLeft(0.5)}
        className="text-[40px] md:text-[80px] text-white font-medium leading-[2.5rem] md:leading-[5rem] max-w-5xl text-center mb-[15px]"
      >
        Unified DevOps platform to build AI platforms
      </motion.div>
      <motion.div
        variants={slideInFromRight(0.5)}
        className=" text-[20px] text-gray-600 max-w-4xl  text-center"
      >
        Every feature you need to build, deploy, and scale your application.
        Keyword Ai is a new tool to build AI systems in 2024.
      </motion.div>
    </div>
  );
};

export default SkillText;
