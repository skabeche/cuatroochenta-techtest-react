import { useEffect, useState } from 'react'
// import apiWeatherResults from '../mockups/api-weather-results.json'

export function useGetWeatherByCity(city = '') {
  const [weatherByCity, setWeatherByCity] = useState(null)
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (city === '') return

    getWeatherByCity();
  }, [city])

  const getWeatherByCity = async () => {
    console.log(city)
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}?q=${city}&units=metric&appid=${import.meta.env.VITE_API_KEY}`);
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      const data = await response.json();
      const mappedData = {
        id: data.id,
        city: data.name,
        weather: {
          description: data.weather[0].description,
          icon: data.weather[0].icon,
        },
        main: {
          tempCurrent: data.main.temp,
          tempMin: data.main.temp_min,
          tempMax: data.main.temp_max,
        },
      };
      setWeatherByCity(mappedData)
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  return { weatherByCity: weatherByCity, getWeatherByCity, loading, error };
}
