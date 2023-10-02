import { FC } from "react";
import style from "./Video.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

interface VideoProps {
  isOpen: boolean;
}

const Video: FC<VideoProps> = ({ isOpen }) => {
  return (
    <div className={`${style.video}`}>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube-nocookie.com/embed/AD2aftdD_fA?autoplay=0&controls=0&disablekb=1&playsinline=1&cc_load_policy=0&cc_lang_pref=auto&widget_referrer=https%3A%2F%2Fmuseum-interior.com%2Fru%2Fservices%2Finterior-design%2F&noCookie=true&rel=0&showinfo=0&iv_load_policy=3&modestbranding=1&enablejsapi=1&origin=https%3A%2F%2Fmuseum-interior.com&widgetid=4"
        className={style.video__item}
      ></iframe>
    </div>
  );
};

export default Video;
