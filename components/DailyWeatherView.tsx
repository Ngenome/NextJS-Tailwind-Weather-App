import React from "react";
import { BiDroplet, BiCloudRain, BiSun } from "react-icons/bi";
import { FaCloudShowersHeavy } from "react-icons/fa";
import dayjs from "dayjs";
import { WeatherData } from "@/types";
import { FC } from "react";
import getWeatherCondition from "@/helpers/getWeatherCondition";
import WeatherCardWrapper from "./WeatherCardWrapper";
interface DailyWeatherCardProps {
  data: WeatherData["daily"];
}

type WeatherIconProps = {
  precipitationProbability: number;
  uvIndexClearSkyMax: number;
  precipitationSum: number;
};
//  A component to render the weather icon based on the weather condition

const WeatherIcon: FC<WeatherIconProps> = ({
  precipitationProbability,
  uvIndexClearSkyMax,
  precipitationSum,
}) => {
  // Determine the weather condition based on the provided data

  const weatherCondition = getWeatherCondition({
    precipitation_probability_max: precipitationProbability,
    precipitation_sum: precipitationSum,
    uv_index_clear_sky_max: uvIndexClearSkyMax,
  });
  const img_classnames = `w-16 h-16 absolute -top-2 right-2`;

  if (weatherCondition === "Sunny") {
    return <img className={img_classnames} alt="sun" src="/sun.png" />;
  } else if (weatherCondition === "Sunny-Rainy") {
    return (
      <img className={img_classnames} alt="sun-rain" src="/sunny_rain.png" />
    );
  } else if (weatherCondition === "Rainy") {
    return <img className={img_classnames} alt="cloud-rain" src="/Rainy.png" />;
  } else if (weatherCondition === "Cloudy") {
    return <img className={img_classnames} alt="cloud" src="/clouds.png" />;
  } else if (weatherCondition === "Sunny-Cloudy-Showers") {
    return (
      <img
        className={img_classnames}
        alt="cloud-rain"
        src="/sunny-showers.png"
      />
    );
  } else if (weatherCondition === "Cloudy-Showers") {
    return (
      <img className={img_classnames} alt="cloud-rain" src="/showers.png" />
    );
  }
  return <img className={img_classnames} alt="default" src="/sun-clouds.png" />;
};

const DailyWeatherCard: React.FC<{
  daily: WeatherData["daily"];
  index: number;
  time: string;
}> = ({ daily, index, time }) => {
  const icon_classnames = `bg-gradient-to-br from-blue-400 to-blue-800 text-white rounded-sm h-4 w-4 p-1 text-xl mt-1 mr-2`;

  return (
    <WeatherCardWrapper key={index} index={index}>
      <WeatherIcon
        precipitationProbability={daily.precipitation_probability_max[index]}
        uvIndexClearSkyMax={daily.uv_index_clear_sky_max[index]}
        precipitationSum={daily.precipitation_sum[index]}
      />
      <div className="flex items-center mb-2">
        <h3 className="text-lg font-semibold">{dayjs(time).format("dddd")}</h3>
      </div>
      <p className="flex items-center">
        <BiDroplet className={icon_classnames} />
        Precipitation: {daily?.precipitation_sum[index]}
      </p>
      <p className="flex items-center">
        <BiCloudRain className={icon_classnames} />
        Precipitation Probability: {daily?.precipitation_probability_max[index]}
      </p>
      <p className="flex items-center">
        <FaCloudShowersHeavy className={icon_classnames} />
        Showers: {daily?.precipitation_hours[index]}
      </p>
      <p className="flex items-center">
        <FaCloudShowersHeavy className={icon_classnames} />
        Cloud Cover: {daily?.uv_index_max[index]}
      </p>
      <p className="flex items-center">
        <BiSun className={icon_classnames} />
        Temperature Max: {daily?.temperature_2m_max[index]}
      </p>
      <p className="flex items-center">
        <BiSun className={icon_classnames} />
        Temperature Min: {daily?.temperature_2m_min[index]}
      </p>

      <p className="flex items-center">
        <BiSun className={icon_classnames} />
        UV Index: {daily?.uv_index_clear_sky_max[index]}
      </p>
    </WeatherCardWrapper>
  );
};
const DailyWeatherView: React.FC<DailyWeatherCardProps> = ({ data }) => {
  const daily = data;

  return (
    <div className="bg-transparent shadow-lg rounded-lg p-6">
      <h2 className="text-lg md:text-xl font-bold mb-4 text-white bg-gradient-to-r from-blue-500 to-blue-800 px-2 py-1 rounded-sm">
        The Forecast for the next 5 days
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {daily?.time.slice(0, 6).map((time, index) => (
          <DailyWeatherCard
            time={time}
            key={index}
            index={index}
            daily={daily}
          />
        ))}
      </div>
    </div>
  );
};

export default DailyWeatherView;
