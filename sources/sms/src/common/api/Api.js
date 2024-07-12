import axios from "axios";

const Api = axios.create({
  baseURL: "http://localhost:8000/provider",
  timeout: 5000,
});

export default Api;
