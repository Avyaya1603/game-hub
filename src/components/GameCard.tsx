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
import { Game } from "../hooks/useGames";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/getCroppedImageUrl";

interface Props {
  game: Game; 
  isLoaded: boolean;
}

const GameCard = ({ game, isLoaded }: Props) => {
  return (
    <Card>
      <Skeleton isLoaded={isLoaded}>
        <Image src={getCroppedImageUrl(game.background_image)}></Image>
      </Skeleton>
      <CardBody>
        <SkeletonText isLoaded={isLoaded}>
          <Heading fontSize="2xl">{game.name}</Heading>
          <HStack justifyContent="space-between">
            <PlatformIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            ></PlatformIconList>
            <CriticScore score={game.metacritic}></CriticScore>
          </HStack>
        </SkeletonText>
      </CardBody>
    </Card>
  );
};

export default GameCard;
