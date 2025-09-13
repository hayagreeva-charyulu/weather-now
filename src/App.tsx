import { useState } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import { fetchWeather, WeatherData } from "./utils/fetchWeather";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const [error, setError] = useState("");
  const [isCelsius, setIsCelsius] = useState(true);

  const handleSearch = async (cityName: string) => {
    setError("");
    setWeather(null);
    setCity(cityName);

    const data = await fetchWeather(cityName);
    if (data) {
      setWeather(data);
    } else {
      setError("City not found. Try again.");
    }
  };

  const toggleUnit = () => {
    setIsCelsius(!isCelsius);
  };

  const displayTemp = weather
    ? isCelsius
      ? weather.temperature
      : (weather.temperature * 9) / 5 + 32
    : null;

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-100 to-blue-300 flex flex-col items-center">
      <h1 className="text-4xl font-bold text-blue-800 mt-8">🌦 Weather Now</h1>
      <SearchBar onSearch={handleSearch} />

      {error && <p className="text-red-600 mt-4">{error}</p>}

      {weather && (
        <>
          <button
            onClick={toggleUnit}
            className="bg-gray-800 text-white px-3 py-1 rounded-md mb-4 hover:bg-gray-900"
          >
            Toggle °C/°F
          </button>
          <WeatherCard city={city} weather={{ ...weather, temperature: displayTemp! }} />
        </>
      )}
    </div>
  );
}

export default App;
