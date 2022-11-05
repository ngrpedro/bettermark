import { ArrowDownIcon, CalendarIcon } from "@chakra-ui/icons";
import { Button, IconButton } from "@chakra-ui/react";
import handshake from "./assets/handshake.svg";
import img1 from "./assets/img1.svg";
import img2 from "./assets/img2.svg";
import money from "./assets/money.svg";
import tap from "./assets/tap.svg";
import Header from "./sections/Header";
import NavBar from "./sections/NavBar";

function App() {
  return (
    <div className="bg-[#011238] text-white w-full antialiased">
      <NavBar />
      <Header />
      {/* CARDS */}
      <div
        className="padding-container grid grid-cols-1 
            md:grid-cols-3 text-center items-center justify-between"
      >
        <div
          className="flex flex-col items-center justify-start gap-3 p-4 border h-full
              border-[#011238] hover:border-gray-400 transition-colors delay-100"
        >
          <img src={tap} alt="" />
          <p>ATTENTION</p>
          <p>Drive the RIGHT traffic to your website.</p>
        </div>

        <div
          className="flex flex-col items-center justify-start gap-3 p-4 border h-full
              border-[#011238] hover:border-gray-400 transition-colors delay-100"
        >
          <img src={handshake} alt="" />
          <p>CONVERSION</p>
          <p>Get your business ready to close every client that shows up.</p>
        </div>

        <div
          className="flex flex-col items-center justify-start gap-3 p-4 border h-full
              border-[#011238] hover:border-gray-400 transition-colors delay-100"
        >
          <img src={money} alt="" />
          <p>PROFITS</p>
          <p>
            Give more value and your customer will spend more with yo and more
            buy more times
          </p>
        </div>
      </div>
      {/* BANNER */}
      <div className="padding-container py-20">
        <div
          className="p-10 rounded-[20px] text-center bg-gradient-to-t font-quatt space-y-5
                from-[#AABBDD] to-[#9747FF] font-bold text-2xl leading-8 text-[#011238]"
        >
          <h1 className="block text-3xl underline underline-offset-4 text-white">
            Increasing your sales is always a challenge.
          </h1>
          <p>
            And although everyone brags about how good online marketing is, its
            just very hard to take the best of this opportunity if you are not
            an expert.
          </p>
        </div>
      </div>
      {/* IMAGES */}
      <div className="padding-container ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-center justify-center">
          <div className="space-y-7">
            <p>
              The competition is high, things change all the time, and the
              agencies don’t really speak your language:{" "}
              <span className="text-[#AB72D8]">you don’t want to spend hours </span>trying to making sense
              of data and analytics.
            </p>
            <p>
              Not only that- how in the world are you supposed to keep it up
              with every new trend, Google Ads feature or new platforms coming
              up?
            </p>
            <p>
              We get it, it’s overwhelming. And the truth is, <span className="text-[#AB72D8]">you shouldnt have
              to worry about it</span>. You didn’t go to school to become a
              professional marketer. We did.
            </p>
          </div>
          <img src={img1} alt="" className="" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:-mt-32 gap-5 items-center justify-center">
          <img src={img2} alt="" />
          <div className="space-y-7">
            <p>
              That is why we want to eliminate digital marketing completely from
              your to do list and develop a marketing strategy that will
              increase your profits and help you achieve your goals.
            </p>
            <p>
              That way, you can continue working on what you’re good at: growing
              your business.
            </p>
          </div>
        </div>
      </div>

      {/* TEXTS */}
      <div className="padding-container py-20 text-center">
        <h1 className="text-4xl font-quatt">
          We offer more than marketing services. We are here to help you with
          your entire sales process. That way we can control the outcome and
          guarantee results.
        </h1>
        <div className="border-t border-gray-600 my-12 mx-48"></div>
        <h1 className="text-4xl font-quatt">
          We understand you need an agency you can trust, that will create more
          value to your business than you pay them for. And if you don’t get
          results, we don’t get paid. What about that?
        </h1>

        <IconButton
          className="animate-bounce"
          aria-label="Search database"
          rounded={"full"}
          py="16px"
          mt="14"
          fontWeight={"bold"}
          fontSize="16px"
          lineHeight={"19pxp"}
          bg={"#FF6E4F"}
          _hover={{ bg: "#FF6E4F" }}
          icon={<ArrowDownIcon />}
        />
      </div>

      {/* STEPS */}
      <div
        className="padding-container bg-gradient-to-b from-transparent via-[#022062] 
                to-transparent text-center space-y-16"
      >
        <div
          className="grid grid-cols-1 
          md:grid-cols-3 gap-5 mt-10"
        >
          <div
            className="bg-[#011238] p-3 rounded-xl border-t-8 border-white 
                space-y-4 hover:shadow-lg transition-all"
          >
            <h1 className="text-2xl">STEP 1</h1>

            <p>
              You schedule a call, we talk about your business and goals and we
              recommend the best plan and prices for you. No commitment.
            </p>
          </div>

          <div
            className="bg-[#011238] p-3 rounded-xl border-t-8 border-white 
                space-y-4 hover:shadow-lg transition-all"
          >
            <h1 className="text-2xl">STEP 2</h1>

            <p>
              Once you say yes, we send you all the support material and
              training and book the first coaching session. In the mean time we
              already started working on your SEO/PPC campaigns
            </p>
          </div>

          <div
            className="bg-[#011238] p-3 rounded-xl border-t-8 border-white 
                space-y-4 hover:shadow-lg transition-all"
          >
            <h1 className="text-2xl">STEP 3</h1>

            <p>
              Monthly we analise results and performance, adjust strategies and
              keep educating and coaching you for a life time relationship. And
              you can just enjoy the feeling of watching your business
              skyrocketing.
            </p>
          </div>
        </div>
        <Button
          bg={"#FF6E4F"}
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

      {/* PROMISES */}
      <div className="padding-container py-20 ">
        <div className="grid grid-cols-1 md:grid-cols-5 items-start gap-20">
          <h1 className="md:col-span-5 text-5xl font-bold font-quatt">
            Getting things done does’t move the needle in your business.
          </h1>
          <div className="space-y-5 md:col-span-2">
            <p className="underline decoration-3 text-xl underline-offset-4">
              Getting things done that matter, does.{" "}
            </p>

            <p>
              <strong>ACTION</strong> is what moves your brand to the next
              level. Take de first step and schedule your call TODAY.
            </p>
          </div>
          <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="flex gap-4 items-start justify-start">
              <IconButton
                aria-label="Search database"
                rounded={"full"}
                fontWeight={"bold"}
                fontSize="16px"
                lineHeight={"19pxp"}
                bg={"#524fff"}
                _hover={{ bg: "#524fff" }}
                icon={<CalendarIcon />}
              />
              We want to build a relationship of years with you. So we are
              driven by your results.
            </div>
            <div className="flex gap-4 items-start justify-start">
              <IconButton
                aria-label="Search database"
                rounded={"full"}
                fontWeight={"bold"}
                fontSize="16px"
                lineHeight={"19pxp"}
                bg={"#524fff"}
                _hover={{ bg: "#524fff" }}
                icon={<CalendarIcon />}
              />
              We want to communicate the best. Our data will inform you, not
              confuse you.
            </div>
            <div className="flex gap-4 items-start justify-start">
              <IconButton
                aria-label="Search database"
                rounded={"full"}
                fontWeight={"bold"}
                fontSize="16px"
                lineHeight={"19pxp"}
                bg={"#524fff"}
                _hover={{ bg: "#524fff" }}
                icon={<CalendarIcon />}
              />
              There is no lock-in contract. We want you stay for the results.
            </div>
            <div className="flex gap-4 items-start justify-start">
              <IconButton
                aria-label="Search database"
                rounded={"full"}
                fontWeight={"bold"}
                fontSize="16px"
                lineHeight={"19pxp"}
                bg={"#524fff"}
                _hover={{ bg: "#524fff" }}
                icon={<CalendarIcon />}
              />
              And we are committed to make it work. If you are not happy, we
              don’t get paid.
            </div>
          </div>
        </div>
        <Button
          bg={"#FF6E4F"}
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

      {/* FOOTER */}
      <div className="padding-container py-20 bg-[#56128C]"></div>
    </div>
  );
}

export default App;
