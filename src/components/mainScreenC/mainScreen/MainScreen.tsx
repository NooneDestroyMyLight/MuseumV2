import { FC, useEffect, useRef, useState } from "react";
import style from "./MainScreen.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import IntroVideo from "../introVideo/IntroVideo";

import Header from "../../layout/header/Header";
import WatherMark from "../watherMark/WatherMark";
import SocialMediaList from "../socialMediaList/SocialMediaList";

interface MainScreenProps {}

const MainScreen: FC<MainScreenProps> = () => {
  const divRef = useRef<HTMLDivElement | null>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const headerElement = divRef.current;
    if (!headerElement) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsSticky(false);
          } else {
            setIsSticky(true);
          }
        });
      },
      { threshold: 0.95 }
    );

    observer.observe(headerElement);

    return () => {
      observer.unobserve(headerElement);
    };
  }, []);

  return (
    <section ref={divRef} className={`${style.mainPageContainer}`}>
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
