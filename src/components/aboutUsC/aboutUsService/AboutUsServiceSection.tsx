import { FC } from "react";
import style from "./AboutUsServiceSection.module.scss";
import { aboutUsServiceData } from "./aboutUsService.data";

export interface AboutUsServiceSectionProps {}

const AboutUsServiceSection: FC<AboutUsServiceSectionProps> = ({}) => {
  return (
    <div className={style.aboutUsInfoSection}>
      <section
        className={` container-fluid ${style.aboutUsInfoSection__container}  ${style.section}`}
      >
        <div className="row">
          <div className="col p-0">
            <div className={style.itemsList}>
              {aboutUsServiceData.map(item => (
                <div className={style.item}>
                  <img src={item.iconSrc} className={style.icon} />
                  <p className={style.boldItem}>{item.bold}</p>
                  <p>{item.descr}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUsServiceSection;
