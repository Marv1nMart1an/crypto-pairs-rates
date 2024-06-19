import { useRef, InputHTMLAttributes, FC } from "react";
import styles from "./Input.module.scss";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  onChangeValue?: (value: string) => void;
}

export const Input: FC<InputProps> = ({ label, onChangeValue, ...props }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleChange = () => {
    if (inputRef.current) {
      const newValue = inputRef.current.value;
      if (onChangeValue) {
        onChangeValue(newValue);
      }
    }
  };

  return (
    <div className={props.className}>
      {label && <label className={styles.label}>{label}</label>}
      <input
        type="text"
        ref={inputRef}
        onChange={handleChange}
        {...props}
        className={styles.input}
      />
    </div>
  );
};

export default Input;
