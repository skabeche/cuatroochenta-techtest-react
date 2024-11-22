import Button from "@/components/Button";
import { SunMedium } from 'lucide-react';

export default function NavCities({ cities, isLoading = false, handleClick }) {
  return (
    <nav className="nav-cities">
      <span><SunMedium size={20} strokeWidth={1.5} /> Cities</span>
      <ul>
        {cities.map((city) => (
          <li key={city}>
            <Button onClick={() => handleClick(city)} processing={isLoading}>
              {isLoading && <span>Loading...</span>}
              {city}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
