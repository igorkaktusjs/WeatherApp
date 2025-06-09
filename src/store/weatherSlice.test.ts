// src/store/weatherSlice.test.ts
import weatherReducer, { setLastSearchedCity } from './weatherSlice'; 

describe('weatherSlice', () => {
  it('should set the last searched city correctly', () => {
    const initialState = {
      lastSearchedCity: null,
    };

    const expectedCity = 'London';
    const action = setLastSearchedCity(expectedCity);
    const state = weatherReducer(initialState, action);

    expect(state.lastSearchedCity).toEqual(expectedCity);
  });

  it('should set last searched city to null when payload is null', () => {
    const initialState = {
      lastSearchedCity: 'London',
    };

    const action = setLastSearchedCity(null);
    const state = weatherReducer(initialState, action);

    expect(state.lastSearchedCity).toBeNull();
  });

  it('should return the initial state if no action is provided', () => {
    const initialState = {
      lastSearchedCity: null,
    };
    const state = weatherReducer(initialState, { type: 'UNKNOWN_ACTION' });
    expect(state).toEqual(initialState);
  });
});