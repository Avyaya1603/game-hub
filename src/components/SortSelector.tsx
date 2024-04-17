import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";

const SortSelector = () => {
  const [selectedSortOrder, setSelectedSortOrder] =
    useState<string>("Relevance");

  const handleClick = (selection: string) => {
    setSelectedSortOrder(selection);
    console.log(selection);
  };
  const sortCategories: string[] = [
    "Relevance",
    "Date added",
    "Name",
    "Release date",
    "Popularity",
    "Average Rating",
  ];

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<FaChevronDown />}>
        {"Order By: " + selectedSortOrder}
      </MenuButton>
      <MenuList>
        {sortCategories.map((item, index) => (
          <MenuItem key={index} onClick={() => handleClick(item)}>
            {item}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
