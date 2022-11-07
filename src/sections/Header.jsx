import { Button } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <div className="padding-container pb-20 pt-6 md:pt-20 md:pb-10 flex flex-col text-center items-center justify-center gap-8">
      <div className="grid grid-cols-1 md:grid-cols-2">
      <h1 className="font-bold text-4xl md:text-5xl text-left font-quatt">
        Do you want to <span className="text-[#AB72D8]"> grow your business </span> while stop wasting
        money <span className="text-[#AB72D8]"> with marketing </span> that doesnt work?
      </h1>
      </div>
      <p className="font-normal text-base leading-[19px] max-w-[38rem] mt-10">
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
