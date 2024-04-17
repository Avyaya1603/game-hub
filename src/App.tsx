import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenresList from "./components/GenresList";
import { useState } from "react";
import { Genre } from "./hooks/useData";

function App() {
  const [selectedGenre, SetSelectedGenre] = useState<Genre | null>(null);

  const handleClick = (genre: Genre) => {
    SetSelectedGenre({ ...genre });
    console.log("genreId: ", genre.id);
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
          <GenresList handleClick={handleClick} />
        </GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameGrid selectedGenre={selectedGenre}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
