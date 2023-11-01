import { FC } from "react";
import style from "./ButtonArrow.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import ArrowButtonIcon from "../../../assets/arrowButtonIcon/ArrowButtonIcon";

export interface ButtonArrowProps {
  text: string;
  color: string;
  isReverse?: boolean;
  buttonClassName?: string;
}

const ButtonArrow: FC<ButtonArrowProps> = ({
  text,
  color,
  isReverse,
  buttonClassName,
}) => {
  return (
    <div
      className={`row align-items-center d-flex flex-nowrap ${
        isReverse && style.reverse
      }`}
    >
      <button
        style={{ color: color }}
        className={`col-auto text-nowrap ${style.buttonArrow} ${
          style[buttonClassName as string]
        }`} //p-0
      >
        {text}
      </button>
      <div className={style.arrow}>
        <div className={`col-auto  ${style.arrowContainer}`}>
          <ArrowButtonIcon color={color} height="8" width="60" />
        </div>
      </div>
    </div>
  );
};

export default ButtonArrow;
