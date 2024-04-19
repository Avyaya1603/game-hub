// import useData, { Genre } from "./useData";
import genres from "../data/genres";

const useGenres = () => {
  //   return useData<Genre>("/genres");
  // Importing below static data instead of calling server for better user experience
  return {
    data: genres,
    isLoading: false,
    error: null,
  };
};

export default useGenres;
