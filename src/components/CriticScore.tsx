import { Badge } from "@chakra-ui/react";
import React from "react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "";
  return (
    <Badge
      fontSize="15px"
      colorScheme={color}
      paddingX="10px"
      borderRadius="5px"
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
