import {
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Skeleton,
  SkeletonText,
  Text,
} from "@chakra-ui/react";
import React from "react";
import useData, { Game } from "../hooks/useData";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/getCroppedImageUrl";
import Emojis from "./Emojis";
import { transform } from "framer-motion";
import "./GameCard.css";

interface Props {
  game: Game;
  isLoaded: boolean;
}

const GameCard = ({ game, isLoaded }: Props) => {
  return (
    <Card className="GameGridItem">
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms?.map((p) => p.platform)}
          ></PlatformIconList>
          <CriticScore score={game.metacritic}></CriticScore>
        </HStack>
        <Heading fontSize="2xl">{game.name}</Heading>
        <Emojis rating={game.rating_top}></Emojis>
      </CardBody>
    </Card>
  );
};

export default GameCard;
