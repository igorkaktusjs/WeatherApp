import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { lightTheme } from '../theme/theme';

interface InfoRowProps {
  label: string;
  value: string;
  theme: typeof lightTheme;
}

const InfoRow: React.FC<InfoRowProps> = ({ label, value, theme }) => {
  const styles = getStyles(theme);
  return (
    <View style={styles.row}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const getStyles = (theme: typeof lightTheme) =>
  StyleSheet.create({
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 4,
      paddingHorizontal: 10,
    },
    label: {
      fontSize: 16,
      color: theme.textSecondary,
    },
    value: {
      fontSize: 16,
      fontWeight: '500',
      color: theme.textPrimary,
    },
  });

export default InfoRow;
