import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchInput = () => {
  return (
    <InputGroup>
      <InputLeftElement children={<FaSearch />}/>
      <Input
        type="text"
        placeholder="Search games..."
        borderRadius={20}
        variant="filled"
      />
    </InputGroup>
  );
};

export default SearchInput;
