import { FC } from "react";
import style from "./AboutUsMainScreenSection.module.scss";

import Button from "../../generalC/button/Button";
import IntroVideo from "../../mainScreenC/introVideo/IntroVideo";
import Header from "../../layout/header/Header";
import { useSticky } from "../../../hooks/useSticky";

import { IAboutUsMainScreenSectionData } from "./aboutUsMainScreenSection.data";
import ButtonArrow from "../../mainScreenC/buttonArrow/ButtonArrow";
//
import ModelWindow from "../../../HOC/modelWindow/ModelWindow";
import Video from "../../generalC/video/Video";
import { useToggle } from "../../../hooks/useToggle";

export interface AboutUsMainScreenSectionProps
  extends IAboutUsMainScreenSectionData {}

const AboutUsMainScreenSection: FC<AboutUsMainScreenSectionProps> = ({
  title,
  description,
}) => {
  const [isSticky, elRef] = useSticky(false);
  const [isMWOpen, toggleMW] = useToggle(false);
  return (
    <section className={style.aboutUsMainScreenSection}>
      <li ref={elRef} className={style.stickyScreen} />
      <Header
        HeaderNavDropdownIsStickyStyle={"stickydHeaderNavItem"}
        HeaderNavDropdownNotStickyStyle={"headerNavItem"}
        //
        notStickedMobileBackground={"black"}
        isStickyMobileBackground={"white"}
        //
        isSticky={isSticky}
        //
        textColor={"white"}
        isStickyTextColor={"black"}
      />
      <IntroVideo
        videoSrc={
          "https://museum-interior.com/wp-content/themes/inten/assets/videos/PAGE-ABOUT/VIDEO_BACKGROUND.webm"
        }
        videoType="video/mp4"
      />
      <div
        className={`container-fluid ${style.aboutUsMainScreenSection__textBlock}`}
      >
        <ul className="row">
          <li
            className={`col p-0  ${style.aboutUsMainScreenSection__textBlock__container}`}
          >
            <h1 className={style.aboutUsMainScreenSection__title}>
              {title.map(item => (
                <p>{item}</p>
              ))}
            </h1>
            <p className={style.aboutUsMainScreenSection__description}>
              {description}
            </p>
            <div className={style.aboutUsMainScreenSection__button}>
              <Button styles={"button__play__aboutUsMainScreenSection"} />
              <ModelWindow isOpen={isMWOpen} toggleMW={toggleMW}>
                <Video videoSrc="https://www.youtube.com/watch?v=MJzMvBe6N5M" />
              </ModelWindow>
            </div>
            <div className={style.aboutUsMainScreenSection__buttonArrow}>
              <ButtonArrow text={"Contact us"} color="white" />
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default AboutUsMainScreenSection;
