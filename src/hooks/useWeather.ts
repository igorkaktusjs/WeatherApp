import { useState, useCallback } from 'react';
import { fetchWeatherByCity, getIconUrl } from '../api/weather';
import { WeatherData } from '../types/weather';

export const useWeather = () => {
  const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const getWeather = useCallback(async (city: string) => {
    setLoading(true);
    setError(null);
    try {
      const data = await fetchWeatherByCity(city);
      setWeatherData(data);
    } catch (err: any) {
      console.error('Weather fetch error:', err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    weatherData,
    loading,
    error,
    getWeather,
    getIconUrl,
  };
};
