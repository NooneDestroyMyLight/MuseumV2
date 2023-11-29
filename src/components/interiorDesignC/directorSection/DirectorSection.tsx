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
            <Poster
              className="directorSectionSize"
              imageSrc={
                "https://museum-interior.com/wp-content/uploads/2020/11/artur1.jpg"
              }
              videoSrc={
                "https://www.youtube.com/watch?v=AD2aftdD_fA&embeds_widget_referrer=https%3A%2F%2Fmuseum-interior.com%2Fes%2Finterior-design%2F&embeds_referring_origin=https%3A%2F%2Fmuseum-interior.com&feature=emb_yt_watermark"
              }
              buttonClassName="button__play__directorSection"
            />
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
