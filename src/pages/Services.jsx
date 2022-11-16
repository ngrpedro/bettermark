import { Tab, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import AdvertisingManag from "../components/AdvertisingManag";
import AllServices from "../components/AllServices";
import SEOService from "../components/SEOService";

const Services = () => {
  return (
    <div className="  bg-[#eaeaea] pb-20">
      <div className="bg-[#011238] h-[15rem]">
        <div className="padding-container py-14">
          <h1 className="text-5xl font-quatt  text-white">Services</h1>
        </div>
      </div>
      <div className="mx-6 md:mx-24 bg-white py-8 px-2 md:p-8 rounded-xl -mt-16">
        <AllServices />
      </div>
    </div>
  );
};

export default Services;
