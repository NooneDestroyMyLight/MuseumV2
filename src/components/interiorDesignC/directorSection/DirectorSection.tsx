import { FC } from "react";
import style from "./DirectorSection.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import DirectorSectionDescription from "./directorSectionDescription/DirectorSectionDescription";
import { directorSectionDesription } from "./directorSectionDesription.data";

import Video from "./video/Video";

interface DirectorSectionProps {
  paddingTop: string;
}

const DirectorSection: FC<DirectorSectionProps> = ({ paddingTop }) => {
  return (
    <section
      style={{ paddingTop: paddingTop }}
      className={`${style.directorSection}`}
    >
      <div className={`container-fluid `}>
        <ul className={`row d-flex ${style.directorSection__Container}`}>
          <li className={`col-auto p-0 `}>
            <Video width={"564px"} height={"571px"} />
          </li>
          <li
            className={`col-6 p-0 align-self-center ${style.DirectorSectionDescriptionCol}`}
          >
            <DirectorSectionDescription text={directorSectionDesription} />
          </li>
        </ul>
      </div>
    </section>
  );
};

export default DirectorSection;
