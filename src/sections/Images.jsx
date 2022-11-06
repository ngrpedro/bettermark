import { Button } from "@chakra-ui/react";
import React from "react";

import text from "../assets/texte.svg";

const Images = () => {
  return (
    <div className="padding-container py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 reverse gap-5 items-center justify-center border-b border-gray-700 pb-20">
        <div className="space-y-5 max-w-[33rem] m-auto ">
          <p className="text-lg font-quatt font-bold">
            The competition is high
          </p>
          <h1 className="text-3xl font-bold font-quatt">
            "Things change all the time, and the agencies don’t{" "}
            <span className="bg-[#a283f4]">really speak your language</span>"
          </h1>

          <div className="flex gap-3 pt-8">
            <div className="w-10 h-10 rounded-full bg-gray-300"></div>
            <div>
              <p className="font-bold text-sm">Zeke Landon</p>
              <p className="text-xs">CEO Better Marketing</p>
            </div>
          </div>
        </div>

        <div className="space-y-3 max-w-[33rem] m-auto text-justify">
          <p>
            The competition is high things change all the time, and the agencies
            don’t really speak your language:{" "}
            <span className="text-[#a283f4]">
              you don’t want to spend hours {""}
            </span>
            trying to making sense of data and analytics.
          </p>

          <p>
            Not only that- how in the world are you supposed to keep it up with
            every new trend, Google Ads feature or new platforms coming up?
          </p>

          <p>
            <span className="text-[#a283f4]">We get it</span>, it’s
            overwhelming. And the truth is, you shouldnt have to worry about it.
            You didn’t go to school to become a professional marketer.{" "}
            <span className="text-[#a283f4]">We did</span>.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center pt-16">
        <div className="space-y-7 text-justify max-w-[33rem] m-auto ">
          <h1 className="text-4xl font-bold font-quatt">That is why...</h1>
          <p>
            We want to eliminate digital marketing completely from your to do
            list and develop a marketing strategy that will increase your
            profits and help you achieve your goals.
          </p>
          <p>
            That way, you can continue working on what you’re good at: growing
            your business.
          </p>
          <Button
            bg={"#FF6E4F"}
            _hover={{ opacity: 0.8 }}
            _active={{ opacity: 0.8 }}
            rounded={"full"}
            py="12px"
            px="40px"
            fontWeight={"bold"}
            fontSize="16px"
            lineHeight={"19pxp"}
          >
            Schedule a call
          </Button>
        </div>
        <div className="max-w-[20rem] m-auto">
          <img src={text} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Images;

/* 
AB72D8
<img src={img1} alt="" className="block md:hidden" />
<div className="max-w-md m-auto">
  <img src={img1} alt="" className="hidden md:block" />
</div>

 */
