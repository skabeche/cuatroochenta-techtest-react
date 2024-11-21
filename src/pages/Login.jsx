import { useState } from "react"
import Button from "@components/Button"
import Label from "@components/Label"
import LoaderIcon from "@/components/LoaderIcon";
import useAuth from "@/hooks/useAuth";

export default function Login() {
  const { login, isLoading } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEmail("emilys");
    setPassword("password");

    try {
      await login(email, password);
    } catch (error) {
      console.log(error.message);
      setMessage(error.message);
    }
  }

  return (
    <div className="page-login">
      <h1>Login</h1>
      <a href="/contact">Contact</a>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <form onSubmit={handleSubmit}>
        <Label htmlFor="email">Email</Label>
        <input id="email" name="email" type="text" />
        <Label htmlFor="password">Password</Label>
        <input id="password" name="password" type="password" />
        <Button disabled={isLoading} className="btn-primary">
          {isLoading ? <LoaderIcon>Validating...</LoaderIcon> : 'Login'}
        </Button>
        <div className="message">{message}</div>
      </form>
    </div>
  )
}
