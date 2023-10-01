import { FC } from "react";
import style from "./ProcessSection.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import TextTitle from "../../mainScreenC/infoSection/textTitle/TextTitle";
import ProcessSectionList from "./processSectionList/ProcessSectionList";

export interface ProcessSectionProps {}

const ProcessSection: FC<ProcessSectionProps> = ({}) => {
  return (
    <div className={`${style.processSection} ${style.section}`}>
      <section
        className={`d-flex flex-column container-fluid ${style.processSection__container}`}
      >
        <TextTitle
          title={["How we", "are working"]}
          backText={"process"}
          colorStyle="textTitleDarkStyle"
        />
        <ProcessSectionList />
      </section>
    </div>
  );
};

export default ProcessSection;
