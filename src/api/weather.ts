
import Config from 'react-native-config';
import { WeatherData } from '../types/weather';

const API_KEY = Config.OPENWEATHER_API_KEY;
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

if (!API_KEY) {
  throw new Error('API key is missing! Please add OPENWEATHER_API_KEY to your .env file.');
}

export const fetchWeatherByCity = async (city: string): Promise<WeatherData> => {
  try {
    const response = await fetch(
      `${BASE_URL}?q=${encodeURIComponent(city)}&appid=${API_KEY}&units=metric&lang=en`
    );

    const data = await response.json();

    if (!response.ok) {
      const message =
        response.status === 404
          ? 'City not found. Please check the spelling.'
          : data?.message || 'Failed to fetch weather data.';
      throw new Error(message);
    }

    return data as WeatherData;
  } catch (err: any) {
    console.error('fetchWeatherByCity error:', err.message);
    throw new Error(err.message || 'Network error while fetching weather data.');
  }
};

export const getIconUrl = (icon: string): string =>
  `https://openweathermap.org/img/wn/${icon}@2x.png`;
