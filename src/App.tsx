import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import { Genre, Platform } from "./hooks/useData";
import PlatformSelector from "./components/platformSelector";

export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
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
        lg: "250px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar></NavBar>
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
        <PlatformSelector
          selectedPlatform={gameQuery.platform}
          handleMenuSelection={handleMenuSelection}
        ></PlatformSelector>
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
