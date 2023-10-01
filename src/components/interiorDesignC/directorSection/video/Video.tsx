import { FC } from "react";
import style from "./Video.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

interface VideoProps {}

const Video: FC<VideoProps> = () => {
  return (
    <div className={style.videoWrapper}>
      <video
        poster="https://museum-interior.com/wp-content/uploads/2020/11/artur1.jpg"
        className={style.video}
      />
      <button className={style.playButton}></button>
    </div>
  );
};

export default Video;
