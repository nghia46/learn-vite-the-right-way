import { useState } from "react";
import styles from "./RegisterForm.module.css";
import { Link } from "react-router-dom";
import { GoogleLogin } from "@react-oauth/google";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

type UserRegister = {
  username: string;
  email: string;
  password: string;
};

function RegisterForm() {
  const [userRegister, setUserRegister] = useState<UserRegister>({
    email: "",
    username: "",
    password: "",
  });
  
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Confirm password validation
    if (userRegister.password !== confirmPassword) {
      console.log("Password does not match");
      return;
    }

    console.log("Register data:", userRegister);
  };
  const handleConfirmPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <>
      <form className={styles.inputGroup} onSubmit={handleRegister}>
        <p className={styles.title}>Create an Account</p>

        <Input
          type="email"
          label="Email"
          size="large"
          placeHolder="Enter email"
          onChange={(e) =>
            setUserRegister({ ...userRegister, email: e.target.value })
          }
        />
        <Input
          type="text"
          label="Username"
          size="large"
          placeHolder="Enter username"
          onChange={(e) =>
            setUserRegister({ ...userRegister, username: e.target.value })
          }
        />
        <Input
          type="password"
          label="Password"
          size="large"
          placeHolder="Enter password"
          onChange={(e) =>
            setUserRegister({ ...userRegister, password: e.target.value })
          }
        />
        <Input
          type="password"
          label="Confirm Password"
          size="large"
          placeHolder="Enter confirm password"
          onChange={handleConfirmPassword}
        />

        <Button label="Register" type="submit"></Button>
        <p className={styles.or}>Or login with</p>
        <GoogleLogin
          onSuccess={(credentialResponse) => {
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log("Login Failed");
          }}
        />
        <p className={styles.loginLink}>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
      </form>
    </>
  );
}

export default RegisterForm;
