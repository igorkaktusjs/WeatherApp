
import { fetchWeatherByCity, getIconUrl } from './weather';

import 'jest-fetch-mock';

describe('weatherService', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('should fetch weather data successfully for a valid city', async () => {
    const mockWeatherData = {
      name: 'London',
      main: { temp: 15 },
      weather: [{ description: 'Cloudy', icon: '04d' }],
      coord: { lon: 0, lat: 0 },
      base: 'stations',
      visibility: 10000,
      wind: { speed: 5, deg: 100 },
      clouds: { all: 90 },
      dt: 1678886400,
      sys: { type: 1, id: 1, country: 'GB', sunrise: 1678886400, sunset: 1678886400 },
      timezone: 3600,
      id: 2643743,
      cod: 200,
    };

    fetchMock.mockResponseOnce(JSON.stringify(mockWeatherData), { status: 200 });

    const data = await fetchWeatherByCity('London');

    expect(data).toEqual(mockWeatherData);

    expect(fetchMock).toHaveBeenCalledWith(
      expect.stringContaining('q=London'),
      
    );
  });

  it('should throw an error if city is not found (404)', async () => {
    
    fetchMock.mockResponseOnce(JSON.stringify({ message: 'city not found' }), { status: 404 });

    
    await expect(fetchWeatherByCity('NonExistentCity')).rejects.toThrow(
      'City not found. Please check the spelling.'
    );
  });

  it('should throw a generic error for other API issues', async () => {
    
    fetchMock.mockResponseOnce(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });

    
    await expect(fetchWeatherByCity('London')).rejects.toThrow('Internal Server Error');
  });

  it('should generate the correct icon URL', () => {
    const iconCode = '01d';
    const expectedUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
    expect(getIconUrl(iconCode)).toBe(expectedUrl);
  });
});