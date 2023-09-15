import { FC } from "react";

import style from "./serviceRangeSection.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import TextTitle from "../infoSection/textTitle/TextTitle";

import ServiceThesisItem from "./serviceThesisItem/ServiceThesisItem";

import { IserviceThesisItemData } from "./serviceRange.data";

export interface SummeryBlockProps {
  data: IserviceThesisItemData[];
}

const ServiceRangeSection: FC<SummeryBlockProps> = ({ data }) => {
  return (
    <section className={style.ServiceRangeSectionContainer}>
      <div className={` p-0 container-fluid `}>
        <TextTitle
          title={["We build", `“turn-key” projects`]}
          backText={"service"}
          colorStyle="textTitleDarkStyle"
        />
        <div
          className={`row d-flex justify-content-between ${style.ServiceThesisItemsContainer}`}
        >
          {data.map((item, index) => (
            <ServiceThesisItem
              // key={item.discription}
              order={index + 1}
              title={item.title}
              discription={item.discription}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceRangeSection;
