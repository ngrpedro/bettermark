import { ArrowRightIcon } from "@chakra-ui/icons";
import { IconButton } from '@chakra-ui/react';
import { FacebookLogo, InstagramLogo, TwitterLogo } from 'phosphor-react';
import React from "react";

const Footer = () => {
  return (
    <div className="padding-container py-20 bg-[#56128C] grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className=" flex items-start justify-start gap-5">
        <div>
          <h1 className="text-xl my-2 font-bold">Quick Links</h1>
          <ul>
            <li className="flex items-center gap-2">
              <ArrowRightIcon size={8} />
              Link
            </li>
            <li className="flex items-center gap-2">
              <ArrowRightIcon size={8} />
              Link
            </li>
            <li className="flex items-center gap-2">
              <ArrowRightIcon size={8} />
              Link
            </li>
          </ul>
        </div>
        <div>
          <h1 className="text-xl my-2 font-bold">Contact Indo</h1>
          <ul>
            <li className="flex items-center gap-2">
              <ArrowRightIcon size={8} />
              Menu
            </li>
            <li className="flex items-center gap-2">
              <ArrowRightIcon size={8} />
              Menu
            </li>
            <li className="flex items-center gap-2">
              <ArrowRightIcon size={8} />
              Menu
            </li>
          </ul>
        </div>
      </div>
      <div className=" flex items-start justify-start gap-5">
        <IconButton
          aria-label="Search database"
          rounded={"full"}
          fontWeight={"bold"}
          fontSize="16px"
          lineHeight={"19pxp"}
          bg={"#AB72D8"}
          _hover={{ opacity: 0.8 }}
          icon={<FacebookLogo size={28} />}
        />
        <IconButton
          aria-label="Search database"
          rounded={"full"}
          fontWeight={"bold"}
          fontSize="16px"
          lineHeight={"19pxp"}
          bg={"#AB72D8"}
          _hover={{ opacity: 0.8 }}
          icon={<InstagramLogo size={28} />}
        />
        <IconButton
          aria-label="Search database"
          rounded={"full"}
          fontWeight={"bold"}
          fontSize="16px"
          lineHeight={"19pxp"}
          bg={"#AB72D8"}
          _hover={{ opacity: 0.8 }}
          icon={<TwitterLogo size={28} />}
        />
      </div>
    </div>
  );
};

export default Footer;
