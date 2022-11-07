import { Button } from "@chakra-ui/react";
import React from "react";

import text from "../assets/texte.svg";

const Images = () => {
  return (
    <div className="padding-container py-20 bg-[#011238]">

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
