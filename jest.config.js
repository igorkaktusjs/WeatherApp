// jest.config.js
module.exports = {
  preset: 'react-native',
  
  setupFiles: [
    
  ],
  
  setupFilesAfterEnv: [
    '<rootDir>/jest.setup.js', 
    '@testing-library/jest-native/extend-expect', 
  ],
  
  transformIgnorePatterns: [
    'node_modules/(?!(jest-)?react-native|@react-native(-community)?|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg|redux-persist|react-redux|@reduxjs|@react-native-async-storage)',
  ],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
};