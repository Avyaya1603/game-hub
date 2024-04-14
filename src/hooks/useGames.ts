import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError, CanceledError } from "axios";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

// interface PlatformWraper {
//   platformWrapper: Platform;
// }

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface ResponseDataSchema {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, SetLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    SetLoading(true);
    apiClient
      .get<ResponseDataSchema>("/games", { signal: controller.signal })
      .then((response) => {
        setGames(response.data.results);
        console.log(response.data.results[0].parent_platforms);
        SetLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError((err as AxiosError).message);
        SetLoading(false);
      });
    // .finally(() => {
    //   SetLoading(false);
    // });

    return () => {
      controller.abort();
    };
  }, []);

  return { games, setGames, error, setError, isLoading };
};

export default useGames;
