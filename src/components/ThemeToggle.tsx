import React from 'react';
import { View, Text, Switch, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, AppDispatch } from '../store';
import { toggleTheme } from '../store/themeSlice';

const ThemeToggle = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isDark = useSelector((state: RootState) => state.theme.mode === 'dark');

  return (
    <View style={styles.row}>
      <Text style={[styles.label, { color: isDark ? '#fff' : '#000' }]}>Dark Mode</Text>
      <Switch value={isDark} onValueChange={() => dispatch(toggleTheme())} />
    </View>
  );
};

const styles = StyleSheet.create({
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
