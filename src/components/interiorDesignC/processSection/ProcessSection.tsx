import { FC } from "react";
import style from "./ProcessSection.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import TextTitle from "../../mainScreenC/infoSection/textTitle/TextTitle";
import ProcessSectionList from "./processSectionList/ProcessSectionList";
import { IProcessSectionData } from "./processSection.data";

export interface ProcessSectionProps {
  processSectionData: IProcessSectionData[];
}

const ProcessSection: FC<ProcessSectionProps> = ({ processSectionData }) => {
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
        <ProcessSectionList processSectionData={processSectionData} />
      </section>
    </div>
  );
};

export default ProcessSection;
