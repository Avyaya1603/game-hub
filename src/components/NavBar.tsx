import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.webp";
import React from "react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  handleSearch: (searchString: string) => void;
}

const NavBar = ({ handleSearch }: Props) => {
  return (
    <HStack justifyContent="space-between">
      <Image src={logo} boxSize="60px"></Image>
      <SearchInput handleSearch={handleSearch}></SearchInput>
      <ColorModeSwitch></ColorModeSwitch>
    </HStack>
  );
};

export default NavBar;
