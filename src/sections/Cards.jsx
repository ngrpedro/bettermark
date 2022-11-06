import React from "react";

import handshake from "../assets/handshake1.svg";
import money from "../assets/money.svg";
import tap from "../assets/tap.svg";

const Cards = () => {
  return (
    <div
      className="padding-container grid grid-cols-1 
      md:grid-cols-3 text-center items-center justify-between"
    >
      <div
        className="flex flex-col items-center justify-start gap-3 p-4 border h-full
        border-[#011238] hover:border-gray-400 transition-colors delay-100"
      >
        <img src={tap} alt="" />
        <p>ATTENTION</p>
        <p>Drive the RIGHT traffic to your website.</p>
      </div>

      <div
        className="flex flex-col items-center justify-start gap-3 p-4 border h-full
        border-[#011238] hover:border-gray-400 transition-colors delay-100"
      >
        <img src={handshake} alt="" />
        <p>CONVERSION</p>
        <p>Get your business ready to close every client that shows up.</p>
      </div>

      <div
        className="flex flex-col items-center justify-start gap-3 p-4 border h-full
        border-[#011238] hover:border-gray-400 transition-colors delay-100"
      >
        <img src={money} alt="" />
        <p>PROFITS</p>
        <p>
          Give more value and your customer will spend more with yo and more buy
          more times
        </p>
      </div>
    </div>
  );
};

export default Cards;
