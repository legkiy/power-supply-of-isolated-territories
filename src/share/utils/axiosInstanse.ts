import axios from 'axios';

const axiosInstanse = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {},
});

export default axiosInstanse;
