import { useState } from "react"
import { useTranslation } from "react-i18next";
import Button from "@components/Button"
import Label from "@components/Label"
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
      <h1>{t("pages.login.title")}</h1>
      <p>{t("pages.login.text")}</p>
      <ul>
        <li>{t("forms.label.username")}: emilys</li>
        <li>{t("forms.label.password")}: emilyspass</li>
      </ul>
      <form onSubmit={handleSubmit}>
        <Label htmlFor="username">{t("forms.label.username")}</Label>
        <input id="username" name="username" type="text" />
        <Label htmlFor="password">{t("forms.label.password")}</Label>
        <input id="password" name="password" type="password" />
        <Button disabled={isLoading} className="btn-primary">
          {isLoading ? <LoaderIcon>Validating...</LoaderIcon> : t("forms.button.login")}
        </Button>
        <div className="message">{message}</div>
      </form>
    </div>
  )
}
