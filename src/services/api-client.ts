import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "9ecd5137a97f484f93e71165756252ad",
  },
});
