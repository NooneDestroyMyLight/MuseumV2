import { FC, ReactNode } from "react";
import style from "./input.module.scss";

import "bootstrap/dist/css/bootstrap.min.css";

interface InputProps {
  label: string;
}

const Input: FC<InputProps> = ({ label }) => {
  return (
    <div className={style.inputContainer}>
      <fieldset className={style.inputGroup}>
        <input className={style.input} placeholder=" " type="text" />
        <label className={style.inputLabel}>{label}</label>
      </fieldset>
    </div>
  );
};

export default Input;
