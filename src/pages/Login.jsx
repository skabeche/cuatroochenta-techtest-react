import { useState } from "react";
import { useTranslation } from "react-i18next";
import Button from "@/components/Button";
import Label from "@/components/Label";
import Input from "@/components/Input";
import { SunMedium } from "lucide-react";
import useAuth from "@/hooks/useAuth";

export default function Login() {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const { login, isLoading, message } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await login(formData.username, formData.password);
    } catch (error) {
      // console.log(error.message);
    }
  }

  return (
    <div className="login">
      <div className="wrapper">
        <div className="icon">
          <SunMedium />
        </div>
        <h2>{t("pages.login.title")}</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="username">{t("forms.label.username")}</Label>
            <Input id="username" name="username" type="text" handleChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="password">{t("forms.label.password")}</Label>
            <Input id="password" name="password" type="password" handleChange={handleChange} required />
          </div>
          <Button isLoading={isLoading} className="btn-primary">
            {isLoading ? t("forms.button.validating") : t("forms.button.login")}
          </Button>
          <div className="message">{message}</div>
        </form>
        <div className="help">
          <p>{t("pages.login.text")}</p>
          <ul>
            <li>{t("forms.label.username")}: emilys</li>
            <li>{t("forms.label.password")}: emilyspass</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
