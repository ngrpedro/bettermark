import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import Footer from "./sections/Footer";
import NavBar from "./sections/NavBar";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Router />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
