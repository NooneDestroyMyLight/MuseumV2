import { FC } from "react";
import style from "./TitleWithButton.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import ButtonArrow from "../../buttonArrow/ButtonArrow";

interface TitleWithButtonProps {
  marginTop: string;
  titleText: string[];
  color: string;
  fontSize: string;
}

const TitleWithButton: FC<TitleWithButtonProps> = ({
  marginTop,
  titleText,
  color,
  fontSize,
}) => {
  return (
    <div>
      {titleText.map(text => (
        <h1 style={{ color: color, fontSize: fontSize }} className="col">
          {text}
        </h1>
      ))}
      <div
        style={{ marginTop: marginTop }}
        className={`col ${style.buttonArrowContainer}`}
      >
        <ButtonArrow color={color} text={"Learn more"} />
      </div>
    </div>
  );
};

export default TitleWithButton;
