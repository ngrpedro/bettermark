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

function App() {
  return (
    <div className="bg-[#011238] text-white w-full antialiased">
      <NavBar />
      <Header />
      <Cards />
      <div
        className="padding-container relative pt-10 pb-24 gap-10 bg-[#eaeaea]
          grid grid-cols-1 md:grid-cols-2 items-center justify-center "
      >
        <div className="flex flex-col items-start justify-between gap-5 h-full min-h-[20rem] py-6 max-w-[33rem] m-auto">
          <h1 className="block text-5xl md:text-5xl font-quatt text-black">
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
        </div>

        <div className="flex items-center justify-center text-black">
          <div className="">
            <img src={pessoas} alt="" className="rounded-lg" />
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
