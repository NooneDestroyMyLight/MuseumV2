import { FC } from "react";
import style from "./FAQSection.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import TextTitle from "../../mainScreenC/infoSection/textTitle/TextTitle";
import FAQSectionList from "./fAQSectionList/FAQSectionList";

import { IFAQSectionData } from "./fAQSection.data";
export interface FAQSectionProps {
  FAQSectionListData: IFAQSectionData[];
}

const FAQSection: FC<FAQSectionProps> = ({ FAQSectionListData }) => {
  return (
    <section className={`${style.fAQSection} ${style.section}`}>
      <div className={`container-fluid `}>
        <TextTitle
          title={["FAQ", "our clients"]}
          backText={"FAQ"}
          colorStyle="textTitleLightStyle"
        />
        <FAQSectionList FAQSectionListData={FAQSectionListData} />
      </div>
    </section>
  );
};

export default FAQSection;
