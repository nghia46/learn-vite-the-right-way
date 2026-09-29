import { useState } from "react";
import styles from "./LoginForm.module.css";
import { GoogleLogin } from "@react-oauth/google";
import { Link } from "react-router-dom";
import { login } from "@/services/auth.service";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";
type UserLogin = {
  email: string;
  password: string;
};

function LoginForm() {
  const [userLogin, setUserLogin] = useState<UserLogin>({
    email: "",
    password: "",
  });
  const handleLogin = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const data = await login(userLogin);
      console.log("Login success: ", data);
    } catch (error) {
      console.error("Login failed: ", error);
    }
  };

  return (
    <>
      <form className={styles.inputGroup} onSubmit={handleLogin}>
        <p className={styles.title}>Login</p>
        <Input
          type="text"
          size="large"
          lable="Email"
          placeHolder="Enter email"
          onChange={(e) =>
            setUserLogin({ ...userLogin, email: e.target.value })
          }
        />
        <Input
          type="password"
          size="large"
          lable="Password"
          placeHolder="Enter password"
          onChange={(e) =>
            setUserLogin({ ...userLogin, password: e.target.value })
          }
        />
        <div className={styles.checkboxGroup}>
          <input type="checkbox"></input>
          <label>Remember Me</label>
        </div>

        <Button label="Login" type="submit"></Button>
        <p className={styles.or}>Or login with</p>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
        <p className={styles.registerLink}>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </form>
    </>
  );
}

export default LoginForm;
