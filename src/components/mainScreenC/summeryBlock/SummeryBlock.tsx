import { FC } from "react";

import style from "./SummeryBlock.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
// import HouseIcon from "../../../assets/summeryBlockIcon/houseIcon";

export interface SummeryBlockProps {
  number?: number;
  title: string;
  discription: string;
  iconSrc: string;
}

const SummeryBlock: FC<SummeryBlockProps> = ({
  title,
  discription,
  iconSrc,
}) => {
  return (
    <div className={` d-flex flex-column ${style.summaryBlockContainer}`}>
      <img src={iconSrc} alt="summery-Icon" className={style.icon} />
      <strong className={style.title}>{title}</strong>
      <span className={style.discription}>{discription}</span>
    </div>
  );
};

export default SummeryBlock;
