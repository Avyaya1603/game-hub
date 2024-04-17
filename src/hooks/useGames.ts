import useData, { Game, Genre } from "./useData";

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

const useGames = (selectedGenre: Genre | null) => {
  return useData<Game>("/games", { params: { genres: selectedGenre?.id } }, [
    selectedGenre?.id,
  ]);
};

export default useGames;
