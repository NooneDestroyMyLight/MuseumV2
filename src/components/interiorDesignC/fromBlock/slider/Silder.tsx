import { FC, ReactNode } from "react";
import style from "./Silder.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { sliderData } from "./slider.data";

export interface SilderProps {}

const Silder: FC<SilderProps> = ({}) => {
  return (
    <div className={`col-auto p-0 ${style.slider}`}>
      {sliderData.map(item => (
        <img src={item} alt="img" className={style.slider__Item} />
      ))}
    </div>
  );
};

export default Silder;
