import { FC, ReactNode } from "react";

import style from "./Button.module.scss";

import "bootstrap/dist/css/bootstrap.min.css";

interface ButtonProps {
  buttonText: string;
  styles: string;
}

const Button: FC<ButtonProps> = ({ buttonText, styles }) => {
  return <button className={style[styles]}>{buttonText}</button>;
};

export default Button;
