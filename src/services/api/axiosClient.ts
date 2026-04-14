import axios from "axios";

export const axiosClient = axios.create({
  baseURL: "https://musicapp-production-bcd8.up.railway.app/api",
});
