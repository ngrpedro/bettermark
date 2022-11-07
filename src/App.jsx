import { Button } from "@chakra-ui/react";
import pessoas from "./assets/pessoas.png";
import Cards from "./sections/Cards";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Images from "./sections/Images";
import NavBar from "./sections/NavBar";
import Promises from "./sections/Promises";
import Steps from "./sections/Steps";
import Texts from "./sections/Texts";

import text from "./assets/texte.svg";
import Arrow from './assets/arrow';


function App() {
  return (
    <div className="text-white w-full antialiased bg-[#011238]">
      <NavBar />
      <div className="">
        <Header />
        <Cards />
      </div>

      <div className="bg-[#eaeaea]">

        <div
          className="padding-container relative py-10 gap-10 
          grid grid-cols-1 md:grid-cols-2"
        >
          <h1 className="md:col-span-2 text-center block text-5xl md:text-5xl font-quatt text-black">
            Increasing your sales is always a challenge.
          </h1>

          {/* image */}
          <div className="space-y-8 max-w-[33rem] mx-auto text-justify">
            <img src="" alt="" className="rounded-lg w-full h-[13rem] object-cover flex items-center bg-gray-400" />
            <p className="text-lg border-l-4 border-purple-900 pl-5 text-black">
              And although everyone brags about how good online marketing is, its
              just very hard to take the best of this opportunity if you are not
              an expert.
            </p>
          </div>

          <div className="space-y-5 max-w-[33rem] m-auto text-justify text-black">
            <p className="text-lg border-l-4 border-purple-900 pl-5">
              The competition is high things change all the time, and the agencies don’t really speak your language
              <span className="text-[#a283f4]">
                You don’t want to spend hours {""}
              </span>
              trying to making sense of data and analytics.
            </p>

            <p className="text-lg border-l-4 border-purple-900 pl-5">
              Not only that- how in the world are you supposed to keep it up with
              every new trend, Google Ads feature or new platforms coming up?
            </p>

            <p className="text-lg border-l-4 border-purple-900 pl-5">
              <span className="text-[#a283f4]">We get it</span>, it’s
              overwhelming. And the truth is, you shouldnt have to worry about it.
              You didn’t go to school to become a professional marketer.{" "}
              <span className="text-[#a283f4]">We did</span>.
            </p>
          </div>
          {/* button */}
          <div className="md:col-span-2 m-auto mt-5">
            <Button
              bg={"#FF6E4F"}
              _hover={{ opacity: 0.8 }}
              _active={{ opacity: 0.8 }}
              rounded={"full"}
              py="18px"
              px="42px"
              m={"auto"}
              fontWeight={"bold"}
              fontSize="18px"
              lineHeight={"19px"}
            >
              Schedule a call
            </Button>
          </div>
        </div>
      </div>

      <Images />
      <Texts />
      <Steps />
      <div className="padding-container py-20 text-center bg-[#eaeaea] text-gray-900">
        <h1 className="text-xl md:text-4xl font-quatt">
          We understand you need an agency you can trust, that will create more
          value to your business than you pay them for. And if you don’t get
          results, we don’t get paid. What about that?
        </h1>
      </div>
      <Promises />
      <Footer />
    </div>
  );
}

export default App;
