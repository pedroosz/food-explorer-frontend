import axios from "axios";

export const api = axios.create({
  // https://food-explorer-backend-g2y2.onrender.com
  baseURL: "https://food-explorer-backend-g2y2.onrender.com",
});
