import React from "react";
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
import Service01 from "./services/Service01.jsx";
import Service02 from "./services/Service02.jsx";
import Service03 from "./services/Service03.jsx";
import Service04 from "./services/Service04.jsx";
import Service05 from "./services/Service05.jsx";
import Service07 from "./services/Service07";

const AllServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <Accordion defaultIndex={[0]} allowMultiple>
        <Service01 />

        <Service02 />

        <Service03 />

        <Service04 />

        <Service05 />

        <AccordionItem>
          <h2>
            <AccordionButton>
              <Box flex="1" textAlign="left" fontWeight={"bold"}>
                Social Media plans
              </Box>
              <AccordionIcon />
            </AccordionButton>
          </h2>
          <AccordionPanel>
            <UnorderedList my={4}>
              <ListItem>Instagram Ads</ListItem>
              <ListItem>Twitter Ads</ListItem>
              <ListItem>Facebook Ads</ListItem>
              <ListItem>LinkedIn Ads</ListItem>
            </UnorderedList>
          </AccordionPanel>
        </AccordionItem>

        <Service07 />
      </Accordion>
    </div>
  );
};

export default AllServices;
