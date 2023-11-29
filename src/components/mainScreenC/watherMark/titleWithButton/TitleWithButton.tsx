import { FC } from "react";
import style from "./TitleWithButton.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import ButtonArrow from "../../buttonArrow/ButtonArrow";
import { NavLink } from "react-router-dom";
import { ITitleLayoutData } from "../../boxMenu/boxMenuLayout/titleBoxMenu.data";

interface TitleWithButtonProps {
  data: ITitleLayoutData;
  //
  marginTop: string;
  color: string;
  fontSize: string;
}

const TitleWithButton: FC<TitleWithButtonProps> = ({
  data,
  //
  marginTop,
  color,
  fontSize,
}) => {
  return (
    <div>
      <NavLink to={data.link}>
        {data.text.map(text => (
          <h1 style={{ color: color, fontSize: fontSize }} className="col">
            {text}
          </h1>
        ))}
      </NavLink>
      <div
        style={{ marginTop: marginTop }}
        className={`col ${style.buttonArrowContainer}`}
      >
        <NavLink to={data.link}>
          <ButtonArrow color={color} text={"Learn more"} />
        </NavLink>
      </div>
    </div>
  );
};

export default TitleWithButton;
