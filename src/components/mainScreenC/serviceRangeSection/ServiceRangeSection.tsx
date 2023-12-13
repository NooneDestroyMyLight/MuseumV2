import { FC } from "react";

import style from "./serviceRangeSection.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import TextTitle from "../infoSection/textTitle/TextTitle";

import ServiceThesisItem from "./serviceThesisItem/ServiceThesisItem";

import { IserviceThesisItemData } from "./serviceRange.data";

export interface SummeryBlockProps {
  data: IserviceThesisItemData[];
  //
  className: string;
  discriptionClassName: string;
}

const ServiceRangeSection: FC<SummeryBlockProps> = ({
  data,
  //
  className,
  discriptionClassName,
}) => {
  return (
    <section className={style.ServiceRangeSection}>
      <div className={` container-fluid `}>
        <TextTitle
          title={["We build", `“turn-key” projects`]}
          backText={"service"}
          colorStyle="textTitleDarkStyle"
        />
        <div
          className={`row justify-content-between ${style.ServiceThesisItemsContainer} ${style[className]}`}
        >
          {data.map((item, index) => (
            <ServiceThesisItem
              // key={item.discription}
              order={index + 1}
              title={item.title}
              //
              discriptionClassName={discriptionClassName}
              discription={item.discription}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceRangeSection;
