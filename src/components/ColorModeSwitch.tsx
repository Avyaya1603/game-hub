import { HStack, Switch, Text, useColorMode } from "@chakra-ui/react";
import React from "react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <div>
      <HStack padding="10px">
        <Switch
          colorScheme="green"
          isChecked={colorMode === "dark"}
          onChange={toggleColorMode}
        ></Switch>
        <Text>Dark Mode</Text>
      </HStack>
    </div>
  );
};

export default ColorModeSwitch;
