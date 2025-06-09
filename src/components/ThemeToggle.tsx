import React from 'react';
import {
  View,
  Text,
  Switch,
  StyleSheet,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { toggleTheme } from '../store/themeSlice';
import { useThemeMode } from '../hooks/useThemeMode';

interface Props {
  containerStyle?: ViewStyle;
  labelStyle?: TextStyle;
}

const ThemeToggle: React.FC<Props> = ({ containerStyle, labelStyle }) => {
  const dispatch = useDispatch<AppDispatch>();
  const isDark = useSelector((state: RootState) => state.theme.mode === 'dark');
  const theme = useThemeMode();
  const styles = getStyles();

  return (
    <View style={[styles.row, containerStyle]}>
      <Text style={[styles.label, { color: theme.textPrimary }, labelStyle]}>
        Dark Mode
      </Text>
      <Switch value={isDark} onValueChange={() => dispatch(toggleTheme())} />
    </View>
  );
};

const getStyles = () =>
  StyleSheet.create({
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '80%',
      marginBottom: 20,
      alignItems: 'center',
    },
    label: {
      fontSize: 16,
    },
  });

export default ThemeToggle;
