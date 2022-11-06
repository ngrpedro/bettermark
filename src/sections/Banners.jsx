import React from "react";

const Banners = () => {
  return (
    <div className="padding-container py-20">
      <div
        className="p-6 md:p-10 rounded-[20px] text-center bg-gradient-to-t font-quatt space-y-5
                from-[#AABBDD] to-[#9747FF] font-bold text-2xl leading-8 text-[#011238]"
      >
        <h1 className="block text-xl md:text-3xl text-white font-quatt">
          Increasing your sales is always a challenge.
        </h1>
        <p className="text-base">
          And although everyone brags about how good online marketing is, its
          just very hard to take the best of this opportunity if you are not an
          expert.
        </p>
      </div>
    </div>
  );
};

export default Banners;
