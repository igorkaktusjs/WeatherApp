import React from 'react';
import { TouchableOpacity, Text, StyleSheet, TouchableOpacityProps } from 'react-native';

interface Props extends TouchableOpacityProps {
  title: string;
  theme: typeof import('../theme/theme').lightTheme;
}

const PrimaryButton: React.FC<Props> = ({ title, theme, ...rest }) => {
  const styles = getStyles(theme);

  return (
    <TouchableOpacity style={styles.button} {...rest}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

const getStyles = (theme: typeof import('../theme/theme').lightTheme) =>
  StyleSheet.create({
    button: {
      backgroundColor: theme.primary,
      borderRadius: 8,
      paddingVertical: 14,
      paddingHorizontal: 20,
      alignItems: 'center',
      marginTop: 20,
      width: '90%',
      alignSelf: 'center',
    },
    text: {
      color: theme.buttonText,
      fontWeight: '600',
      fontSize: 16,
    },
  });

export default PrimaryButton;
