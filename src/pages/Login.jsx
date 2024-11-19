import Button from "@components/Button"
import Label from "@components/Label"

export default function Login() {

  return (
    <div className="login">
      <h1>Login</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      <form action="">
        <Label htmlFor="username">Username</Label>
        <input id="username" name="username" type="text" />
        <Label htmlFor="password">Password</Label>
        <input id="password" name="password" type="password" />
        <Button className="btn-primary">Login</Button>
      </form>
    </div>
  )
}
