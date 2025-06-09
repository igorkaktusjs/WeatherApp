import React from 'react';
import {
  TextInput,
  StyleSheet,
  TextInputProps,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { useThemeMode } from '../hooks/useThemeMode';

interface Props extends TextInputProps {
  inputStyle?: TextStyle;
}

const SearchInput: React.FC<Props> = ({ inputStyle, ...props }) => {
  const theme = useThemeMode();
  const styles = getStyles(theme);

  return (
    <TextInput
      placeholderTextColor={theme.textSecondary}
      style={[styles.input, inputStyle]}
      {...props}
    />
  );
};

const getStyles = (theme: typeof import('../theme/theme').lightTheme) =>
  StyleSheet.create({
    input: {
      backgroundColor: theme.cardBackground,
      color: theme.textPrimary,
      borderRadius: 10,
      paddingHorizontal: 16,
      paddingVertical: 12,
      fontSize: 16,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 3 },
      shadowOpacity: 0.1,
      shadowRadius: 5,
      elevation: 6,
      width: '90%',
      alignSelf: 'center',
    },
  });

export default SearchInput;
