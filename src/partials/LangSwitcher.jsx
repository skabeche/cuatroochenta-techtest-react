import { useTranslation } from "react-i18next";
import { supportedLngs } from "@/i18n";
import Select from "@/components/Select";

export default function LangSwitcher() {
  const { i18n } = useTranslation();
  const langs = Object.entries(supportedLngs);

  const handleChange = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="lang-switcher">
      <Select value={i18n.resolvedLanguage} onChange={handleChange} options={langs} />
    </div>
  );
}
