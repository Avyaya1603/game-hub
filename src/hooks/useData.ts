import { AxiosError, CanceledError } from "axios";
import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface Genre {
  id: number;
  name: string;
}

interface ResponseDataSchema<T> {
  count: number;
  results: T[];
}

const useData = <T>(endPoint: string) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, SetLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    SetLoading(true);
    apiClient
      .get<ResponseDataSchema<T>>(endPoint, { signal: controller.signal })
      .then((response) => {
        setData(response.data.results);
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

  return { data, setData, error, setError, isLoading };
};

export default useData;
