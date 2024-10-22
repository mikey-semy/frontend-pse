import axios from 'axios';

const api = axios.create({
  baseURL: 'https://workpse-backend-pse-c20039-05155f-193-233-20-69.traefik.me/',
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  config.auth = {
    username: import.meta.env.VITE_API_USERNAME,
    password: import.meta.env.VITE_API_PASSWORD,
  };
  config.withCredentials = true;
  return config;
});

export default api;