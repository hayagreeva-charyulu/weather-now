export function getWeatherIcon(code: number): string {
  const icons: { [key: number]: string } = {
    0: "☀️",   // Clear sky
    1: "🌤",   // Mainly clear
    2: "⛅",   // Partly cloudy
    3: "☁️",   // Overcast
    45: "🌫",  // Fog
    48: "🌫",  // Fog
    51: "🌦",  // Light drizzle
    61: "🌧",  // Rain
    71: "❄️",  // Snow
    95: "⛈",  // Thunderstorm
  };

  return icons[code] || "🌍"; // default
}
