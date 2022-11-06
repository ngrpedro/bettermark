import React from "react";

import img1 from "../assets/img1.svg";
import img2 from "../assets/img2.svg";

const Images = () => {
  return (
    <div className="padding-container">
      <div className="grid grid-cols-1 md:grid-cols-2 reverse gap-5 items-center justify-center">
        <img src={img1} alt="" className="block md:hidden" />
        <div className="space-y-7 text-justify">
          <h1 className="text-4xl font-bold font-quatt">
            The competition is high
          </h1>
          <p className="text-justify">
            Things change all the time, and the agencies don’t really speak your
            language:{" "}
            <span className="text-[#AB72D8]">
              you don’t want to spend hours{" "}
            </span>
            trying to making sense of data and analytics.
          </p>
          <p>
            Not only that- how in the world are you supposed to keep it up with
            every new trend, Google Ads feature or new platforms coming up?
          </p>
          <p>
            We get it, it’s overwhelming. And the truth is,{" "}
            <span className="text-[#AB72D8]">
              you shouldnt have to worry about it
            </span>
            . You didn’t go to school to become a professional marketer. We did.
          </p>
        </div>
        <div className="max-w-md m-auto">
          <img src={img1} alt="" className="hidden md:block" />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:-mt-20 gap-5 items-center justify-center">
        <div className="max-w-md m-auto">
          <img src={img2} alt="" />
        </div>

        <div className="space-y-7 text-justify">
          <h1 className="text-4xl font-bold font-quatt">That is why</h1>
          <p>
            We want to eliminate digital marketing completely from your to do
            list and develop a marketing strategy that will increase your
            profits and help you achieve your goals.
          </p>
          <p>
            That way, you can continue working on what you’re good at: growing
            your business.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Images;
