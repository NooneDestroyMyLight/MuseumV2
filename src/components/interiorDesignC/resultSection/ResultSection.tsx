import { FC, ReactNode } from "react";

import style from "./ResultSection.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
//
import TextTitle from "../../mainScreenC/infoSection/textTitle/TextTitle";

export interface ResultSectionProps {
  children?: ReactNode;
  // title: string[];
  // backText: string;
}

const ResultSection: FC<ResultSectionProps> = ({
  // title,
  // backText,
  children,
}) => {
  return (
    <section className={`${style.resultSection} ${style.section}`}>
      <div
        className={`container-fluid  d-flex flex-column ${style.resultSection__container} `}
      >
        <TextTitle
          title={["We do not only design,", "we also bring it to life"]}
          backText={"result"}
          colorStyle="textTitleLightStyle"
        />
        <div>{children && children}</div>
      </div>
    </section>
  );
};

export default ResultSection;
