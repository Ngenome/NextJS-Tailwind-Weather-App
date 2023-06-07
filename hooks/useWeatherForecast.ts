"use client";
import React, { useEffect, useState } from "react";
import GooglePlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-google-places-autocomplete";
import { Status, WeatherData } from "@/types";
import axios, { AxiosError } from "axios";
import { useAppDispatch, useAppSelector } from "@/hooks/redux";
import { UpdateWeatherForecast } from "@/redux/features";
import { setError, setLoading, setSuccess } from "@/redux/features/status";
import {
  setAutocompleteLocation,
  setLocation,
} from "@/redux/features/location";
const useWeatherForecast = () => {
  const forecast = useAppSelector((state) => state.forecast);
  const dispatch = useAppDispatch();
  const setForecast = (data: WeatherData) => {
    dispatch(
      UpdateWeatherForecast({
        ...data,
      })
    );
  };
  const status = useAppSelector((state) => state.status);
  const combined_location = useAppSelector((state) => state.location);
  const autocompleteLocation = combined_location.autocompleteLocation;
  const location = combined_location.location;

  const updateAutocompleteLocation = (value: any) => {
    dispatch(setAutocompleteLocation(value));
  };

  const updateLocation = (value: any) => {
    dispatch(setLocation(value));
  };

  const fetchWeather = async () => {
    dispatch(setLoading());
    const { latitude, longitude } = location;
    const details =
      "&hourly=temperature_2m,cloudcover,precipitation_probability,precipitation,rain,showers&daily=temperature_2m_max,temperature_2m_min,precipitation_sum,uv_index_max,uv_index_clear_sky_max,rain_sum,precipitation_hours,precipitation_probability_max&timezone=Africa/Nairobi";
    try {
      const response = await axios.get(
        `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}${details}`
      );
      setForecast(response.data);
      dispatch(setSuccess());
    } catch (error: any) {
      dispatch(setError(error.message));
      console.error("Failed to fetch the day's weather", error);
    }
  };

  useEffect(() => {
    if (location.latitude && location.longitude) {
      fetchWeather();
    }
  }, [location]);

  const handleAutocompleteChange = (value: any) => {
    if (value) {
      updateAutocompleteLocation(value);
      geocodeByAddress(value?.label)
        .then((results) => getLatLng(results[0]))
        .then(({ lat, lng }) => {
          updateLocation({
            label: value?.label,
            latitude: lat,
            longitude: lng,
          });
        })
        .catch((error) => {
          console.error("Failed to get latitude and longitude", error);
          dispatch(setError(error.message));
        });
    }
  };

  const showWeatherSearchIllustration =
    !location.latitude && !location.longitude;

  return {
    forecast,
    status,
    showWeatherSearchIllustration,
    autocompleteLocation,
    handleAutocompleteChange,
  };
};
export default useWeatherForecast;
