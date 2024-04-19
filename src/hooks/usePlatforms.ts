import useData, { Platform } from "./useData";
import platforms from "../data/platforms";

const usePlatforms = () => {
  // return useData<Platform>("/platforms/lists/parents");
  // Use static data instead of calling server to improve user performance
  return { data: platforms, error: false };
};

export default usePlatforms;
