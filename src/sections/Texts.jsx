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
          We offer more than marketing services. We are here to help you with
          your entire sales process. That way we can control the outcome and
          guarantee results.
        </h1>
      </div>
    </div>
  );
};

export default Texts;
