import { Box, Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import { Genre, Platform } from "./hooks/useData";
import PlatformSelector from "./components/platformSelector";
import SortSelector from "./components/SortSelector";
import GameHeading from "./components/GameHeading";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
  searchString: string;
}

function App() {
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
  //   null
  // );
  // const [selectedGenre, SetSelectedGenre] = useState<Genre | null>(null);

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  const handleClick = (genre: Genre) => {
    // SetSelectedGenre({ ...genre });
    setGameQuery({ ...gameQuery, genre: genre });
    console.log("Selected Genre: ", genre.name);
  };
  const handleMenuSelection = (platform: Platform) => {
    // setSelectedPlatform({ ...platform });
    setGameQuery({ ...gameQuery, platform: platform });
    console.log("Selected Plaform: ", platform.name);
  };

  const onSelectSortOrder = (sortOrder: string) => {
    console.log(sortOrder);
    setGameQuery({ ...gameQuery, sortOrder: sortOrder });
  };

  const handleSearch = (searchString: string) => {
    setGameQuery({ ...gameQuery, searchString: searchString });
    console.log(searchString);
  };

  return (
    <Grid
      templateAreas={{
        base: `"nav" 
              "main"`,
        lg: `"nav nav" 
              "aside main"`, //1024px
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar handleSearch={handleSearch}></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenresList
            handleClick={handleClick}
            selectedGenre={gameQuery.genre}
          />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <Box paddingLeft={2}>
          <GameHeading gameQuery={gameQuery}></GameHeading>
          <HStack marginBottom={5}>
            <PlatformSelector
              selectedPlatform={gameQuery.platform}
              handleMenuSelection={handleMenuSelection}
            ></PlatformSelector>
            <SortSelector
              selectedSortOrder={gameQuery.sortOrder}
              onSelectSortOrder={onSelectSortOrder}
            ></SortSelector>
          </HStack>
        </Box>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
