import axios from 'axios';

const api = axios.create({
  baseURL: 'https://seu-backend-url-na-railway.up.railway.app',
});

export default api;
