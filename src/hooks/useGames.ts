import { GameQuery } from "../App";
import useData, { Game, Genre, Platform } from "./useData";

// export interface Platform {
//   id: number;
//   name: string;
//   slug: string;
// }

// interface PlatformWraper {
//   platformWrapper: Platform;
// }

// export interface Game {
//   id: number;
//   name: string;
//   background_image: string;
//   parent_platforms: { platform: Platform }[];
//   metacritic: number;
// }

const useGames = (gameQuery: GameQuery | null) => {
  return useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery?.genre?.id,
        parent_platforms: gameQuery?.platform?.id,
        ordering: gameQuery?.sortOrder,
        search: gameQuery?.searchString,
      },
    },
    [gameQuery]
  );
};

export default useGames;
