import { IconButton } from "@chakra-ui/react";
import { ArrowRight, DownloadSimple } from "phosphor-react";

import housekeys from "../assets/housekeys.jpg";
import salon from "../assets/salon.png";
import marketing from "../assets/marketing.png";
import engineering from "../assets/engineering.png";
import male from "../assets/male.png";

import pdf1 from "../assets/pdf/SEO-Hair Academy.pdf";
import pdf2 from "../assets/pdf/SEO-Dogotal Marketing.pdf";
import pdf3 from "../assets/pdf/SEO-Engineering-Services .pdf";
import pdf4 from "../assets/pdf/SEO-house-buyers-industries-docx.pdf";

const ResultsCardsSEO = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
      <div
        className="border border-gray-200 rounded-lg flex flex-col items-start 
                                                hover:shadow-md transition-all group"
      >
        <div className="w-full relative">
          <img
            src={salon}
            alt=""
            className="rounded-t-lg w-full h-52 object-cover
                                                group-hover:opacity-30 transition-all "
          />
          <div
            className="hidden group-hover:block transition-all"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <a href={pdf1} target="_blank" download={pdf1}>
              <IconButton
                aria-label="More"
                w="50px"
                h="50px"
                rounded={"full"}
                bg="#011238"
                _hover={{}}
                icon={<DownloadSimple size={26} color={"white"} />}
              />
            </a>
          </div>
        </div>
        <div className="p-4 space-y-2 flex items-center justify-between w-full">
          <div>
            <h1 className="text-lg font-bold block">SEO</h1>
            <p className="font-bold">Hair Academy</p>
          </div>
          <a href={pdf1} target="_blank">
            <ArrowRight size={24} className="cursor-pointer" />
          </a>
        </div>
      </div>

      <div
        className="border border-gray-200 rounded-lg flex flex-col items-start 
                                                hover:shadow-md transition-all group"
      >
        <div className="w-full relative">
          <img
            src={marketing}
            alt=""
            className="rounded-t-lg w-full h-52 object-cover
                                                group-hover:opacity-30 transition-all "
          />
          <div
            className="hidden group-hover:block transition-all"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <a href={pdf2} target="_blank" download={pdf2}>
              <IconButton
                aria-label="More"
                w="50px"
                h="50px"
                rounded={"full"}
                bg="#011238"
                _hover={{}}
                icon={<DownloadSimple size={26} color={"white"} />}
              />
            </a>
          </div>
        </div>
        <div className="p-4 space-y-2 flex items-center justify-between w-full">
          <div>
            <h1 className="text-lg font-bold block">SEO</h1>
            <p className="font-bold">Dogotal Marketing</p>
          </div>
          <a href={pdf2} target="_blank">
            <ArrowRight size={24} className="cursor-pointer" />
          </a>
        </div>
      </div>

      <div
        className="border border-gray-200 rounded-lg flex flex-col items-start 
                                                hover:shadow-md transition-all group"
      >
        <div className="w-full relative">
          <img
            src={engineering}
            alt=""
            className="rounded-t-lg w-full h-52 object-cover
                                                group-hover:opacity-30 transition-all "
          />
          <div
            className="hidden group-hover:block transition-all"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <a href={pdf3} target="_blank" download={pdf3}>
              <IconButton
                aria-label="More"
                w="50px"
                h="50px"
                rounded={"full"}
                bg="#011238"
                _hover={{}}
                icon={<DownloadSimple size={26} color={"white"} />}
              />
            </a>
          </div>
        </div>
        <div className="p-4 space-y-2 flex items-center justify-between w-full">
          <div>
            <h1 className="text-lg font-bold block">SEO</h1>
            <p className="font-bold">Engineering Services</p>
          </div>
          <a href={pdf3} target="_blank">
            <ArrowRight size={24} className="cursor-pointer" />
          </a>
        </div>
      </div>

      <div
        className="border border-gray-200 rounded-lg flex flex-col items-start 
                                                hover:shadow-md transition-all group"
      >
        <div className="w-full relative">
          <img
            src={male}
            alt=""
            className="rounded-t-lg w-full h-52 object-cover
                                                group-hover:opacity-30 transition-all "
          />
          <div
            className="hidden group-hover:block transition-all"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          >
            <a href={pdf4} target="_blank" download={pdf4}>
              <IconButton
                aria-label="More"
                w="50px"
                h="50px"
                rounded={"full"}
                bg="#011238"
                _hover={{}}
                icon={<DownloadSimple size={26} color={"white"} />}
              />
            </a>
          </div>
        </div>
        <div className="p-4 space-y-2 flex items-center justify-between w-full">
          <div>
            <h1 className="text-lg font-bold block">SEO</h1>
            <p className="font-bold">House Buyers-industries</p>
          </div>
          <a href={pdf4} target="_blank">
            <ArrowRight size={24} className="cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ResultsCardsSEO;
