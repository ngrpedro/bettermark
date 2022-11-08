import React from "react";

import handshake from "../assets/handshake1.svg";
import money from "../assets/money.svg";
import tap from "../assets/tap.svg";

const Cards = () => {
  return (
    <div
      className="padding-container grid grid-cols-1 gap-5 md:max-w-full m-auto relative
      sm:grid-cols-3 text-center items-center justify-between py-10 pb-20"
    >
      <div
        className="flex flex-col items-center text-center justify-center gap-3 px-8 py-5 h-full bg-[#1e315a] hover:shadow-lg transition-shadow delay-100
                rounded-md border-b-8 border-[#a283f4] z-[100]"
      >
        <div className="flex flex-col items-center gap-1">
          <img src={tap} alt="" className="w-[3rem] -ml-2" />
          <p className="text-2xl font-bold ">Attention</p>
        </div>
        <p>Drive the RIGHT traffic to your website.</p>
      </div>

      <div
        className="flex flex-col items-center text-center justify-center gap-3 px-8 py-5 h-full bg-[#1e315a] hover:shadow-lg transition-shadow delay-100
        rounded-md border-b-8 border-[#a283f4] z-[100]"
      >
        <div className="flex flex-col items-center gap-1">
          <img src={handshake} alt="" className="w-[3rem]" />
          <p className="text-2xl font-bold ">Conversion</p>
        </div>

        <p>Get your business ready to close every client that shows up.</p>
      </div>

      <div
        className="flex flex-col items-center text-center justify-center gap-3 px-8 py-5 h-full bg-[#1e315a] hover:shadow-lg transition-shadow delay-100
        rounded-md border-b-8 border-[#a283f4] z-[100]"
      >
        <div className="flex flex-col items-center gap-1">
          <img src={money} alt="" className="w-[3rem]" />
          <p className="text-2xl font-bold " p>
            Profits
          </p>
        </div>

        <p>
          Give more value and your customer will spend more with you and more buy
          more times
        </p>
      </div>

      <div className="bg-[#eaeaea] absolute inset-x-0  bottom-0 top-[40%] z-[1]"></div>
    </div>
  );
};

export default Cards;
