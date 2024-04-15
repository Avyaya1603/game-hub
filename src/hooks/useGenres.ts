import useData,{Genre} from "./useData";

const useGenres = () => {
  return (useData<Genre>("/genres"));
};

export default useGenres;
