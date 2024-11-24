import { useState, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useTranslation } from "react-i18next";
import Sidebar from "@/partials/Sidebar";
import NavCities from "@/partials/NavCities";
import LoaderOverlay from "@/components/LoaderOverlay";
import { useGetWeatherByCity } from "@/hooks/useGetWeatherByCity"

export default function Dashboard() {
  const { t, i18n } = useTranslation(['translation']);
  const [city, setCity] = useState('');
  const [ciyAnim, setCityAnim] = useState('');
  const weatherRef = useRef(null);
  const { weatherByCity, getWeatherByCity, isLoading, error } = useGetWeatherByCity(city);
  const cities = ['Belfast', 'Valencia', 'Doha', 'Reykjavik'];

  const weatherType = (() => {
    if (weatherByCity?.main?.tempCurrent <= 10) return 'cold';
    if (weatherByCity?.main?.tempCurrent >= 25) return 'hot';
    return 'normal';
  })();

  const handleClick = (city) => {
    setCityAnim(city);
  }

  useGSAP(() => {
    if (ciyAnim === '') return

    gsap.to(weatherRef.current,
      {
        opacity: 0,
        yPercent: 4,
        duration: .4,
        ease: "power3.out",
        onComplete: () => setCity(ciyAnim)
      },
    );
  }, [ciyAnim]);

  useGSAP(() => {
    if (weatherByCity === null) return

    gsap.to(weatherRef.current,
      {
        opacity: 1,
        yPercent: 0,
        duration: .4,
        ease: "power3.out",
      },
    );
  }, [weatherByCity]);

  return (
    <div className="dashboard">
      <Sidebar>
        <NavCities cities={cities} isLoading={isLoading} handleClick={handleClick} />
      </Sidebar>
      <section ref={weatherRef} className={`weather ${weatherType}`}>
        <div className="content">
          {city === '' ? (
            <p>{t("translation:pages.dashboard.text")}</p>
          ) : (
            <div className="info">
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
      </section>
      <LoaderOverlay isLoading={isLoading}>Loading weather</LoaderOverlay>
    </div>
  )
}
