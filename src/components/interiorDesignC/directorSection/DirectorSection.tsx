import { FC } from "react";
import style from "./DirectorSection.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import DirectorSectionDescription from "./directorSectionDescription/DirectorSectionDescription";
import { directorSectionDesription } from "./directorSectionDesription.data";
import Poster from "./poster/Poster";

interface DirectorSectionProps {
  styles: React.CSSProperties;
}

const DirectorSection: FC<DirectorSectionProps> = ({ styles }) => {
  return (
    <section style={styles} className={`${style.directorSection}`}>
      <div className={`container-fluid `}>
        <ul className={`row d-flex ${style.directorSection__container}`}>
          <li
            className={`col-6 p-0  ${style.directorSection__container__video}`}
          >
            <Poster />
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
