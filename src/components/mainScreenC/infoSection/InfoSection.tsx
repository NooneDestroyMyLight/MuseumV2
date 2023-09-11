import { FC, ReactNode } from "react";
import style from "./InfoSection.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import TextTitle from "./textTitle/TextTitle";
import ButtonArrow from "../buttonArrow/ButtonArrow";

export interface InfoSectionProps {
  children?: ReactNode;
  title: string[];
  buttonText: string;
  backText: string;
}

const InfoSection: FC<InfoSectionProps> = ({
  title,
  buttonText,
  backText,
  children,
}) => {
  return (
    <section
      className={`container-fluid  d-flex flex-column   ${style.infoSection}`}
    >
      <TextTitle
        title={title}
        backText={backText}
        colorStyle="textTitleLightStyle"
      >
        <div className={`align-self-end ${style.infoSection__Button}`}>
          <ButtonArrow text={buttonText} color="black" />
        </div>
      </TextTitle>
      <div className={`col-auto d-flex  ${style.infoSection__Children}`}>
        {children && children}
      </div>
    </section>
  );
};

export default InfoSection;
