import React from "react";

import { Button } from "@chakra-ui/react";
import PenaWhite from "../assets/PenaWhite.jsx";
import { gql, useQuery } from "@apollo/client";

const GET_ALL = gql`
  query {
    session02S {
      id
      title
      subtitle
    }
  }
`;

const Conversation = () => {
  const { data } = useQuery(GET_ALL);

  console.log(data?.session02S);

  /*   const item0 = data?.session02S[0];
  const item1 = data?.session02S[1];
  const item2 = data?.session02S[2]; */

  /*   console.log(item0.title);
  console.log(item1.title);
  console.log(item2.title);
  console.log(item0.subtitle);
  console.log(item1.subtitle);
  console.log(item2.subtitle);
 */
  return (
    <div className="bg-[#eaeaea]">
      <div className="padding-container relative py-10 gap-10 text-black">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-20">
          <div className="space-y-16">
            <div className="space-y-8">
              <h1 className="block text-3xl md:text-3xl font-quatt">
                {data?.session02S[3].title}
              </h1>
              <div className="p-5  border-l border-purple-200 space-y-8">
                <div className="flex gap-4 -ml-[37px]">
                  <div className="">
                    <PenaWhite />
                  </div>
                  <div className=" pl-5 space-y-2">
                    <h1 className="font-bold text-xl">
                      {data?.session02S[0].title}
                    </h1>
                    <p className="text-lg">{data?.session02S[0].subtitle}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="space-y-10 m-auto text-justify text-black p-5 border-l border-purple-200">
              <div className="flex gap-4 -ml-[37px]">
                <div className="">
                  <PenaWhite />
                </div>
                <div className=" pl-5 space-y-2">
                  <h1 className="font-bold text-xl">
                    {data?.session02S[1].title}
                  </h1>
                  <p className="text-lg"> {data?.session02S[1].subtitle}</p>
                </div>
              </div>

              <div className="flex gap-4 -ml-[37px]">
                <div className="">
                  <PenaWhite />
                </div>
                <div className=" pl-5 space-y-2">
                  <h1 className="font-bold text-xl">
                    {data?.session02S[2].title}
                  </h1>
                  <p className="text-lg"> {data?.session02S[2].subtitle}</p>
                </div>
              </div>
            </div>
            <div className="w-full flex mt-10">
              <Button
                as={"a"}
                href="https://calendly.com/bettermarketingau/30min?month=2022-11"
                target={"_black"}
                bg={"#FF6E4F"}
                _hover={{ opacity: 0.8 }}
                _active={{ opacity: 0.8 }}
                rounded={"full"}
                py="18px"
                px="42px"
                m={"auto"}
                fontWeight={"bold"}
                fontSize="16px"
                lineHeight={"19px"}
                textTransform={"uppercase"}
                color={"white"}
              >
                Schedule a call
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Conversation;
