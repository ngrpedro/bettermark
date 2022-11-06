import { Button } from "@chakra-ui/react";
import Cards from "./sections/Cards";
import Footer from "./sections/Footer";
import Header from "./sections/Header";
import Images from "./sections/Images";
import NavBar from "./sections/NavBar";
import Promises from "./sections/Promises";
import Steps from "./sections/Steps";
import Texts from "./sections/Texts";

function App() {
  return (
    <div className="bg-[#011238] text-white w-full antialiased">
      <NavBar />
      <Header />
      <Cards />
      <div
        className="padding-container relative bg-white 
          grid grid-cols-1 md:grid-cols-2 items-center justify-center"
      >
        <div className="space-y-5">
          <h1 className="block text-xl md:text-3xl font-quatt text-black">
            Increasing your sales is always a challenge.
          </h1>
          <p className="text-base text-black">
            And although everyone brags about how good online marketing is, its
            just very hard to take the best of this opportunity if you are not
            an expert.
          </p>
          <Button
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
          <div className="icon1 absolute top-0"></div>
          <div className="icon2 absolute top-20 left-10"></div>
          <div className="icon3 absolute top-28 left-96"></div>
          <div className="icon4 absolute bottom-3 right-[45rem]"></div>
        </div>

        <div className="flex items-center justify-center text-black">
          <div className="">
            <div className="moca-bg">
            </div>
          </div>
        </div>
      </div>
      <Images />
      <Texts />
      <Steps />
      <Promises />
      <Footer />
    </div>
  );
}

export default App;
