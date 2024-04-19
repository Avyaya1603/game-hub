import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import React, { useRef } from "react";
import { FaSearch } from "react-icons/fa";

interface Props {
  handleSearch: (searchString: string) => void;
}

const SearchInput = ({ handleSearch }: Props) => {
  const searchRef = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (searchRef.current) handleSearch(searchRef.current.value);
      }}
    >
      <InputGroup>
        <InputLeftElement children={<FaSearch />} />
        <Input
          ref={searchRef}
          type="text"
          placeholder="Search games..."
          borderRadius={20}
          variant="filled"
          // onKeyDown={(event) => {
          //   if (event.key === "Enter") handleSearch(event.currentTarget.value);
          // }}
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
