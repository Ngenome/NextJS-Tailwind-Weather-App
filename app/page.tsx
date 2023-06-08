"use client";

import React from "react";
import GooglePlacesAutocomplete from "react-google-places-autocomplete";
import WeatherTabs from "@/components/WeatherTabs";
import useWeatherForecast from "@/hooks/useWeatherForecast";

const GOOGLE_API_KEY = process.env.NEXT_PUBLIC_MAPS_API_KEY;

const Home: React.FC = () => {
  const {
    autocompleteLocation,
    forecast,
    handleAutocompleteChange,
    showWeatherSearchIllustration,
    status,
  } = useWeatherForecast();

  return (
    <main className="min-h-screen items-center  w-screen overflow-hidden relative">
      <div className="w-screen bg-gradient-to-r from-gray-100 to-white bg-opacity-80 backdrop-blur-sm fixed z-10 top-0 items-center flex flex-col">
        <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-950 to-blue-500">
          Weather App
        </h1>
        <p className="text-sm">
          Made by{" "}
          <a
            href="https://ngeno-kelvin.vercel.app"
            target="_blank"
            className="bg-clip-text text-underline text-transparent bg-gradient-to-r from-blue-950 to-blue-500"
          >
            Kelvin Ng&apos;eno
          </a>
        </p>
      </div>
      <div className="flex w-screen overflow-hidden flex-col items-center justify-between p-24">
        <div className="flex flex-col w-screen px-2 items-center justify-center">
          {GOOGLE_API_KEY && (
            <GooglePlacesAutocomplete
              apiKey={GOOGLE_API_KEY}
              apiOptions={{ language: "en", region: "ke" }}
              autocompletionRequest={{}}
              selectProps={{
                placeholder: "Enter a location to view its  forecast",
                className: "w-full md:w-96",
                value: autocompleteLocation,
                onChange: handleAutocompleteChange,
              }}
            />
          )}
          {status.status === "error" ? (
            <div className="flex flex-col items-center justify-center bg-gradient-br from-white to-transparent border-gray-200 backdrop-blur-none">
              <p className="text-red-500 text-center">{status?.error}</p>
            </div>
          ) : null}
          <WeatherTabs forecast={forecast} status={status.status} />
        </div>
      </div>
    </main>
  );
};

export default Home;
