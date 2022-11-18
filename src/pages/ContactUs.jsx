import { At, Phone } from "phosphor-react";
import React, { useState } from "react";
import { Button } from "@chakra-ui/react";
import message from "../assets/message.svg";
import axios from "axios";

import { Client } from "@hubspot/api-client";
const hubspotClient = new Client({ accessToken: 'pat-eu1-6ea4e478-56ec-4d2a-8965-98a588bbcfc6' });

const ContactUs = () => {
  const [name, setName] = useState("");
  const [website, setWebsite] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [obs, setObs] = useState("");

  const sendContact = async () => {
    let contact = {
      firstname: name,
      website,
    };

    const createContactResponse = await hubspotClient.crm.contacts.basicApi
      .create(contact)
      .then((resp) => {
        console.log(resp);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <div className="padding-container pb-20 pt-10 md:pt-10 md:pb-10 space-y-10">
        <div
          className="rounded-lg w-full bg-[#011238] p-8 flex flex-col sm:flex-row items-center 
                                justify-between gap-10"
        >
          <p
            className="font-bold text-4xl md:text-4xl lg:text-left 
                                font-quatt text-white  max-w-lg"
          >
            Send us a message and it will be a pleasure contact you.
          </p>
          <img src={message} alt="" className="w-28" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 border border-gray-200 rounded-lg">
          <div className="bg-[#d4dbe9] rounded-t-lg md:rounded-bl-lg md:rounded-tr-none space-y-5  p-10">
            <h1 className="text-3xl font-bold">Get in touch</h1>
            <div className="space-y-3">
              <p className="text-gray-600">584 Evergreen Terrace</p>
              <p className="text-gray-600 flex items-center justify-start gap-2">
                <Phone size={22} />
                +1 (555) 123-4567
              </p>
              <p className="text-gray-600 flex items-center justify-start gap-2">
                <At size={22} />
                support@example.com
              </p>
              <p className="text-gray-700 text-lg  font-bold pt-5">
                Let's keep in touch!
              </p>
            </div>
          </div>

          <div className="col-span-2 p-10 space-y-4">
            <div className="grid grid-cols-2 gap-5">
              <input
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Full Name"
                className="p-4 border border-gray-300 w-full rounded-lg 
                                placeholder:text-gray-400 placeholder:font-normal shadow-sm 
                                    hover:border hover:border-[#FF6E4F]"
              />
              <input
                type="text"
                name="phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder="Phone Number"
                className="p-4 border border-gray-300 w-full rounded-lg 
                                placeholder:text-gray-400 placeholder:font-normal shadow-sm 
                                    hover:border hover:border-[#FF6E4F]"
              />
            </div>
            <input
              type="text"
              name="website"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              placeholder="Web Site"
              className="p-4 border border-gray-300 w-full rounded-lg 
                                placeholder:text-gray-400 placeholder:font-normal shadow-sm 
                                    hover:border hover:border-[#FF6E4F]"
            />

            <input
              type="text"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="p-4 border border-gray-300 w-full rounded-lg 
                                placeholder:text-gray-400 placeholder:font-normal shadow-sm 
                                    hover:border hover:border-[#FF6E4F]"
            />
            <textarea
              name="obg"
              id="obg"
              cols="30"
              rows="3"
              placeholder="Tell something to us"
              className="p-4 border border-gray-300 w-full rounded-lg 
                                    placeholder:text-gray-400 placeholder:font-normal shadow-sm 
                                        hover:border hover:border-[#FF6E4F]"
            ></textarea>

            <Button
              border={"2px"}
              borderColor={"#FF6E4F"}
              bg="transparent"
              _hover={{ opacity: 0.8 }}
              _active={{ opacity: 0.8 }}
              rounded={"full"}
              py="18px"
              px="42px"
              m={"auto"}
              fontWeight={"bold"}
              fontSize="18px"
              lineHeight={"19px"}
              color={"#FF6E4F"}
              onClick={sendContact}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
