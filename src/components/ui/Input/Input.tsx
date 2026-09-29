import React from "react";
import styles from "./Input.module.css";

type InputVariant = "primary" | "secondary";
type InputSize = "small" | "medium" | "large";

interface InputProps {
  type?: "text" | "password" | "email";
  placeHolder?: string;
  lable?: string;
  variant?: InputVariant;
  size?: InputSize;
  disabled?: boolean;
  value?: string | number;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({
  type = "text",
  lable,
  size = "medium",
  variant = "primary",
  disabled = false,
  onChange,
  placeHolder,
}: InputProps) {
  return (
    <div className={styles.inputContainer}>
      {lable && (
        <label className={styles.lable}>
          {lable}
        </label>
      )}

      <input
        className={`${styles.input} ${styles[variant]} ${styles[size]}`}
        type={type}
        placeholder={placeHolder}
        disabled={disabled}
        onChange={onChange}
      />
    </div>
  );
}

export default Input;