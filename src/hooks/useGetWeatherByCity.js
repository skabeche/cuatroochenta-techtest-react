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
        type: data.weather[0].main,
        temperature: data.main.temp,
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
