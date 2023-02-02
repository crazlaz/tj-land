import React, { useMemo } from "react";
import Image from "next/image";
import Testimoni from "./Testimoni";
import ButtonPrimary from "./misc/ButtonPrimary";
import ButtonOutline from "./misc/ButtonOutline.";
import Maps from "../public/assets/HugeGlobal.svg";
import { motion } from "framer-motion";
import getScrollAnimation from "../utils/getScrollAnimation";
import ScrollAnimationWrapper from "./Layout/ScrollAnimationWrapper";

const Pricing = () => {
  const scrollAnimation = useMemo(() => getScrollAnimation(), []);

  return (
    <div
      className="bg-gradient-to-b from-black-500 to-black-600 w-full py-14"
      id="pricing"
    >
      <div className="max-w-screen-xl  px-6 sm:px-8 lg:px-16 mx-auto flex flex-col w-full text-center justify-center">
        <div className="flex flex-col w-full">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl font-medium text-red-500 leading-relaxed"
            >
              Check out our plans
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal w-10/12 sm:w-7/12 text-white-500 lg:w-6/12 mx-auto my-2 text-center"
            >
              Its your choice to be a teacher on weekdays and student on weekends
            </motion.p>
          </ScrollAnimationWrapper>
          <div className="grid grid-flow-row sm:grid-flow-col grid-cols-1 sm:grid-cols-3 gap-4  lg:gap-12 py-8 lg:py-12 px-6 sm:px-0 lg:px-6">
            <ScrollAnimationWrapper className="flex justify-center ">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 bg- border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
                <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                  <Image
                    src="/assets/Free.png"
                    width={145}
                    height={165}
                    alt="Student Plan"
                  />
                </div>
                <p className="text-lg text-white-500 font-medium capitalize my-2 sm:my-7">
                  Student's
                </p>
                <ul className="flex flex-col text-white-500 list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                  <li className="relative check custom-list my-2">
                    Unlimited Bandwitch
                  </li>
                  <li className="relative check custom-list my-2">
                    Encrypted Connection
                  </li>
                  <li className="relative check custom-list my-2">
                    No Traffic Logs
                  </li>
                  <li className="relative check custom-list my-2">
                    Works on All Devices
                  </li>
                </ul>
                <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                  <ButtonOutline>Select</ButtonOutline>
                </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <Image
                  src="/assets/Standard.png"
                  width={145}
                  height={165}
                  alt="Teacher Plan"
                />
              </div>
              <p className="text-lg text-white-500 font-medium capitalize my-2 sm:my-7">
                Teacher's{" "}
              </p>
              <ul className="flex flex-col  text-white-500 list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                <li className="relative check custom-list my-2">
                  Unlimited Bandwitch
                </li>
                <li className="relative check custom-list my-2">
                  Encrypted Connection
                </li>
                <li className="relative check custom-list my-2">
                  No Traffic Logs
                </li>
                <li className="relative check custom-list my-2">
                  Works on All Devices
                </li>
                <li className="relative check custom-list my-2">
                  Connect Anyware{" "}
                </li>
              </ul>
              <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                                <ButtonOutline>Select</ButtonOutline>
              </div>
              </motion.div>
            </ScrollAnimationWrapper>
            <ScrollAnimationWrapper className="flex justify-center">
              <motion.div
                variants={scrollAnimation}
                className="flex flex-col justify-center items-center border-2 border-gray-500 rounded-xl py-4 px-6 lg:px-12 xl:px-20"
                whileHover={{
                  scale : 1.1,
                  transition: {
                    duration: .2
                  }
                }}
              >
              <div className="p-4 lg:p-0 mt-6 lg:mt-16">
                <Image
                  src="/assets/Premium.png"
                  width={145}
                  height={165}
                  alt="Both Plan"
                />
              </div>
              <p className="text-lg text-white-500 font-medium capitalize my-2 sm:my-7">
                Both{" "}
              </p>
              <ul className="flex flex-col  text-white-500 list-inside pl-6 xl:pl-0 items-start justify-start text-left text-black-500 flex-grow">
                <li className="relative check custom-list my-2">
                  Unlimited Bandwitch
                </li>
                <li className="relative check custom-list my-2">
                  Encrypted Connection
                </li>
                <li className="relative check custom-list my-2">
                  No Traffic Logs
                </li>
                <li className="relative check custom-list my-2">
                  Works on All Devices
                </li>
                <li className="relative check custom-list my-2">
                  Connect Anyware{" "}
                </li>
                <li className="relative check custom-list my-2">
                  Get New Features{" "}
                </li>
              </ul>
              <div className="flex flex-col w-full justify-center mb-8 flex-none mt-12">
                <ButtonOutline>Select</ButtonOutline>
              </div>
              </motion.div>
            </ScrollAnimationWrapper>
          </div>
        </div>
        <div className="flex flex-col w-full my-16">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl  lg:text-4xl font-medium text-white-500 leading-relaxed w-9/12 sm:w-6/12 lg:w-4/12 mx-auto">
              Huge Global Network of Teacher's{" "}
            </motion.h3>
            <motion.p className="leading-normal text-white-500  mx-auto my-2 w-10/12 sm:w-7/12 lg:w-6/12" variants={scrollAnimation}>
              If it is learning how to code or learning how to sow BrainStorm has you covered with passionate instructors!
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper>
            <motion.div className="py-12 w-full px-8 mt-16" variants={scrollAnimation}> 
              <Maps className="w-full h-auto " />
            </motion.div>
          </ScrollAnimationWrapper>
         
        </div>
        <div className="flex flex-col w-full my-16" id="testimoni">
          <ScrollAnimationWrapper>
            <motion.h3
              variants={scrollAnimation}
              className="text-2xl sm:text-3xl lg:text-4xl text-white-500 font-medium text-black-600 leading-normal w-9/12 sm: lg:w-4/12 mx-auto">
              Trusted by Thousands of Happy Customer{" "}
            </motion.h3>
            <motion.p
              variants={scrollAnimation}
              className="leading-normal mx-auto text-white-500 mb-2 mt-4 w-10/12 sm:w-7/12 lg:w-6/12"
            >
              These are the stories of our customers who have joined us to go on and learn new things and make new connections!
            </motion.p>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="w-full flex flex-col py-12">
            <motion.div variants={scrollAnimation}>
              <Testimoni />
            </motion.div>
          </ScrollAnimationWrapper>
          <ScrollAnimationWrapper className="relative w-full mt-16  ">
            <motion.div variants={scrollAnimation} custom={{duration: 3}}>
              <div className="absolute rounded-xl  py-8 sm:py-14 px-6 sm:px-12 lg:px-16 w-full flex flex-col sm:flex-row justify-between items-center z-10 bg-black-500">
                <div className="flex flex-col text-left w-10/12 sm:w-7/12 lg:w-5/12 mb-6 sm:mb-0">
                  <h5 className="text-white-500 text-xl sm:text-2xl lg:text-3xl leading-relaxed font-medium">
                   <a className="text-red-500">
                    Subscribe Now to
                    </a>
                      <br /> be alerted on updates!
                  </h5>
                  <p>Subscribe now your next class awaits!</p>
                </div>
                <input
               
          placeholder="bobloblaw@gmail.com"
          type="email"
          autoComplete="email"
          required
        />
                <ButtonPrimary>Get Started</ButtonPrimary>
              </div>
              <div
                className="absolute  opacity-5 w-11/12 roudned-lg h-60 sm:h-56 top-0 mt-8 mx-auto left-0 right-0"
                style={{ filter: "blur(114px)" }}
                ></div>
            </motion.div>
          </ScrollAnimationWrapper>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
