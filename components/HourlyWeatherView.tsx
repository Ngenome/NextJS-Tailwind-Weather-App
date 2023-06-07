import { WeatherData } from "@/types";
import React, { FC } from "react";
import { TiWeatherCloudy } from "react-icons/ti";
import dayjs from "dayjs";
interface HourlyWeatherCardProps {
  data: WeatherData["hourly"];
}
import { BiCloudRain, BiDroplet, BiSun, BiTime } from "react-icons/bi";
import { FaCloudShowersHeavy } from "react-icons/fa";
import { motion } from "framer-motion";
import { WiDaySunny, WiCloudy, WiRain, WiShowers } from "react-icons/wi";
import Image from "next/image";
import WeatherCardWrapper from "./WeatherCardWrapper";

interface WeatherIconProps {
  precipitation: number;
  precipitationProbability: number;
  rain: number;
  showers: number;
  cloudCover: number;
  isDay: boolean;
  temperature: number;
}

const WeatherIcon: FC<WeatherIconProps> = ({
  precipitation,
  precipitationProbability,
  rain,
  showers,
  cloudCover,
  temperature,
  isDay,
}) => {
  // Determine the weather conditions based on the provided data
  let weatherCondition;
  const img_classnames = `w-16 h-16 absolute -top-2 right-2`;

  if (cloudCover === 0) {
    return isDay ? (
      <img className={img_classnames} alt="sun" src="/sun.png" />
    ) : (
      <img className={img_classnames} alt="moon" src="/moon.png" />
    );
  }
  if (precipitation > 0 && cloudCover < 50) {
    return isDay ? (
      <img
        className={img_classnames}
        alt="sun-clouds"
        src="/sun-clouds-rain.png"
      />
    ) : (
      <img
        className={img_classnames}
        alt="moon-clouds"
        src="/moon-clouds-rain.png"
      />
    );
  } else if (cloudCover > 50 && precipitation < 0.5) {
    return isDay ? (
      <img className={img_classnames} alt="sun-clouds" src="/sun-clouds.png" />
    ) : (
      <img
        className={img_classnames}
        alt="moon-clouds"
        src="/moon-clouds.png"
      />
    );
  } else if (showers > 0) {
    return isDay ? (
      <img
        className={img_classnames}
        alt="sun-clouds"
        src="/sun-clouds-rain.png"
      />
    ) : (
      <img
        className={img_classnames}
        alt="moon-clouds"
        src="/moon-clouds-rain.png"
      />
    );
  } else {
    return isDay ? (
      <img className={img_classnames} alt="sun-clouds" src="/sun-clouds.png" />
    ) : (
      <img
        className={img_classnames}
        alt="moon-clouds"
        src="/moon-clouds.png"
      />
    );
  }
};
const HourlyWeatherCard: React.FC<{
  hourlyData: WeatherData["hourly"];
  index: number;
  time: string;
}> = ({ hourlyData, index, time }) => {
  const hourly = hourlyData;
  const icon_classnames = `bg-gradient-to-br from-blue-400 to-blue-800 text-white rounded-sm h-4 w-4 p-1 text-xl mt-1 mr-2`;
  return (
    <WeatherCardWrapper key={index} index={index}>
      <div className="flex items-center mb-2">
        <h3 className="text-lg font-semibold">
          {dayjs(time).format("h:mm A")}
        </h3>
      </div>
      <WeatherIcon
        isDay={
          Number(dayjs(time).format("HH")) > 6 &&
          Number(dayjs(time).format("HH")) < 18
        }
        precipitation={hourly?.precipitation[index]}
        precipitationProbability={hourly?.precipitation_probability[index]}
        rain={hourly?.rain[index]}
        showers={hourly?.showers[index]}
        cloudCover={hourly?.cloudcover[index]}
        temperature={hourly?.temperature_2m[index]}
      />
      <p className="flex items-center">
        <BiDroplet className={icon_classnames} />
        Precipitation: {hourly?.precipitation[index]}
      </p>
      <p className="flex items-center">
        <BiCloudRain className={icon_classnames} />
        Precipitation Probability: {hourly?.precipitation_probability[index]}
      </p>
      <p className="flex items-center">
        <BiCloudRain className={icon_classnames} />
        Rain: {hourly?.rain[index]}
      </p>
      <p className="flex items-center">
        <FaCloudShowersHeavy className={icon_classnames} />
        Showers: {hourly?.showers[index]}
      </p>
      <p className="flex items-center">
        <FaCloudShowersHeavy className={icon_classnames} />
        Cloud Cover: {hourly?.cloudcover[index]}
      </p>
      <p className="flex items-center">
        <BiSun className={icon_classnames} />
        Temperature: {hourly?.temperature_2m[index]}
      </p>
    </WeatherCardWrapper>
  );
};
const HourlyWeatherView: React.FC<HourlyWeatherCardProps> = ({ data }) => {
  const hourly = data;

  return (
    <div className="bg-transparent shadow-lg rounded-lg p-6">
      <h2 className="text-lg md:text-xl font-bold mb-4 text-white bg-blue-600 px-2 py-1 rounded-sm">
        Today's Hourly Weather
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {hourly?.time.slice(0, 24).map((time, index) => (
          <HourlyWeatherCard
            key={index}
            index={index}
            hourlyData={hourly}
            time={time}
          />
        ))}
      </div>
    </div>
  );
};

export default HourlyWeatherView;
