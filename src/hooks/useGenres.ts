import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { AxiosError, CanceledError } from "axios";

interface Genre {
  id: number;
  name: string;
}

interface ResponseSchema {
  count: number;
  results: Genre[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const controller = new AbortController();
    setLoading(true);

    apiClient
      .get<ResponseSchema>("/genres", { signal: controller.signal })
      .then((response) => {
        setGenres(response.data.results);
        setLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError((err as AxiosError).message);
        setLoading(false);
      });
  }, []);
  return { genres, isLoading, error };
};

export default useGenres;
