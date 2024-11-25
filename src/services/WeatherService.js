import { useState } from "react";
import ApiAdapter from "@/adapters/apiAdapter";
import WeatherRepository from "@/repositories/WeatherRepository";

const apiAdapter = new ApiAdapter(import.meta.env.VITE_API_WEATHER_BASE_URL);
const weatherRepository = new WeatherRepository(apiAdapter);
const APP_KEY = import.meta.env.VITE_API_WEATHER_KEY;

export default function WeatherService() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState('');

  const fetchWeatherByCity = async (city, language, units = 'metric') => {
    let mappedData = {};
    setIsLoading(true);

    try {
      const response = await weatherRepository.getWeatherByCity(APP_KEY, city, language, units);

      if (!response.id) {
        throw new Error(`Error getting weather: ${response.statusText}`);
      }

      // Mapping data to the desired format.
      mappedData = {
        id: response.id,
        city: response.name,
        weather: {
          description: response.weather[0].description,
          icon: response.weather[0].icon,
        },
        main: {
          tempCurrent: response.main.temp,
          tempMin: response.main.temp_min,
          tempMax: response.main.temp_max,
        },
      };
    } catch (error) {
      // console.log(error.message);
      setMessage(error.message);
    } finally {
      setIsLoading(false);
    }

    return mappedData;
  };

  return { fetchWeatherByCity, isLoading, message };
};
