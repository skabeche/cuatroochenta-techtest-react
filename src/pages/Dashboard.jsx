import { useState } from "react";
import Sidebar from "@/partials/Sidebar";
import NavCities from "@/partials/NavCities";
import WeatherWidget from "@/components/WeatherWidget";

export default function Dashboard() {
  const [city, setCity] = useState('');
  const cities = ['Belfast', 'Valencia', 'Doha', 'Reykjavik', 'Buenos Aires'];

  const handleClick = (city) => {
    setCity(city);
  }

  return (
    <div className="dashboard">
      <Sidebar>
        <NavCities cities={cities} handleClick={handleClick} />
      </Sidebar>
      <WeatherWidget city={city} />
    </div>
  )
}
