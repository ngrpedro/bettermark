import { Button } from "@chakra-ui/react";
import React from "react";

const Header = () => {
  return (
    <div className="padding-container md:py-20 flex flex-col text-center items-center justify-center gap-8">
      <h1 className="font-bold text-6xl font-quatt">
        Do you want to grow your business while stop wasting money with
        marketing that doesnt work?
      </h1>
      <p className="font-normal text-base leading-[19px] max-w-[38rem]">
        We believe that there are only three ways to grow your business and we
        are here to do whatever it takes to help you nail each one of them.
      </p>
      <Button
        bg={"#FF6E4F"}
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
