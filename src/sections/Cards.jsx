import React from "react";

import handshake from "../assets/handshake1.svg";
import money from "../assets/money.svg";
import tap from "../assets/tap.svg";

const Cards = () => {
  return (
    <div
      className="padding-container grid grid-cols-1 gap-5 max-w-[33rem] md:max-w-full m-auto
      md:grid-cols-3 text-center items-center justify-between py-10 pb-20"
    >
      <div
        className="flex flex-col items-start text-start justify-start gap-3 p-4 h-full bg-[#040f2c]
                rounded-md border-b-8 border-blue-900"
      >
        <img src={tap} alt="" className="" />
        <p>ATTENTION</p>
        <p>Drive the RIGHT traffic to your website.</p>
      </div>

      <div
        className="flex flex-col items-start text-start justify-start gap-3 p-4 h-full bg-[#040f2c]
                rounded-md border-b-8 border-blue-900"
      >
        <img src={handshake} alt="" className="" />
        <p>CONVERSION</p>
        <p>Get your business ready to close every client that shows up.</p>
      </div>

      <div
        className="flex flex-col items-start text-start justify-start gap-3 p-4 h-full bg-[#040f2c]
                rounded-md border-b-8 border-blue-900"
      >
        <img src={money} alt="" className="" />
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
