import axios from "axios";

export const api = axios.create({
  // https://food-explorer-backend-production.up.railway.app
  baseURL: "https://food-explorer-backend-production.up.railway.app",
});
