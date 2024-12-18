import { useState, useRef } from "react";
import { useTranslation } from "react-i18next";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import Button from "@/components/Button";
import Label from "@/components/Label";
import Input from "@/components/Input";
import { SunMedium } from "lucide-react";
import AuthService from "@/services/AuthService";

export default function Login() {
  const { t, i18n } = useTranslation();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });
  const { login, isLoading, message } = AuthService();
  const loginRef = useRef(null);

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

  useGSAP(() => {
    const mm = gsap.matchMedia();

    // Only desktop.
    mm.add("(min-width: 768px)", () => {
      gsap.from(loginRef.current,
        {
          opacity: 0,
          xPercent: -100,
          duration: .8,
          ease: "power3"
        }
      );
    });
  }, []);

  return (
    <div ref={loginRef} className="login">
      <div className="wrapper">
        <div className="icon">
          <SunMedium />
        </div>
        <h2>{t("pages.login.title")}</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="username">{t("forms.label.username")}</Label>
            <Input id="username" name="username" type="text" onChange={handleChange} required />
          </div>
          <div>
            <Label htmlFor="password">{t("forms.label.password")}</Label>
            <Input id="password" name="password" type="password" onChange={handleChange} required />
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
