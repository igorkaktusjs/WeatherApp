import React, { useState, useEffect } from 'react';
import {
  Text,
  SafeAreaView,
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Keyboard,
  Alert,
} from 'react-native';

import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { setLastSearchedCity } from '../../store/weatherSlice';

import { useWeather } from '../../hooks/useWeather';
import { useThemeMode } from '../../hooks/useThemeMode';

import WeatherCard from '../../components/WeatherCard';
import SearchInput from '../../components/SearchInput';
import PrimaryButton from '../../components/PrimaryButton';
import ThemeToggle from '../../components/ThemeToggle';

import { getStyles } from './styles';
import { STRINGS } from '../../constants/strings';

const HomeScreen: React.FC = () => {
  const [city, setCity] = useState('');
  const dispatch = useDispatch<AppDispatch>();

  const theme = useThemeMode();
  const styles = getStyles(theme);

  const { weatherData, loading, error, getWeather, getIconUrl } = useWeather();
  const lastSearchedCity = useSelector((state: RootState) => state.weather.lastSearchedCity);

  useEffect(() => {
    if (lastSearchedCity) {
      setCity(lastSearchedCity);
      getWeather(lastSearchedCity);
    }
  }, [lastSearchedCity, getWeather]);

  const handleFetchWeather = async () => {
    Keyboard.dismiss();

    const trimmedCity = city.trim();
    if (!trimmedCity) {
      Alert.alert(STRINGS.VALIDATION_ERROR_TITLE, STRINGS.VALIDATION_ERROR_MESSAGE);
      return;
    }

    await getWeather(trimmedCity);
    dispatch(setLastSearchedCity(trimmedCity));
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.keyboardAvoidingView}
      >
        <ScrollView contentContainerStyle={styles.scrollContent} keyboardShouldPersistTaps="handled">
          <Text style={styles.title}>{STRINGS.APP_TITLE}</Text>

          <ThemeToggle theme={theme} />

          <SearchInput
            value={city}
            onChangeText={setCity}
            onSubmitEditing={handleFetchWeather}
            placeholder={STRINGS.PLACEHOLDER_CITY}
            placeholderTextColor={theme.textSecondary}
          />

          <PrimaryButton theme={theme} title="Get Weather" onPress={handleFetchWeather} />

          {loading && <ActivityIndicator style={styles.loading} color={theme.primary} />}

          {error && <Text style={styles.error}>{error}</Text>}

          {weatherData && <WeatherCard data={weatherData} getIconUrl={getIconUrl} />}
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default HomeScreen;
