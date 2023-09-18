import { FC } from "react";
import style from "./ProcessSectionList.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { processSectionData } from "../processSection.data";

import ProcessSectionItem from "./processSectionItems/ProcessSectionItem";

export interface ProcessSectionListProps {}

const ProcessSectionList: FC<ProcessSectionListProps> = () => {
  return (
    <ul className={`row  ${style.processSectionList}`}>
      {processSectionData.map(item => (
        <li className={`col-3 p-0 ${style.item}`}>
          <ProcessSectionItem
            label={item.label}
            icon={item.iconSrc}
            isWide={item.isWide && item.isWide}
          />
        </li>
      ))}
    </ul>
  );
};

export default ProcessSectionList;
