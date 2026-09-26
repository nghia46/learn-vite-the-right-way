import { useState } from "react";
import Button from "../Button";
import styles from "./LoginForm.module.css";
import { login } from "../../services/auth.service";
import Input from "../Input";
import loginCover from "../../assets/LoginCover.jpg";
import { GoogleLogin } from "@react-oauth/google";
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
      <div className={styles.container}>
        <img src={loginCover} alt="Login Cover" className={styles.coverImage} />
        <form className={styles.inputGroup} onSubmit={handleLogin}>
          <p className={styles.title}>Login</p>
          <Input
            type="text"
            placeHolder="Enter email"
            onChange={(e) =>
              setUserLogin({ ...userLogin, email: e.target.value })
            }
          />
          <Input
            type="password"
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
        </form>
      </div>
    </>
  );
}

export default LoginForm;
