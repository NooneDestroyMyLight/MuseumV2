import { FC } from "react";
import style from "./CompoundProjectSection.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { compoundProjectData } from "./compoundProjectSection.data";
import TextTitleWithArrowButton from "../../../HOC/textTitleWithArrowButton/TextTitleWithArrowButton";

interface CompoundProjectSectionProps {
  // compoundProjectData: string[][];
}

const CompoundProjectSection: FC<CompoundProjectSectionProps> = ({}) => {
  return (
    <div className={` ${style.compoundProject}`}>
      <ul
        className={`container-fluid d-flex flex-column ${style.section} ${style.compoundProject__container}`}
      >
        <TextTitleWithArrowButton
          backText={"what"}
          title={["Compound", "project"]}
          textTitleStyle={"textTitleCompoundProjectSection"}
          //
          buttonColor="black"
          buttonText="Our service"
          //
        />
        <li className={style.topic__block}>
          {compoundProjectData.map(item => (
            <div className={style.topic__block__list}>
              {item.map(inner => (
                <p className={style.topic__block__list__item}>{inner}</p>
              ))}
            </div>
          ))}
        </li>
      </ul>
    </div>
  );
};

export default CompoundProjectSection;
