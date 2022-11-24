import {
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  ListItem,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";

const GET_ALL = gql`
  query {
    service02s {
      id
      service
    }
  }
`;

const Service02 = () => {
  const { data } = useQuery(GET_ALL);
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign="left" fontWeight={"bold"}>
            PAID ADVERTISING MANAGEMENT
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel>
        <UnorderedList my={4}>
          {data?.service02s.map((item, index) => (
            <ListItem key={index}>{item.service}</ListItem>
          ))}
        </UnorderedList>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default Service02;
