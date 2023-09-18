import { FC } from "react";

import style from "./ServiceThesisItem.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export interface ServiceThesisItemProps {
  order: number;
  title: string;
  discription: string;
}

const ServiceThesisItem: FC<ServiceThesisItemProps> = ({
  order,
  title,
  discription,
}) => {
  return (
    <div
      className={`col-12 p-0 col-md-3 d-flex ${style.serviceThesisItemContainer}`}
    >
      <div className={`justify-content-center ${style.orderNumber}`}>
        {order}
      </div>
      <div className={`d-flex flex-column ${style.discriptionContainer}`}>
        <strong className={style.title}>{title}</strong>
        <span className={style.discription}>{discription}</span>
      </div>
    </div>
  );
};

export default ServiceThesisItem;
