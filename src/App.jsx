import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import NavBar from "./sections/NavBar";


function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Router />
    </BrowserRouter>
  );
}

export default App;
