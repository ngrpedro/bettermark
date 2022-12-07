import { Button } from "@chakra-ui/react";
import React from "react";
import mainimage_desk from "../assets/photoShape.png";

const Header = () => {
  return (
    <div className="padding-container pb-20 pt-10 md:pt-16 md:pb-10 flex flex-col text-start items-start justify-center gap-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-0 items-start justify-center">
        <h1 className="md:col-span-2 font-bold text-4xl md:text-5xl lg:text-left font-quatt max-w-[54rem]">
          <span className="text-[#AB72D8] font-quatt">
            Stop procrastinating.{" "}
          </span>
          <br /> You know you should be doing{" "}
          <span className="text-[#AB72D8]"> better </span> with your
          <span className="text-[#AB72D8]"> marketing </span>
          with so much technology and{" "}
          <span className="text-[#AB72D8]"> opportunity </span> out there. And
          that is easier than you think.
        </h1>
        <div
          className="m-auto max-w-[348px] md:max-w-[29rem] 
                lg:absolute top-28  left-[50%] right-0"
        >
          <img src={mainimage_desk} alt="" className="mt-16 lg:mt-0" />
        </div>
      </div>
      <p className="font-normal text-xlg leading-[23px] mt-2 z-[100] max-w-[54rem]">
        You don’t need to double your spends or add any stress to your life. All
        you need is a full-service marketing agency like us to help you grow
        your profits by taking care of the only three things that matter in
        marketing: driving traffic, maximising conversions and increasing how
        much each customer spends in his life time.
      </p>
      <Button
        as={"a"}
        href="https://calendly.com/bettermarketingau/30min?month=2022-11"
        target={"_black"}
        bg={"#FF6E4F"}
        _hover={{ opacity: 0.8 }}
        _active={{ opacity: 0.8 }}
        rounded={"full"}
        py="24px"
        px="40px"
        fontWeight={"bold"}
        fontSize="20px"
        lineHeight={"19pxp"}
        textTransform={"uppercase"}
      >
        Schedule a call
      </Button>
    </div>
  );
};

export default Header;
