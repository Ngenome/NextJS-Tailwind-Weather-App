import ExampleForecast from "@/example/forecast";
import forecastReducer, { UpdateWeatherForecast } from "@/redux/features";
import { WeatherData } from "@/types";

describe("forecastSlice", () => {
  describe("reducer", () => {
    it("should update the weather forecast state", () => {
      const initialState: WeatherData = null as any;
      const weatherData: WeatherData = ExampleForecast;
      const nextState = forecastReducer(
        initialState,
        UpdateWeatherForecast(weatherData)
      );
      expect(nextState).toEqual(weatherData);
    });
  });
  describe("actions", () => {
    it("should create an action to update the weather forecast", () => {
      const weatherData: WeatherData = ExampleForecast;
      const expectedAction = {
        type: "forecast/UpdateWeatherForecast",
        payload: weatherData,
      };

      const action = UpdateWeatherForecast(weatherData);

      expect(action).toEqual(expectedAction);
    });
  });
});
