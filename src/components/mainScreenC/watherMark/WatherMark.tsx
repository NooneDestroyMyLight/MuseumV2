import { FC } from "react";
import style from "./WatherMark.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import ButtonArrow from "../buttonArrow/ButtonArrow";

interface WatherMarkProps {}

const WatherMark: FC<WatherMarkProps> = ({}) => {
  return (
    <div className={`row d-flex flex-column  ${style.waterMark}`}>
      <div>
        <h1 className={`col ${style.h1title}`}>
          Interior design <br /> Construction and renovation <br />
          Architectural design
        </h1>
        <div className={`col ${style.buttonArrowContainer}`}>
          <ButtonArrow color="white" text={"Connect us"} />
        </div>
      </div>
    </div>
  );
};

export default WatherMark;
