import axios from 'axios';

const api = axios.create({
  baseURL: 'erp.railway.internal',
});

export default api;
