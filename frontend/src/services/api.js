import axios from "axios";

const api = axios.create({
  baseURL:
    import.meta.env.VITE_API_BASE_URL ||
    "https://spk-wfc-manado-production-13bf.up.railway.app",
});

export default api;