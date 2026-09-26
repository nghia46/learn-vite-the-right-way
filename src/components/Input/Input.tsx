import React from "react";
import styles from "./Input.module.css";
interface InputPros {
  type?: "text" | "password" | "email";
  placeHolder?: string;
  disabled?: boolean;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({
  type = "text",
  disabled = false,
  onChange,
  placeHolder,
}: InputPros) {
  return (
    <input className={styles.input}
      type={type}
      placeholder={placeHolder}
      disabled={disabled}
      onChange={onChange}
    />
  );
}
export default Input;
