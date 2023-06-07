const ExampleForecast = {
  latitude: 0.5,
  longitude: 35.375,
  generationtime_ms: 3.544926643371582,
  utc_offset_seconds: 10800,
  timezone: "Africa/Nairobi",
  timezone_abbreviation: "EAT",
  elevation: 2367.0,
  hourly_units: {
    time: "iso8601",
    temperature_2m: "°C",
    cloudcover: "%",
    precipitation_probability: "%",
    precipitation: "mm",
    rain: "mm",
    showers: "mm",
  },
  hourly: {
    time: ["2023-06-07T00:00", "2023-06-07T01:00"],
    temperature_2m: [
      14.5, 14.5, 14.5, 14.1, 13.1, 12.4, 12.2, 11.7, 14.2, 16.4, 17.9, 19.4,
      20.6, 21.6, 22.1, 21.9, 21.9, 21.3, 20.1, 17.8, 16.2, 15.0, 13.7, 12.9,
      12.9, 12.9, 13.1, 13.2, 13.2, 13.0, 12.8, 12.5, 14.7, 16.6, 17.9, 19.3,
    ],
    cloudcover: [
      84, 89, 78, 38, 10, 0, 0, 0, 0, 12, 27, 35, 42, 43, 61, 69, 59, 93, 44,
      46, 21, 0, 68, 59, 66, 62, 57, 53, 43, 32, 35, 24, 0, 48, 54, 39, 52, 53,

      100, 97, 95,
    ],
    precipitation_probability: [
      3, 4, 5, 6, 4, 2, 0, 0, 0, 0, 0, 0, 0, 6, 13, 19, 22, 26, 29, 20, 12, 3,

      81,
    ],
    precipitation: [
      0.1, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    ],
    rain: [
      0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    ],
    showers: [
      0.1, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
    ],
  },
  daily_units: {
    time: "iso8601",
    temperature_2m_max: "°C",
    temperature_2m_min: "°C",
    precipitation_sum: "mm",
    uv_index_max: "",
    uv_index_clear_sky_max: "",
    rain_sum: "mm",
    precipitation_hours: "h",
    precipitation_probability_max: "%",
  },
  daily: {
    time: [
      "2023-06-07",
      "2023-06-08",
      "2023-06-09",
      "2023-06-10",
      "2023-06-11",
      "2023-06-12",
      "2023-06-13",
    ],
    temperature_2m_max: [22.1, 22.1, 22.0, 22.3, 19.9, 20.7, 18.0],
    temperature_2m_min: [11.7, 12.5, 13.4, 11.7, 13.1, 12.9, 12.1],
    precipitation_sum: [0.1, 0.0, 0.0, 8.8, 14.7, 3.3, 12.8],
    uv_index_max: [8.7, 8.7, 8.7, 8.6, 8.65, 5.7, 4.85],
    uv_index_clear_sky_max: [8.7, 8.7, 8.7, 8.7, 8.7, 8.15, 8.15],
    rain_sum: [0.0, 0.0, 0.0, 0.7, 0.0, 0.0, 1.2],
    precipitation_hours: [1.0, 0.0, 0.0, 6.0, 18.0, 12.0, 18.0],
    precipitation_probability_max: [29, 26, 10, 13, 77, 90, 97],
  },
};
export default ExampleForecast;
