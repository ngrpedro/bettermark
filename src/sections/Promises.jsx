import { Button } from "@chakra-ui/react";
import React from "react";

const Promises = () => {
  return (
    <div className="padding-container py-20 text-center space-y-10 border-t border-gray-800">
      <div className="grid grid-cols-1 md:grid-cols-2 text-center gap-20">
        <div className="space-y-2">
          <h1 className="text-lg md:text-xl ">
            Getting things done does’t move the needle in your business.
          </h1>
          <div className="space-y-5 md:col-span-2">
            <p className="text-lg decoration-3 md:text-2xl underline underline-offset-4 text-[#AB72D8]">
              Getting things done that matter, does.
            </p>

            <p className="text-2xl md:text-4xl py-5">
              <span className="text-[#AB72D8]">ACTION {" "}</span>
              is what moves your brand to the next
              level. Take de first step and schedule your call
              <span className="text-[#AB72D8]"> {" "}TODAY</span>
              .
            </p>

            <Button
              bg={"#FF6E4F"}
              _hover={{ opacity: 0.8 }}
              _active={{ opacity: 0.8 }}
              rounded={"full"}
              m="auto"
              py="12px"
              px="40px"
              fontWeight={"bold"}
              fontSize="16px"
              lineHeight={"19pxp"}
            >
              Schedule a call
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div className="flex flex-col gap-4 items-start justify-start bg-[#ED64A6] p-4 rounded-lg h-32">
            <p className="text-start">
              We want to build a relationship of years with you. So we are
              driven by your results.
            </p>
          </div>
          <div className="flex flex-col gap-4 items-start justify-start  bg-[#667EEA] p-4 rounded-lg  h-32">
            <p className="text-start">
              We want to communicate the best. Our data will inform you, not
              confuse you.
            </p>
          </div>
          <div className="flex flex-col gap-4 items-start justify-start  bg-[#9F7AEA] p-4 rounded-lg  h-32">
            <p className="text-start">
              There is no lock-in contract. We want you stay for the results.
            </p>
          </div>
          <div className="flex flex-col gap-4 items-start justify-start  bg-[#3ABAB4] p-4 rounded-lg  h-32">
            <p className="text-start">
              And we are committed to make it work. If you are not happy, we
              don’t get paid.
            </p>
          </div>
          <div className="sm:col-span-2 mt-8 block">

          </div>
        </div>
      </div>
    </div>
  );
};

export default Promises;
