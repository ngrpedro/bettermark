import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  useDisclosure
} from "@chakra-ui/react";
import React, { useRef } from "react";
import { Link } from "react-router-dom";
import logo from '../assets/logo_full.png';

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <nav
      className=" to-transparent bg-white z-[200]
    flex items-center justify-between py-4 padding-container sticky top-0 shadow-lg"
    >
      {" "}
      {/* bg-gradient-to-b from-[#00081b] via-[#00081bb4] */}
      <a href="#">
        <Link to="/">
          <img src={logo} alt="" className="w-24" />
        </Link>
      </a>
      <ul className="hidden md:flex items-center justify-center gap-8 text-[#011238] font-bold text-lg">
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/ContactUs">
          <li>Contact Us</li>
        </Link>
      </ul>
      <div className="flex md:hidden">
        <IconButton
          onClick={onOpen}
          aria-label="Search database"
          bg={"transparent"}
          _hover={{ bg: "transparent" }}
          _active={{ bg: "transparent" }}
          icon={<HamburgerIcon color={'black'} />}
        />
      </div>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={"#fff"} color={"#011238"}>
          <DrawerCloseButton />
          <DrawerHeader>Better Marketing</DrawerHeader>

          <DrawerBody>
            <ul className="">
              <li>Home</li>
              <li>Contact Us</li>
            </ul>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Sair
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </nav>
  );
};

export default NavBar;
