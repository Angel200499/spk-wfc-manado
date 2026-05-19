import axios from "axios";

export const getWeather = async (req, res) => {
  try {
    const apiKey = process.env.WEATHER_API_KEY;

    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=Manado&appid=${apiKey}&units=metric`
    );

    res.json(response.data);
  } catch (error) {
    console.error(error.message);

    res.status(500).json({
      message: "Gagal mengambil data cuaca",
    });
  }
};