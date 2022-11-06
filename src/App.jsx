import Banners from "./sections/Banners";
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
      <Banners />
      <Images />
      <Texts />
      <Steps />
      <Promises />
      <Footer />
    </div>
  );
}

export default App;
