export type Status = "idle" | "loading" | "error" | "success";
export type DailyWeatherCondition =
  | "Sunny"
  | "Rainy"
  | "Sunny-Rainy"
  | "Cloudy"
  | "Cloudy-Showers"
  | "Sunny-Cloudy-Showers";
export type WeatherData = {
  latitude: number;
  longitude: number;
  generationtime_ms: number;
  utc_offset_seconds: number;
  timezone: string;
  timezone_abbreviation: string;
  elevation: number;
  hourly_units: {
    time: string;
    temperature_2m: string;
    cloudcover: string;
    precipitation_probability: string;
    precipitation: string;
    rain: string;
    showers: string;
  };
  hourly: {
    time: string[];
    temperature_2m: number[];
    cloudcover: number[];
    precipitation_probability: number[];
    precipitation: number[];
    rain: number[];
    showers: number[];
  };
  daily_units: {
    time: string;
    temperature_2m_max: string;
    temperature_2m_min: string;
    precipitation_sum: string;
    uv_index_max: string;
    uv_index_clear_sky_max: string;
    rain_sum: string;
    precipitation_hours: string;
    precipitation_probability_max: string;
  };
  daily: {
    time: string[];
    temperature_2m_max: number[];
    temperature_2m_min: number[];
    precipitation_sum: number[];
    uv_index_max: number[];
    uv_index_clear_sky_max: number[];
    rain_sum: number[];
    precipitation_hours: number[];
    precipitation_probability_max: number[];
  };
};
