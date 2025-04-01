import axios from "axios";

import { config } from "dotenv";

config();

const api = axios.create({
  baseURL: process.env.API_URL_BASE,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
