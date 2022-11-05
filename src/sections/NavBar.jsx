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

const NavBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <nav className="bg-gradient-to-b from-[#00081b] via-[#00081bb4] to-transparent
    flex items-center justify-between pt-6 pb-6 padding-container sticky top-0 shadow-lg">
      <a href="#">Logo</a>

      <ul className="hidden md:flex items-center justify-center gap-4">
        <li>Menu</li>
        <li>Menu</li>
        <li>Menu</li>
        <li>Menu</li>
      </ul>

      <div className="flex md:hidden">
        <IconButton
          onClick={onOpen}
          aria-label="Search database"
          bg={"transparent"}
          _hover={{ bg: "transparent" }}
          _active={{ bg: "transparent" }}
          icon={<HamburgerIcon />}
        />
      </div>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent bg={"#011238"} color={"#fff"}>
          <DrawerCloseButton />
          <DrawerHeader>Better Marketing</DrawerHeader>

          <DrawerBody>
            <ul className="">
              <li>Menu</li>
              <li>Menu</li>
              <li>Menu</li>
              <li>Menu</li>
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
