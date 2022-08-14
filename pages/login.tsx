import Button from "../components/button";
import { login, logout } from "../lib/auth";

const LoginPage = () => {
  return (
    <div>
      <h1>Login</h1>
      <Button onClick={login}>Login</Button>
      <Button onClick={logout}>Logout</Button>
    </div>
  );
};

export default LoginPage;
