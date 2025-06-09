export interface WeatherData {
    name: string;
    main: {
      temp: number;
      feels_like: number;
      humidity: number;
      pressure: number;
      temp_min: number;
      temp_max: number;
    };
    weather: Array<{
      id: number;
      main: string;
      description: string;
      icon: string;
    }>;
    wind: {
      speed: number;
      deg: number;
    };
    sys: {
      country: string;
      sunrise: number;
      sunset: number;
    };
    timezone: number;
    visibility: number;
    clouds: {
      all: number;
    };
    coord: {
      lon: number;
      lat: number;
    };
    base: string;
    cod: number;
    dt: number;
    id: number;
  }
  