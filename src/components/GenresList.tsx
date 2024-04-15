import React from "react";
import useGenres from "../hooks/useGenres";
import useData, { Genre } from "../hooks/useData";
import {
  HStack,
  List,
  ListIcon,
  ListItem,
  Image,
  Text,
  Spinner,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/getCroppedImageUrl";

const GenresList = () => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack>
            <Image
              src={getCroppedImageUrl(genre.image_background)}
              boxSize="32px"
              borderRadius={8}
              objectFit="cover"
            />
            <Text fontSize="lg">{genre.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenresList;
