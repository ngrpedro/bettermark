import { Button } from "@chakra-ui/react";
import React from "react";
import mainimage from "../assets/mainimage.svg";
import { gql, useQuery } from "@apollo/client";

const GET_ALL = gql`
  query {
    session03S {
      title
      subtitle
    }
  }
`;

const Images = () => {
  const { data } = useQuery(GET_ALL);
  console.log(data);
  return (
    <div className="padding-container py-20 bg-[#011238]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-0 items-center justify-center">
        <div className="space-y-7 text-justify max-w-[33rem] m-auto md:m-0 ">
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
            as={"a"}
            href="https://calendly.com/bettermarketingau/30min?month=2022-11"
            target={"_black"}
            bg={"#FF6E4F"}
            _hover={{ opacity: 0.8 }}
            _active={{ opacity: 0.8 }}
            rounded={"full"}
            py="12px"
            px="40px"
            fontWeight={"bold"}
            textTransform={"uppercase"}
            fontSize="16px"
            lineHeight={"19pxp"}
          >
            Schedule a call
          </Button>
        </div>
        <div className="">
          <img
            src={mainimage}
            alt=""
            className="max-w-[310px] md:max-w-[23rem] lg:max-w-[28rem] m-auto"
          />
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
