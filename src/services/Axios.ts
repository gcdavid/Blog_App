import Axios from "axios";

export const AppAxios = Axios.create({
  baseURL: "http://localhost:8800/api/",
});
