import { FC } from "react";

import style from "./Button.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

interface ButtonProps {
  buttonText: string;
  //
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
  styles: string;
  inLineStyle?: React.CSSProperties | undefined;
}

const Button: FC<ButtonProps> = ({
  buttonText,
  styles,
  onClick,
  inLineStyle,
}) => {
  return (
    <button
      style={inLineStyle}
      onClick={onClick}
      className={` ${style[styles]} .cursor`}
    >
      {buttonText}
    </button>
  );
};

export default Button;
