import { WeatherData } from "../utils/fetchWeather";
import { getWeatherIcon } from "../utils/weatherIcons";

interface WeatherCardProps {
  city: string;
  weather: WeatherData;
}

export default function WeatherCard({ city, weather }: WeatherCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 text-center w-full max-w-sm">
      <h2 className="text-xl font-semibold mb-4">{city}</h2>

      <div className="text-6xl">{getWeatherIcon(weather.weathercode)}</div>

      <p className="text-5xl font-bold text-blue-600 mt-2">
        {weather.temperature}°C
      </p>
      <p className="mt-2 text-gray-600">💨 {weather.windspeed} km/h</p>
    </div>
  );
}
