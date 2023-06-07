import { DailyWeatherCondition } from "@/types";

type SingleDayWeatherData = {
  precipitation_probability_max: number;
  precipitation_sum: number;
  uv_index_clear_sky_max: number;
};

function getWeatherCondition(
  data: SingleDayWeatherData
): DailyWeatherCondition {
  const {
    uv_index_clear_sky_max,
    precipitation_sum,
    precipitation_probability_max,
  } = data;

  const isSunny = uv_index_clear_sky_max > 4;
  const isRainy = precipitation_probability_max > 50 && precipitation_sum > 0;

  if (isSunny && !isRainy) {
    return "Sunny";
  } else if (isRainy && !isSunny) {
    return "Rainy";
  } else if (isSunny && isRainy) {
    return "Sunny-Rainy";
  } else if (!isSunny && !isRainy && precipitation_sum === 0) {
    return "Cloudy";
  } else if (!isSunny && !isRainy && precipitation_sum > 0) {
    return "Cloudy-Showers";
  } else if (isSunny && !isRainy && precipitation_sum > 0) {
    return "Sunny-Cloudy-Showers";
  }
  return "Sunny";
}

export default getWeatherCondition;
