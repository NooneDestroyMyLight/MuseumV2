import { FC } from "react";
import style from "./FAQSection.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import TextTitle from "../../mainScreenC/infoSection/textTitle/TextTitle";
import FAQSectionList from "./fAQSectionList/FAQSectionList";

export interface FAQSectionProps {}

const FAQSection: FC<FAQSectionProps> = ({}) => {
  return (
    <section className={`${style.fAQSection} ${style.section}`}>
      <div className={`container-fluid `}>
        <TextTitle
          title={["FAQ", "our clients"]}
          backText={"FAQ"}
          colorStyle="textTitleLightStyle"
        />
        <FAQSectionList />
      </div>
    </section>
  );
};

export default FAQSection;
