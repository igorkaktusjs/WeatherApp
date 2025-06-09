import { WeatherData } from '../types/weather';

const API_KEY = '621a0a1c19dbe12441ecb21fb28da18b';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeatherByCity = async (city: string): Promise<WeatherData> => {
  const response = await fetch(`${BASE_URL}?q=${city}&appid=${API_KEY}&units=metric&lang=en`);

  const data = await response.json();

  if (!response.ok) {
    const message =
      response.status === 404
        ? 'City not found. Please check the spelling.'
        : data.message || 'Failed to fetch weather data.';
    throw new Error(message);
  }

  return data;
};

export const getIconUrl = (icon: string): string =>
  `https://openweathermap.org/img/wn/${icon}@2x.png`;
