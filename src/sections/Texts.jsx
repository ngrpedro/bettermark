import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_ALL = gql`
  query {
    session04S {
      title
    }
  }
`;

const Texts = () => {
  const { data } = useQuery(GET_ALL);

  return (
    <div className="padding-container flex items-end justify-center py-20 text-center bg-[#eaeaea] text-gray-900">
      <div className="flex items-start justify-start">
        <h1 className="text-xl md:text-4xl font-quatt">
          {data?.session04S[0].title}
        </h1>
      </div>
    </div>
  );
};

export default Texts;
