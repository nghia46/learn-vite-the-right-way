import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary" | "danger" | "success" | "warning";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  label: string;
  variant?: ButtonVariant;
  onClick?: () => void;
  disabled?: boolean;
}

export default function Button({
  type = "button",
  label,
  variant = "primary",
  onClick,
  disabled = false,
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
}