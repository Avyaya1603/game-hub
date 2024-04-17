import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import { Genre, Platform } from "./hooks/useData";
import PlatformSelector from "./components/platformSelector";

function App() {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
    null
  );
  const [selectedGenre, SetSelectedGenre] = useState<Genre | null>(null);

  const handleClick = (genre: Genre) => {
    SetSelectedGenre({ ...genre });
    console.log("Selected Genre: ", genre.name);
  };
  const handleMenuSelection = (platform: Platform) => {
    setSelectedPlatform({ ...platform });
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
        lg: "200px 1fr",
      }}
    >
      <GridItem area={"nav"}>
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}>
          <GenresList handleClick={handleClick} selectedGenre={selectedGenre} />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <PlatformSelector
          selectedPlatform={selectedPlatform}
          handleMenuSelection={handleMenuSelection}
        ></PlatformSelector>
        <GameGrid
          selectedGenre={selectedGenre}
          selectedPlatform={selectedPlatform}
        ></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
