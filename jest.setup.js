// jest.setup.js

global.fetch = require('jest-fetch-mock');
fetch.enableMocks();

jest.mock('@react-native-async-storage/async-storage', () => ({
    // Make sure each method returns a Promise
    setItem: jest.fn(() => Promise.resolve()),
    getItem: jest.fn(() => Promise.resolve(null)), // Return null or a serialized string if you expect data
    removeItem: jest.fn(() => Promise.resolve()),
    clear: jest.fn(() => Promise.resolve()),
  }));
