import axios from "axios";

export const getWeather = async () => {
  const response = await axios.get(
    "http://localhost:5000/api/weather"
  );

  return response.data;
};