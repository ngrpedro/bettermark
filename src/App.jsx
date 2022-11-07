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
import Conversation from "./sections/Conversation";


function App() {
  return (
    <div className="text-white w-full antialiased bg-[#011238]">
      <NavBar />
      <div className="">
        <Header />
        <Cards />
      </div>
      <Conversation />
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
