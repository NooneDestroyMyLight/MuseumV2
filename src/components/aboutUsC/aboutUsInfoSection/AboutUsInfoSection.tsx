import { FC } from "react";
import style from "./AboutUsInfoSection.module.scss";

import InfoSection from "../../mainScreenC/infoSection/InfoSection";
import { textBlockAboutUsPageData } from "../../mainScreenC/infoSection/textBlock/textBlock.data";

export interface AboutUsInfoSectionProps {}

const AboutUsInfoSection: FC<AboutUsInfoSectionProps> = ({}) => {
  return (
    <InfoSection
      title={["About our", "compony"]}
      backText="About"
      buttonText=""
    >
      <div className={style.itemsList}>
        {textBlockAboutUsPageData.map(item => (
          <div>
            {item.map(innerItem => (
              <p>{innerItem}</p>
            ))}
          </div>
        ))}
      </div>
      <div className={style.imgWithDescr}>
        <img
          src="https://museum-interior.com/wp-content/uploads/2020/11/xteam.jpg.pagespeed.ic.cyqP9eJ7zR.webp"
          alt="teamImg"
          className={style.img}
        />
        <p>
          We turn the wildest dreams into real projects. Bringing Pinterest
          images to life is easy with Museum Interior!
        </p>
      </div>
    </InfoSection>
  );
};

export default AboutUsInfoSection;
