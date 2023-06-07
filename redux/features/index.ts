import { WeatherData } from "@/types";
import { createSlice } from "@reduxjs/toolkit";

const initialState: WeatherData = null as any;

const forecastSlice = createSlice({
  name: "forecast",
  initialState,
  reducers: {
    UpdateWeatherForecast: (state, action) => {
      return action.payload;
    },
  },
});
const forecastReducer = forecastSlice.reducer;
export const { UpdateWeatherForecast } = forecastSlice.actions;

export default forecastReducer;
