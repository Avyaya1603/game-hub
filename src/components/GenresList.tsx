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
  Button,
  Heading,
} from "@chakra-ui/react";
import getCroppedImageUrl from "../services/getCroppedImageUrl";

interface Props {
  handleClick: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

const GenresList = ({ handleClick, selectedGenre }: Props) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
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
              <Button
                whiteSpace={"normal"}
                textAlign="left"
                fontSize="lg"
                variant="link"
                onClick={() => handleClick(genre)}
                fontWeight={selectedGenre?.id === genre.id ? "bold" : "normal"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenresList;
