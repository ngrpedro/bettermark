import { Button } from "@chakra-ui/react";
import { CalendarCheck } from "phosphor-react";
import React from "react";
import highfive from "../assets/high-five.svg";
import thumbup from "../assets/thumb-up.svg";

const Steps = () => {
  return (
    <div className="padding-container py-20 m-auto border-t border-gray-800">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="flex items-start">
          <div className="w-56">
            <svg
              width="38"
              height="53"
              viewBox="0 0 38 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.69652 9.82V6.068L5.32052 5.13H8.58252L10.2065 6.068V7.51H8.80652V6.39H5.09652V9.358H8.58252L10.2065 10.296V14.132L8.58252 15.07H5.18052L3.55652 14.132V12.69H4.95652V13.81H8.80652V10.758H5.32052L3.69652 9.82ZM16.066 6.46V15H14.666V6.46H11.88V5.2H18.852V6.46H16.066ZM21.9266 10.59V13.74H26.1126V15H20.5266V5.2H26.1126V6.46H21.9266V9.33H25.2726V10.59H21.9266ZM28.0735 15V5.2H32.9595L34.5835 6.138V10.296L32.9595 11.234H29.4735V15H28.0735ZM29.4735 6.46V9.974H33.1835V6.46H29.4735Z"
                fill="#A283F4"
              />
              <path
                d="M17.7197 40.14L14.2397 42.15H6.64973L3.16973 40.14V22.86L6.64973 20.85H14.2397L17.7197 22.86V40.14ZM6.16973 23.55V39.45H14.7197V23.55H6.16973ZM23.1209 27.3V24.27L28.8209 21H31.2209V39.3H36.3209V42H23.1209V39.3H28.2209V24.36L23.1209 27.3Z"
                fill="#A283F4"
              />
            </svg>
            <div className="border-l border-[#A283F4] h-[10rem] ml-4"></div>
          </div>

          <div
            className="rounded-md
          space-y-4 hover:shadow-lg transition-all
          flex gap-5 items-start justify-center flex-col"
          >
            <div className="m-auto">
              <CalendarCheck size={40} />
            </div>

            <p className="text-center">
              You schedule a call, we talk about your business and goals and we
              recommend the best plan and prices for you. No commitment.
            </p>
            <Button
              w="full"
              bg={"#FF6E4F"}
              _hover={{ opacity: 0.8 }}
              _active={{ opacity: 0.8 }}
              rounded={"full"}
              py="12px"
              px="40px"
              fontWeight={"bold"}
              fontSize="16px"
              lineHeight={"19pxp"}
            >
              Schedule a call
            </Button>
          </div>
        </div>

        <div className="flex items-start">
          <div className="w-56">
            <svg
              width="39"
              height="53"
              viewBox="0 0 39 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.19652 9.82V6.068L5.82052 5.13H9.08252L10.7065 6.068V7.51H9.30652V6.39H5.59652V9.358H9.08252L10.7065 10.296V14.132L9.08252 15.07H5.68052L4.05652 14.132V12.69H5.45652V13.81H9.30652V10.758H5.82052L4.19652 9.82ZM16.566 6.46V15H15.166V6.46H12.38V5.2H19.352V6.46H16.566ZM22.4266 10.59V13.74H26.6126V15H21.0266V5.2H26.6126V6.46H22.4266V9.33H25.7726V10.59H22.4266ZM28.5735 15V5.2H33.4595L35.0835 6.138V10.296L33.4595 11.234H29.9735V15H28.5735ZM29.9735 6.46V9.974H33.6835V6.46H29.9735Z"
                fill="#A283F4"
              />
              <path
                d="M17.3262 40.14L13.8462 42.15H6.25617L2.77617 40.14V22.86L6.25617 20.85H13.8462L17.3262 22.86V40.14ZM5.77617 23.55V39.45H14.3262V23.55H5.77617ZM25.7273 39.3H36.2273V42H22.7273V32.58L26.2073 30.57H33.2273V23.7H25.7273V26.4H22.7273V23.01L26.2073 21H32.7473L36.2273 23.01V31.26L32.7473 33.27H25.7273V39.3Z"
                fill="#A283F4"
              />
            </svg>
            <div className="border-l border-[#A283F4] h-[10rem] ml-4"></div>
          </div>

          <div
            className="rounded-md
            space-y-4 hover:shadow-lg transition-all
            flex gap-5 items-start justify-center flex-col"
          >
            <img src={thumbup} alt="" className=" mx-auto" />

            <p className="text-center">
              Once you say yes, we send you all the support material and
              training and book the first coaching session. In the mean time we
              already started working on your SEO/PPC campaigns
            </p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="w-56">
            <svg
              width="40"
              height="53"
              viewBox="0 0 40 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M4.69652 9.82V6.068L6.32052 5.13H9.58252L11.2065 6.068V7.51H9.80652V6.39H6.09652V9.358H9.58252L11.2065 10.296V14.132L9.58252 15.07H6.18052L4.55652 14.132V12.69H5.95652V13.81H9.80652V10.758H6.32052L4.69652 9.82ZM17.066 6.46V15H15.666V6.46H12.88V5.2H19.852V6.46H17.066ZM22.9266 10.59V13.74H27.1126V15H21.5266V5.2H27.1126V6.46H22.9266V9.33H26.2726V10.59H22.9266ZM29.0735 15V5.2H33.9595L35.5835 6.138V10.296L33.9595 11.234H30.4735V15H29.0735ZM30.4735 6.46V9.974H34.1835V6.46H30.4735Z"
                fill="#A283F4"
              />
              <path
                d="M17.5039 40.14L14.0239 42.15H6.43391L2.95391 40.14V22.86L6.43391 20.85H14.0239L17.5039 22.86V40.14ZM5.95391 23.55V39.45H14.5039V23.55H5.95391ZM33.5551 42.15H26.3851L22.9051 40.14V36.75H25.9051V39.45H34.0351V32.49H27.8851V29.79H34.0351V23.55H25.9051V26.25H22.9051V22.86L26.3851 20.85H33.5551L37.0351 22.86V29.61L34.4251 31.11V31.17L37.0351 32.67V40.14L33.5551 42.15Z"
                fill="#A283F4"
              />
            </svg>
            <div className="border-l border-[#A283F4] h-[10rem] ml-4"></div>
          </div>

          <div
            className="rounded-md
            space-y-4 hover:shadow-lg transition-all
            flex gap-5 items-start justify-center flex-col"
          >
            <img src={highfive} alt="" className=" mx-auto" />

            <p className="text-center">
              Monthly we analise results and performance, adjust strategies and
              keep educating and coaching you for a life time relationship. And
              you can just enjoy the feeling of watching your business
              skyrocketing.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
