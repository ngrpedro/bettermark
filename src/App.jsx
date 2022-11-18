import { BrowserRouter } from "react-router-dom";
import Router from "./Router";
import Footer from "./sections/Footer";
import NavBar from "./components/NavBar";
import { client } from "./service/apollo";
import { ApolloProvider } from "@apollo/client";

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <NavBar />
        <Router />
        <Footer />
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
