import { Button } from "@chakra-ui/react";
import React from "react";
import mainimage_desk from "../assets/mainimage_desk.svg";

const Header = () => {
  return (
    <div className="padding-container pb-20 pt-10 md:pt-10 md:pb-10 flex flex-col text-center items-center justify-center gap-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-0 items-center justify-center">
        <h1 className="md:col-span-2 font-bold text-4xl md:text-6xl lg:text-left font-quatt">
          Do you want to <span className="text-[#AB72D8]"> grow your business </span> while {""}
          <span className="text-[#AB72D8]">stop wasting</span> {""}
          money with<span className="text-[#AB72D8]"> marketing </span> that doesnt work?
        </h1>
        <div className="m-auto ">
          <img src={mainimage_desk} alt="" className="max-w-[348px] md:max-w-[29rem] mt-16 lg:mt-0" />
        </div>
      </div>
      <p className="font-normal text-2xl leading-[23px] max-w-[52rem] mt-2">
        We believe that there are only three ways to grow your business and we
        are here to do whatever it takes to help you nail each one of them.
      </p>
      <Button
        as={'a'}
        href="https://calendly.com/bettermarketingau/30min?month=2022-11"
        target={"_black"}
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
  );
};

export default Header;
