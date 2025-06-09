import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface WeatherState {
  lastSearchedCity: string | null;
}

const initialState: WeatherState = {
  lastSearchedCity: null,
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    setLastSearchedCity: (state, action: PayloadAction<string | null>) => {
      state.lastSearchedCity = action.payload;
    },
  },
});

export const { setLastSearchedCity } = weatherSlice.actions;
export default weatherSlice.reducer;
