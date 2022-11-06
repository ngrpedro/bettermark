import { ArrowDownIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import React from "react";

const Texts = () => {
  return (
    <div className="padding-container py-20 text-center">
      <h1 className="text-xl md:text-4xl font-quatt">
        We offer more than marketing services. We are here to help you with your
        entire sales process. That way we can control the outcome and guarantee
        results.
      </h1>
      <div className="my-12 md:mx-48 flex items-center justify-center gap-8">
        <div className="border-t border-gray-600 w-full "></div>
        <p className="text-4xl md:text-6xl text-gray-400">&&</p>
        <div className="border-t border-gray-600 w-full "></div>
      </div>
      <h1 className="text-xl md:text-4xl font-quatt">
        We understand you need an agency you can trust, that will create more
        value to your business than you pay them for. And if you don’t get
        results, we don’t get paid. What about that?
      </h1>

      <IconButton
        className="animate-bounce"
        aria-label="Search database"
        rounded={"full"}
        py="16px"
        mt="14"
        fontWeight={"bold"}
        fontSize="16px"
        lineHeight={"19pxp"}
        bg={"#AB72D8"}
        _hover={{ opacity: 0.8 }}
        icon={<ArrowDownIcon />}
      />
    </div>
  );
};

export default Texts;
