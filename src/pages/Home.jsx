import Cards from "../sections/Cards";
import Footer from "../sections/Footer";
import Header from "../sections/Header";
import Images from "../sections/Images";
import NavBar from "../components/NavBar";
import Promises from "../sections/Promises";
import Steps from "../sections/Steps";
import Texts from "../sections/Texts";
import Conversation from "../sections/Conversation";
import { useQuery, gql } from "@apollo/client";

const GET_ALL = gql`
  query {
    session06S {
      subtitle
    }
  }
`;
const Home = () => {
  const { data } = useQuery(GET_ALL);
  console.log(data);

  return (
    <div className="text-white w-full antialiased bg-[#011238]">
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
          {data?.session06S[0].subtitle}
        </h1>
      </div>
      <Promises />
    </div>
  );
};

export default Home;
