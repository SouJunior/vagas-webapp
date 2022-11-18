import axios from "axios";

const api = axios.create({
  baseURL: "https://dev-backend-vagas.up.railway.app/",
});

export default api;