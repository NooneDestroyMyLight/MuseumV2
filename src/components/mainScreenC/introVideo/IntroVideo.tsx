import { FC } from "react";
import style from "./IntroVideo.module.scss";

export interface IntroVideoProps {
  videoSrc: string;
  videoType: string;
}

const IntroVideo: FC<IntroVideoProps> = ({ videoSrc, videoType }) => {
  return (
    <video className={style.backVideo} autoPlay loop muted plays-playsInline>
      <source src={videoSrc} type={videoType} />
    </video>
  );
};

export default IntroVideo;
