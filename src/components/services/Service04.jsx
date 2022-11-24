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
import { useQuery, gql } from "@apollo/client";

const GET_ALL = gql`
  query {
    service04s {
      id
      service
    }
  }
`;

const Service04 = () => {
  const { data } = useQuery(GET_ALL);
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex="1" textAlign="left" fontWeight={"bold"}>
            The PPC | Ecommerce
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel>
        <UnorderedList my={4}>
          {data?.service04s.map((item, index) => (
            <ListItem key={index}>{item.service}</ListItem>
          ))}
        </UnorderedList>
      </AccordionPanel>
    </AccordionItem>
  );
};

export default Service04;
