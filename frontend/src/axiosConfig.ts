import axios from 'axios';

let apiUrl = import.meta.env.VITE_API_URL;

if (!apiUrl) {
  apiUrl = 'http://localhost:3005';
}

const api = axios.create({
  baseURL: apiUrl,
  timeout: 10000,
});

export default api;
