import { FC, ReactNode, useEffect, useRef, useState } from "react";
import style from "./MainScreen.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import IntroVideo, { IntroVideoProps } from "../introVideo/IntroVideo";

import Header from "../../layout/header/Header";
import WatherMark from "../watherMark/WatherMark";
import SocialMediaList from "../socialMediaList/SocialMediaList";
import { useSticky } from "../../../hooks/useSticky";

interface MainScreenProps extends IntroVideoProps {
  children?: ReactNode;
}

const MainScreen: FC<MainScreenProps> = ({ children }) => {
  const [isSticky, elRef] = useSticky(false);

  return (
    <section ref={elRef} className={`${style.mainPageContainer}`}>
      <IntroVideo
        videoSrc="../../../public/introVideo/main-bg-video.mp4"
        videoType="video/mp4"
      />
      <div
        className={`container-fluid d-flex flex-column justify-content-between  ${style.mainPageContent}`}
      >
        <WatherMark />
        <div></div>
        <SocialMediaList />
      </div>
    </section>
  );
};

export default MainScreen;
