import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError, CanceledError } from "axios";

export interface Game {
  id: number;
  name: string;
  background_image: string;
}

interface ResponseDataSchema {
  count: number;
  results: Game[];
}

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const controller = new AbortController();
    apiClient
      .get<ResponseDataSchema>("/games", { signal: controller.signal })
      .then((response) => {
        setGames(response.data.results);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError((err as AxiosError).message);
      });

    return () => {
      controller.abort();
    };
  }, []);

  return { games, setGames, error, setError };
};

export default useGames;
