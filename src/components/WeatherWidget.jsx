import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useTranslation } from "react-i18next";
import LoaderOverlay from "@/components/LoaderOverlay";
import WeatherService from "@/services/WeatherService";

export default function WeatherWidget({ city }) {
  const { t, i18n } = useTranslation(['translation']);
  const [cityAnim, setCityAnim] = useState('');
  const weatherRef = useRef(null);
  const [weatherByCity, setWeatherByCity] = useState('');
  const { fetchWeatherByCity, isLoading, message } = WeatherService();

  useEffect(() => {
    if (cityAnim === '') return

    const getWeatherByCity = async () => await fetchWeatherByCity(city, i18n.language);
    const weatherByCity = getWeatherByCity().then((weather) => {
      setWeatherByCity(weather);
    });

  }, [cityAnim, i18n.language]);

  const weatherCondition = (() => {
    if (weatherByCity?.main?.tempCurrent <= 0) return 'freezing';
    if (weatherByCity?.main?.tempCurrent <= 10) return 'cold';
    if (weatherByCity?.main?.tempCurrent >= 24) return 'hot';
    return 'normal';
  })();

  useGSAP(() => {
    if (city === '') return

    gsap.to(weatherRef.current,
      {
        opacity: 0,
        yPercent: 4,
        duration: .4,
        ease: "power3.out",
        onComplete: () => setCityAnim(city)
      },
    );
  }, [city]);

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
    <section ref={weatherRef} className={`weather-widget ${weatherCondition}`}>
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
              <div className="temperature-min">{t("widgets.weather.data.tempMin")} {weatherByCity?.main?.tempMin}º</div>
              <div className="temperature-max">{t("widgets.weather.data.tempMax")} {weatherByCity?.main?.tempMax}º</div>
            </div>
          </div>
        )}
      </div>
      <LoaderOverlay isLoading={isLoading}>{t("widgets.weather.loader")}</LoaderOverlay>
    </section>
  );
};
