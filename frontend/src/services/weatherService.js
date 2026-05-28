import axios from "axios";

const BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "https://spk-wfc-manado-production-13bf.up.railway.app";

export const getWeather = async () => {
  const response = await axios.get(
    `${BASE_URL}/api/weather`
  );

  return response.data;
};