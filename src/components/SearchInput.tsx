import React from 'react';
import { TextInput, StyleSheet, TextInputProps } from 'react-native';
import { useThemeMode } from '../hooks/useThemeMode';

const SearchInput: React.FC<TextInputProps> = props => {
  const theme = useThemeMode();
  const styles = getStyles(theme);

  return (
    <TextInput
      placeholderTextColor={theme.textSecondary}
      style={styles.input}
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
