import { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "@components/Button";
import Sidebar from "@/components/Sidebar";
import { useGetWeatherByCity } from "@hooks/useGetWeatherByCity"

export default function Dashboard() {
  const { t, i18n } = useTranslation(['translation']);
  const [city, setCity] = useState('');
  const { weatherByCity, getWeatherByCity, isLoading, error } = useGetWeatherByCity(city);
  const cities = ['Belfast', 'London', 'Valencia'];

  const weatherType = (() => {
    if (weatherByCity?.main?.tempCurrent <= 10) return 'cold';
    if (weatherByCity?.main?.tempCurrent >= 25) return 'hot';
    return 'normal';
  })();

  const handleClick = (city) => {
    setCity(city);
  }

  const NavCities = () => {
    return (
      <nav className="cities">
        {cities.map((city) => (
          <Button key={city} onClick={() => handleClick(city)} className="btn-primary" processing={isLoading}>
            {isLoading && <span>Loading...</span>}
            {city}
          </Button>
        ))}
      </nav>
    )
  }

  return (
    <div className="page-dashboard">
      <Sidebar><NavCities /></Sidebar>
      <section className={`${weatherType}`}>
        <div className="content">
          {city === '' ? (
            <h2>{t("translation:pages.dashboard.text")}</h2>
          ) : (
            <div className="weather">
              <div className="icon">
                <img src={`http://openweathermap.org/img/wn/${weatherByCity?.weather?.icon}@2x.png`} alt={weatherByCity?.weather?.description} />
              </div>
              <div className="description">{weatherByCity?.weather?.description}</div>
              <div className="city">{weatherByCity?.city}</div>
              <div className="temperature-current">{weatherByCity?.main?.tempCurrent}º</div>
              <div className="temperature-range">
                <div className="temperature-min">Min. {weatherByCity?.main?.tempMin}º</div>
                <div className="temperature-max">Max. {weatherByCity?.main?.tempMax}º</div>
              </div>
            </div>
          )}
        </div>
      </section >
    </div >
  )
}
