import { useState } from "react"
import { useTranslation } from "react-i18next";
import { Logo } from "@/components/Logo";
import Button from "@/components/Button"
import Label from "@/components/Label"
import LoaderIcon from "@/components/LoaderIcon";
import useAuth from "@/hooks/useAuth";

export default function Login() {
  const { t, i18n } = useTranslation();
  const { login, isLoading } = useAuth();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setUsername("emilys");
    setPassword("emilyspass");

    try {
      await login(username, password);
    } catch (error) {
      console.log(error.message);
      setMessage(error.message);
    }
  }

  return (
    <div className="page-login">
      <div className="wrapper">
        <Logo />
        <h2>{t("pages.login.title")}</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <Label htmlFor="username">{t("forms.label.username")}</Label>
            <input id="username" name="username" type="text" />
          </div>
          <div>
            <Label htmlFor="password">{t("forms.label.password")}</Label>
            <input id="password" name="password" type="password" />
          </div>
          <Button disabled={isLoading} className="btn-primary">
            {isLoading ? <LoaderIcon>Validating...</LoaderIcon> : t("forms.button.login")}
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
