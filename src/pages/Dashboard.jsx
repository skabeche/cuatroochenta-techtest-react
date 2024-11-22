import { useState } from "react";
import { useTranslation } from "react-i18next";
import Sidebar from "@/partials/Sidebar";
import NavCities from "@/partials/NavCities";
import { useGetWeatherByCity } from "@/hooks/useGetWeatherByCity"

export default function Dashboard() {
  const { t, i18n } = useTranslation(['translation']);
  const [city, setCity] = useState('');
  const { weatherByCity, getWeatherByCity, isLoading, error } = useGetWeatherByCity(city);
  const cities = ['Belfast', 'Valencia', 'Doha', 'Reykjavik'];

  const weatherType = (() => {
    if (weatherByCity?.main?.tempCurrent <= 10) return 'cold';
    if (weatherByCity?.main?.tempCurrent >= 25) return 'hot';
    return 'normal';
  })();

  const handleClick = (city) => {
    setCity(city);
  }

  return (
    <div className="page-dashboard">
      <Sidebar>
        <NavCities cities={cities} isLoading={isLoading} handleClick={handleClick} />
      </Sidebar>
      <section className={`${weatherType}`}>
        <div className="content">
          {city === '' ? (
            <p>{t("translation:pages.dashboard.text")}</p>
          ) : (
            <div className="weather">
              <div className="icon">
                <img src={`http://openweathermap.org/img/wn/${weatherByCity?.weather?.icon}@4x.png`} alt={weatherByCity?.weather?.description} />
              </div>
              <div className="description">{weatherByCity?.weather?.description}</div>
              <div className="city">{weatherByCity?.city}</div>
              <div className="temperature-current">{weatherByCity?.main?.tempCurrent}º</div>
              <div className="temperature-range">
                <div className="temperature-min">{t("widgets.weather.tempMin")} {weatherByCity?.main?.tempMin}º</div>
                <div className="temperature-max">{t("widgets.weather.tempMax")} {weatherByCity?.main?.tempMax}º</div>
              </div>
            </div>
          )}
        </div>
      </section >
    </div >
  )
}
