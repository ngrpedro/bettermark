import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Flex,
  HStack,
  ListItem,
  Stack,
  Tag,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { FileDoc, Info, ProjectorScreenChart, Textbox } from "phosphor-react";
import AllServices from "./AllServices";

const AdvertisingManag = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="space-y-8">
        <h1 className="text-2xl font-bold">Services</h1>
        <AllServices />
        {/* 
        <div>
          <div className="mb-5">
            <h1 className="text-xl font-bold">
              Social Media plans are also available.
            </h1>
            <span className="text-[14px]">
              Depending on the needs of the business and target audience.
            </span>
          </div>
          <Flex flexWrap={"wrap"} gap={2}>
            <Tag size={"lg"} fontSize={"sm"} fontWeight={"bold"} bg="#e8d7ff">
              Instagram Ads
            </Tag>

            <Tag size={"lg"} fontSize={"sm"} fontWeight={"bold"} bg="#d8f9cc">
              Twitter Ads
            </Tag>

            <Tag size={"lg"} fontSize={"sm"} fontWeight={"bold"} bg="#fff6d7">
              Facebook Ads
            </Tag>

            <Tag size={"lg"} fontSize={"sm"} fontWeight={"bold"} bg="#E3E9FF">
              Tik Tok Ads
            </Tag>

            <Tag size={"lg"} fontSize={"sm"} fontWeight={"bold"} bg="#FFE3F9">
              LinkedIn Ads
            </Tag>
          </Flex>
        </div> */}
      </div>
    </div>
  );
};

export default AdvertisingManag;
