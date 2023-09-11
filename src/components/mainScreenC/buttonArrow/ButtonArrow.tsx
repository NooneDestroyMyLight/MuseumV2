import { FC } from "react";
import style from "./ButtonArrow.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import ArrowButtonIcon from "../../../assets/arrowButtonIcon/ArrowButtonIcon";

interface ButtonArrowProps {
  text: string;
  color: string;
}

const ButtonArrow: FC<ButtonArrowProps> = ({ text, color }) => {
  return (
    <div className={"row align-items-center d-flex flex-nowrap "}>
      <button
        style={{ color: color }}
        className={`col-auto text-nowrap  ${style.buttonArrow}`} //p-0
      >
        {text}
      </button>
      <div className={`col-auto  ${style.arrowContainer}`}>
        <ArrowButtonIcon color={color} height="8" width="60" />
      </div>
    </div>
  );
};

export default ButtonArrow;
