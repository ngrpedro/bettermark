import { Button } from "@chakra-ui/react";
import React from "react";
import MainImage from "../assets/MainImage";

const Header = () => {
  return (
    <div className="padding-container pb-20 pt-10 md:pt-20 md:pb-10 flex flex-col text-center items-center justify-center gap-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-16 items-center justify-center">
        <h1 className="font-bold text-4xl md:text-5xl lg:text-left font-quatt">
          Do you want to <span className="text-[#AB72D8]"> grow your business </span> while stop wasting
          money <span className="text-[#AB72D8]"> with marketing </span> that doesnt work?
        </h1>
        <div className="m-auto ">
          <MainImage className=""/>
        </div>
      </div>
      <p className="font-normal text-lg leading-[19px] max-w-[38rem] mt-8">
        We believe that there are only three ways to grow your business and we
        are here to do whatever it takes to help you nail each one of them.
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
  );
};

export default Header;
