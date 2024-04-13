import React from "react";
import { Platform } from "../hooks/useGames";
import { RiXboxLine } from "react-icons/ri";
import {
  FaWindows,
  FaPlaystation,
  FaXbox,
  FaAndroid,
  FaLinux,
  FaApple,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Badge, Flex, HStack, Icon, Text } from "@chakra-ui/react";
import { IconType } from "react-icons";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    playstation: FaPlaystation,
    linux: FaLinux,
    xbox: FaXbox,
    nintendo: SiNintendo,
    web: BsGlobe,
    mac: FaApple,
    ios: MdPhoneIphone,
    android: FaAndroid,
  };

  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="grey.300" />
      ))}
    </HStack>
  );
};

export default PlatformIconList;
