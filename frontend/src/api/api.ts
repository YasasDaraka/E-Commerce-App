import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/app/api/v1",
});

export default api;