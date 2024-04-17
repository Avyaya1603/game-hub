import { Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/menu";
import { Box, Button } from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import React from "react";
import usePlatforms from "../hooks/usePlatforms";
import { Platform } from "../hooks/useData";

interface Props {
  handleMenuSelection: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}
const PlatformSelector = ({ handleMenuSelection, selectedPlatform }: Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;
  return (
    <Box margin={2}>
      <Menu>
        <MenuButton as={Button} rightIcon={<FaChevronDown />}>
          {/* {selectedPlatform !== null ? selectedPlatform?.name : "Platforms"} */}
          {selectedPlatform?.name || "Platforms"}
        </MenuButton>
        <MenuList>
          {data.map((platform) => (
            <MenuItem
              key={platform.id}
              onClick={() => handleMenuSelection(platform)}
            >
              {platform.name}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </Box>
  );
};

export default PlatformSelector;
