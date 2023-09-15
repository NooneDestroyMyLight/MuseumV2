import { FC, ReactNode } from "react";
import style from "./input.module.scss";

import "bootstrap/dist/css/bootstrap.min.css";

interface InputProps {
  label: string;
  StylesClass: string;
}

const Input: FC<InputProps> = ({ label, StylesClass }) => {
  return (
    <div className={style[StylesClass]}>
      <fieldset className={style.inputGroup}>
        <input className={style.input} placeholder=" " type="text" />
        <label className={style.inputLabel}>{label}</label>
      </fieldset>
    </div>
  );
};

export default Input;
