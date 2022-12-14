import { FacebookLogo, InstagramLogo, WhatsappLogo } from "phosphor-react";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="padding-container relative bg-blueGray-200 pt-8 pb-6 bg-white 
          text-black shadow-2xl shadow-white border-t border-gray-200"
    >
      <div className="mx-auto">
        <div className="flex flex-col md:flex-row items-start gap-10 w-full">
          <div className="w-full ">
            <h4 className="text-3xl fonat-semibold text-blueGray-700">
              Let's keep in touch!
            </h4>
            <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
              Find us on any of these platforms, we respond 1-2 business days.
            </h5>
            <div className="mt-6 lg:mb-0 mb-6 space-x-5">
              <button className="" type="button">
                <a
                  href="https://www.instagram.com/bettermarketingau/"
                  target="_blank"
                >
                  <InstagramLogo size={28} />
                </a>
              </button>
              <button className="" type="button">
                <a
                  href="https://api.whatsapp.com/send?phone=61435898291&text=Hello%2C%20Isabella."
                  target="_blank"
                >
                  <WhatsappLogo size={28} />
                </a>
              </button>
            </div>
          </div>
          <div className="w-full mt-2">
            <div className="flex items-top mb-6">
              <div className="w-full ml-auto">
                <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">
                  Useful Links
                </span>
                <ul className="list-unstyled flex gap-5">
                  <Link to="/">
                    <li>Home</li>
                  </Link>
                  <Link to="/Services">
                    <li>Services</li>
                  </Link>
                  <Link to="/Results">
                    <li>Results</li>
                  </Link>
                  <Link to="/ContactUs">
                    <li>Contact Us</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
