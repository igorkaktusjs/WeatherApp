import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  SafeAreaView,
  ActivityIndicator,
  StyleSheet,
  Keyboard,
  Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { setLastSearchedCity } from '../store/weatherSlice';
import { useWeather } from '../hooks/useWeather';
import { useThemeMode } from '../hooks/useThemeMode';

import WeatherCard from '../components/WeatherCard';
import SearchInput from '../components/SearchInput';
import PrimaryButton from '../components/PrimaryButton';
import ThemeToggle from '../components/ThemeToggle';

const HomeScreen: React.FC = () => {
  const [city, setCity] = useState('');
  const { weatherData, loading, error, getWeather, getIconUrl } = useWeather();
  const lastSearchedCity = useSelector((state: RootState) => state.weather.lastSearchedCity);
  const dispatch = useDispatch<AppDispatch>();

  const theme = useThemeMode(); // возвращает объект темы: { background, textPrimary, ... }

  useEffect(() => {
    if (lastSearchedCity) {
      setCity(lastSearchedCity);
      getWeather(lastSearchedCity);
    }
  }, [lastSearchedCity]);

  const handleFetchWeather = async () => {
    Keyboard.dismiss();

    if (!city.trim()) {
      Alert.alert('Validation error', 'Please enter a city name.');
      return;
    }

    await getWeather(city);
    dispatch(setLastSearchedCity(city));
  };

  const styles = getStyles(theme);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>Weather App</Text>

      <ThemeToggle theme={theme} />

      <SearchInput
        value={city}
        onChangeText={setCity}
        onSubmitEditing={handleFetchWeather}
        placeholder="Enter city"
        placeholderTextColor={theme.textSecondary}
      />

        <PrimaryButton theme={theme} title="Get Weather" onPress={handleFetchWeather} />


      {loading && (
        <ActivityIndicator style={styles.loading} color={theme.primary} />
      )}

      {error && <Text style={styles.error}>{error}</Text>}

      {weatherData && (
        <WeatherCard data={weatherData} getIconUrl={getIconUrl} />
      )}
    </SafeAreaView>
  );
};

const getStyles = (theme: typeof import('../theme/theme').lightTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      paddingTop: 40,
      backgroundColor: theme.background,
    },
    title: {
      fontSize: 28,
      fontWeight: 'bold',
      marginBottom: 20,
      color: theme.textPrimary,
    },
    loading: {
      marginTop: 20,
    },
    error: {
      color: 'red',
      marginTop: 10,
      fontSize: 16,
    },
  });

export default HomeScreen;
