import React, { useState } from "react";
import HourlyWeatherView from "./HourlyWeatherView";
import DailyWeatherView from "./DailyWeatherView";
import { Status, WeatherData } from "@/types";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { setActiveTab } from "@/redux/features/tabs";

const WeatherTabs: React.FC<{
  forecast: WeatherData;
  status: Status;
}> = ({ forecast, status }) => {
  type Tab = "hourly" | "weekly";
  const dispatch = useAppDispatch();
  const activeTab = useAppSelector((state) => state.activeTab);

  const handleTabChange = (tab: Tab) => {
    dispatch(setActiveTab(tab));
  };

  return (
    <div className="flex flex-col items-center py-4">
      <div className="flex space-x-4">
        <button
          className={`px-4 py-2 rounded-lg ${
            activeTab === "hourly"
              ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => handleTabChange("hourly")}
        >
          Hourly
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${
            activeTab === "weekly"
              ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
              : "bg-gray-200 text-gray-700"
          }`}
          onClick={() => handleTabChange("weekly")}
        >
          Weekly
        </button>
      </div>

      {status === "loading" ? (
        <div className="flex items-center justify-center">
          <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-purple-500"></div>
        </div>
      ) : (
        <div className="mt-4">
          {activeTab === "hourly" && (
            <HourlyWeatherView data={forecast?.hourly} />
          )}
          {activeTab === "weekly" && (
            <DailyWeatherView data={forecast?.daily} />
          )}
        </div>
      )}
    </div>
  );
};

export default WeatherTabs;
