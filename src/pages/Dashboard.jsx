import { useState } from "react";
import Button from "@components/Button";
import { useGetWeatherByCity } from "@hooks/useGetWeatherByCity"

export default function Dashboard() {
  const [city, setCity] = useState('');
  const { weatherByCity, getWeatherByCity, loading, error } = useGetWeatherByCity(city);
  const cities = ['Belfast', 'London', 'Valencia'];

  const weatherType = (() => {
    if (weatherByCity?.temperature <= 10) return 'cold';
    if (weatherByCity?.temperature >= 25) return 'hot';
    return 'normal';
  })();

  const handleClick = (city) => {
    setCity(city);
  }

  const NavCities = () => {
    return (
      <nav className="cities">
        {cities.map((city) => (
          <Button key={city} onClick={() => handleClick(city)} className="btn-primary" processing={loading}>
            {loading && <span>Loading...</span>}
            {city}
          </Button>
        ))}
      </nav>
    )
  }

  return (
    <div className="page-dashboard">
      <header className={`${weatherType}`}>
        <div className="content">
          {city === '' ? (
            <h2>Please select a city</h2>
          ) : (
            <div className="weather">
              <div className="type">{weatherByCity?.type}</div>
              <div className="city">{weatherByCity?.city}</div>
              <div className="temperature">{weatherByCity?.temperature}º</div>
            </div>
          )}
        </div>
      </header>
      <div className="container">
        <h1>Dashboard</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <NavCities />
      </div>
    </div>
  )
}
