import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import React from "react";

const NavBar = () => {
  return (
    <HStack>
      <Image src={logo} boxSize="60px"></Image>
    </HStack>
  );
};

export default NavBar;
