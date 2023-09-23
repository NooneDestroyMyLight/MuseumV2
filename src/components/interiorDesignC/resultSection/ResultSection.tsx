import { FC, ReactNode } from "react";

import style from "./ResultSection.module.scss";

import "bootstrap/dist/css/bootstrap.min.css";
import TextTitle from "../../mainScreenC/infoSection/textTitle/TextTitle";
import Button from "../../generalC/button/Button";

export interface ResultSectionProps {
  children?: ReactNode;
  buttonText: string;
  // title: string[];
  // backText: string;
}

const ResultSection: FC<ResultSectionProps> = ({
  // title,
  // backText,
  children,
  buttonText,
}) => {
  return (
    <section className={`${style.resultSection} ${style.section}`}>
      <div
        className={`container-fluid  d-flex flex-column ${style.resultSection__Container} `}
      >
        <TextTitle
          title={["We do not only design,", "we also bring it to life"]}
          backText={"result"}
          colorStyle="textTitleLightStyle"
        />
        <div className={`row ${style.row}`}>{children && children}</div>
        <div className="row">
          <div className={`col-auto p-0 ${style.button}`}>
            <Button
              buttonText={"More about construction"}
              styles={"resultSectionButton"}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultSection;
