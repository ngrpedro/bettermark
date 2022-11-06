import { Button } from "@chakra-ui/react";
import React from "react";

import arrow from "../assets/arrow-right.png";
import arrow1 from "../assets/arrow-right1.svg";
const Steps = () => {
  return (
    <div className="padding-container m-auto max-w-5xl">
      <ol className="relative ">
        <li className="mb-10 flex gap-5 items-center justify-center">
          <div className=" hidden sm:block">
            <img
              src={arrow}
              alt=""
              className="origin-center rotate-[12deg] max-w-sm"
            />
          </div>
          <div
            className="bg-[#093185] px-6 py-6 rounded-xl text-start 
                space-y-4 hover:shadow-lg transition-all"
          >
            <h1 className="text-xl font-bold">STEP 1</h1>

            <p>
              You schedule a call, we talk about your business and goals and we
              recommend the best plan and prices for you. No commitment.
            </p>
            <Button
              w="full"
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
        </li>
        <li className="mb-10 flex gap-5 items-center justify-center">
          <div
            className="bg-[#093185]  px-6 py-6 rounded-xl text-start
                space-y-4 hover:shadow-lg transition-all"
          >
            <h1 className="text-xl font-bold">STEP 2</h1>

            <p>
              Once you say yes, we send you all the support material and
              training and book the first coaching session. In the mean time we
              already started working on your SEO/PPC campaigns
            </p>
          </div>
          <div className=" hidden sm:block">
            <img src={arrow1} alt="" className=" max-w-sm " />
          </div>
        </li>
        <li className="flex gap-5 items-center justify-center">
          <div className=" hidden sm:block">
            <img src={arrow} alt="" className=" max-w-sm " />
          </div>
          <div
            className="bg-[#093185]  px-6 py-6 rounded-xl text-start
                space-y-4 hover:shadow-lg transition-all"
          >
            <h1 className="text-xl font-bold">STEP 3</h1>

            <p>
              Monthly we analise results and performance, adjust strategies and
              keep educating and coaching you for a life time relationship. And
              you can just enjoy the feeling of watching your business
              skyrocketing.
            </p>
          </div>
        </li>
      </ol>
    </div>
  );
};

export default Steps;
