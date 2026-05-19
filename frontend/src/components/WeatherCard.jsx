import { useEffect, useState } from "react";
import { CloudSun } from "lucide-react";
import { getWeather } from "@/services/weatherService";

const WeatherCard = () => {
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    try {
      const data = await getWeather();
      setWeather(data);
    } catch (error) {
      console.log(error);
    }
  };

  if (!weather) {
    return (
      <div className="bg-stone-900 text-white p-6 text-center">
        Memuat cuaca...
      </div>
    );
  }

  return (
    <section className="bg-stone-950 px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 backdrop-blur-xl text-white flex flex-col md:flex-row items-center justify-between">
          
          <div>
            <p className="text-amber-400 uppercase tracking-[0.3em] font-semibold">
              Cuaca Hari Ini
            </p>

            <h2 className="text-4xl font-bold mt-4">
              {weather.name}
            </h2>

            <p className="text-zinc-400 mt-2">
              Cocok untuk Work From Cafe ☕
            </p>
          </div>

          <div className="flex items-center gap-6 mt-8 md:mt-0">
            <CloudSun
              size={70}
              className="text-amber-400"
            />

            <div>
              <h1 className="text-5xl font-bold">
                {Math.round(weather.main.temp)}°C
              </h1>

              <p className="text-zinc-400 capitalize mt-2">
                {weather.weather[0].description}
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WeatherCard;