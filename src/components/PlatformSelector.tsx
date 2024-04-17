import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { Box, Button } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import React from "react";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();

  if (error) return null;
  return (
    <Box margin={2}>
      <Menu>
        <MenuButton as={Button} rightIcon={<FaChevronDown />}>
          Platforms
        </MenuButton>
        <MenuList>
          {data.map((platform) => (
            <MenuItem key={platform.id}>{platform.name}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default PlatformSelector;
