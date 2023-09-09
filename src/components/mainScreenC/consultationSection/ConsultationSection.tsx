import { FC, ReactNode } from "react";
import style from "./ConsultationSection.module.scss";

import "bootstrap/dist/css/bootstrap.min.css";
import TextTitle from "../infoSection/textTitle/TextTitle";

interface ConsultationSectionProps {
  children?: ReactNode;
}

const ConsultationSection: FC<ConsultationSectionProps> = ({ children }) => {
  return (
    <section className={style.consultationSection}>
      <div
        className={`container d-flex flex-column ${style.consultationSection__Container}`}
      >
        <div className={`row `}>
          <TextTitle
            title={[
              "Need a consultation?",
              "We will answer all your questions",
            ]}
            backText={"contact"}
            colorStyle="textTitleDarkStyle"
          ></TextTitle>
        </div>
        <div
          className={`row d-flex justify-content-between ${style.consultationSection__Children}`}
        >
          {children && children}
        </div>
      </div>
    </section>
  );
};

export default ConsultationSection;
