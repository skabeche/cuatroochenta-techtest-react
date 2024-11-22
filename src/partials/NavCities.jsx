import { useTranslation } from "react-i18next";
import Button from "@/components/Button";
import { SunMedium } from 'lucide-react';

export default function NavCities({ cities, isLoading = false, handleClick }) {
  const { t, i18n } = useTranslation();

  return (
    <nav className="nav-cities">
      <span><SunMedium size={20} strokeWidth={1.5} /> Cities</span>
      <ul>
        {cities.map((city) => (
          <li key={city}>
            <Button onClick={() => handleClick(city)} isLoading={isLoading}>
              {isLoading ? t("forms.button.loading") : city }
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
