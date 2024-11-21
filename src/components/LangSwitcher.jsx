import { useTranslation } from "react-i18next";
import { supportedLngs } from "@/i18n";

export default function LangSwitcher() {
  const { i18n } = useTranslation();

  const onChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="lang-switcher">
      <select
        value={i18n.resolvedLanguage}
        onChange={onChange}
      >
        {Object.entries(supportedLngs).map(([code, name]) => (
          <option value={code} key={code}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
}
