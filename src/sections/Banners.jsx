import React from "react";
import banner from '../assets/banner.png';

const Banners = () => {
  return (
    <div className="padding-container py-20">
      <div
        className="p-6 md:p-10 rounded-[20px] font-quatt space-y-5 md:space-y-0 bg-gradient-to-t md:bg-gradient-to-l from-[#AABBDD] to-[#9747FF]
           font-bold text-2xl leading-8 text-[#011238] grid grid-cols-1 md:grid-cols-3"
      >
        <div className="md:col-span-2 space-y-5">
          <h1 className="block text-xl md:text-3xl text-white font-quatt">
            Increasing your sales is always a challenge.
          </h1>
          <p className="text-base">
            And although everyone brags about how good online marketing is, its
            just very hard to take the best of this opportunity if you are not
            an expert.
          </p>
        </div>
        <div>
          <img src={banner} alt="" className="m-auto"/>
        </div>
      </div>
    </div>
  );
};

export default Banners;
