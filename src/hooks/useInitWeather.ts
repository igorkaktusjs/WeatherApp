import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../store';
import { useWeather } from './useWeather';

export const useInitWeather = (setCity: (val: string) => void) => {
  const lastSearchedCity = useSelector((state: RootState) => state.weather.lastSearchedCity);
  const { getWeather } = useWeather();

  useEffect(() => {
    if (lastSearchedCity) {
      setCity(lastSearchedCity);
      getWeather(lastSearchedCity);
    }
  }, [lastSearchedCity, getWeather, setCity]);
};
