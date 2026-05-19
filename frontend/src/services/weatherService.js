import axios from "axios";

const BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  "http://localhost:5000/api";

export const getWeather = async () => {
  const response = await axios.get(
    `${BASE_URL}/weather`
  );

  return response.data;
};