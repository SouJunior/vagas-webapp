import axios from "axios";

const api = axios.create({
  // baseURL: process.env.REACT_APP_URL
  baseURL: '../../mock/user.json'
});

export default api;