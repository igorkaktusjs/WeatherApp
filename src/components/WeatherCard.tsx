import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { WeatherData } from '../types/weather';
import { useThemeMode } from '../hooks/useThemeMode';
import  InfoRow  from './InfoRow';

interface WeatherCardProps {
  data: WeatherData;
  getIconUrl: (icon: string) => string;
}

const WeatherCard: React.FC<WeatherCardProps> = ({ data, getIconUrl }) => {
  const theme = useThemeMode();
  const styles = getStyles(theme);

  const { name, sys, main, weather, wind, clouds, coord } = data;
  const condition = weather[0];

  return (
    <View style={styles.card}>
      <Text style={styles.city}>{name}, {sys.country}</Text>
      <Image source={{ uri: getIconUrl(condition.icon) }} style={styles.icon} />
      <Text style={styles.temp}>{Math.round(main.temp)}°C</Text>
      <Text style={styles.description}>{capitalize(condition.description)}</Text>

      <View style={styles.infoBlock}>
        <InfoRow label="Feels like:" value={`${Math.round(main.feels_like)}°C`} theme={theme} />
        <InfoRow label="Humidity:" value={`${main.humidity}%`} theme={theme} />
        <InfoRow label="Wind speed:" value={`${wind.speed} m/s`} theme={theme} />
        <InfoRow label="Cloudiness:" value={`${clouds.all}%`} theme={theme} />
        <InfoRow label="Coordinates:" value={`[${coord.lat}, ${coord.lon}]`} theme={theme} />
      </View>
    </View>
  );
};

const capitalize = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

const getStyles = (theme: typeof import('../theme/theme').lightTheme) =>
  StyleSheet.create({
    card: {
      marginTop: 30,
      alignItems: 'center',
      padding: 20,
      backgroundColor: theme.cardBackground,
      borderRadius: 16,
      width: '90%',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.1,
      shadowRadius: 6,
      elevation: 8,
    },
    city: {
      fontSize: 22,
      fontWeight: '700',
      color: theme.textPrimary,
      marginBottom: 6,
    },
    temp: {
      fontSize: 52,
      color: theme.primary,
      fontWeight: '300',
      marginVertical: 10,
    },
    icon: {
      width: 100,
      height: 100,
    },
    description: {
      fontSize: 18,
      color: theme.textSecondary,
      marginBottom: 12,
      textTransform: 'capitalize',
    },
    infoBlock: {
      width: '100%',
      marginTop: 10,
    },
  });

export default WeatherCard;
