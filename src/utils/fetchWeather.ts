export interface WeatherData {
  temperature: number;
  windspeed: number;
  weathercode: number;
}

export async function fetchWeather(city: string): Promise<WeatherData | null> {
  try {
    // Step 1: Convert city name to coordinates (Open-Meteo Geocoding API)
    const geoRes = await fetch(
      `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}`
    );
    const geoData = await geoRes.json();

    if (!geoData.results || geoData.results.length === 0) {
      return null; // no city found
    }

    const { latitude, longitude } = geoData.results[0];

    // Step 2: Fetch weather for coordinates
    const weatherRes = await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current_weather=true`
    );
    const weatherData = await weatherRes.json();

    return weatherData.current_weather;
  } catch (err) {
    console.error("Error fetching weather:", err);
    return null;
  }
}
