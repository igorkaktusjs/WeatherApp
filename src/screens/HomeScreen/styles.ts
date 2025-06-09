import { StyleSheet } from 'react-native';
import { lightTheme } from '../../theme/theme';

export const getStyles = (theme: typeof lightTheme) =>
  StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
    },
    keyboardAvoidingView: {
      flex: 1,
    },
    scrollContent: {
      alignItems: 'center',
      paddingTop: 40,
      paddingBottom: 20,
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
