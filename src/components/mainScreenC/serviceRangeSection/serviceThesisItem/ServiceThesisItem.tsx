import { FC } from "react";

import style from "./ServiceThesisItem.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export interface ServiceThesisItemProps {
  order: number;
  title: string;
  //
  discriptionClassName: string;
  discription: string;
}

const ServiceThesisItem: FC<ServiceThesisItemProps> = ({
  order,
  title,
  //
  discriptionClassName,
  discription,
}) => {
  return (
    <ul className={`col p-0 d-flex ${style.serviceThesisItemContainer}`}>
      <li className={`justify-content-center ${style.orderNumber}`}>{order}</li>
      <li className={`d-flex flex-column ${style.discriptionContainer}`}>
        <strong className={style.title}>{title}</strong>
        <span className={style[discriptionClassName]}>{discription}</span>
      </li>
    </ul>
  );
};

export default ServiceThesisItem;
