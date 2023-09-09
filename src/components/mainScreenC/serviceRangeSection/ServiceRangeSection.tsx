import { FC } from "react";

import style from "./serviceRangeSection.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import TextTitle from "../infoSection/textTitle/TextTitle";
import SummeryBlock from "../summeryBlock/SummeryBlock";
import ServiceThesisItem from "./serviceThesisItem/ServiceThesisItem";

export interface SummeryBlockProps {}

const ServiceRangeSection: FC<SummeryBlockProps> = ({}) => {
  return (
    <section className={style.ServiceRangeSectionContainer}>
      <div className={`container `}>
        <TextTitle
          title={["We build", `“turn-key” projects`]}
          backText={"service"}
          buttonText={""}
          colorStyle="textTitleDarkStyle"
        />
        <div className={`row  ${style.ServiceThesisItemsContainer}`}>
          <ServiceThesisItem
            order={1}
            title="Concept and idea"
            discription="We develop the concept of the project and prepare planning solutions"
          />
          <ServiceThesisItem
            order={2}
            title="Design and project"
            discription="3D visualization of design, development of project documentation for renovation"
          />
          <ServiceThesisItem
            order={3}
            title="Renovation and equipment"
            discription="Performing all types of renovation work, furniture and decor instalation"
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceRangeSection;
