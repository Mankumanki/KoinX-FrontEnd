import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.coingecko.com/api/v3",
  headers: {
    Accept: "application/json",
    "x-cg-pro-api-key": process.env.VITE_GECKO_API_KEY,
  },
});

export default instance;
