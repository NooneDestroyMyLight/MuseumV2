import { FC } from "react";
import style from "./Poster.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

interface PideoProps {}

const Poster: FC<PideoProps> = ({}) => {
  return (
    <div className={style.poster}>
      <video
        poster="https://museum-interior.com/wp-content/uploads/2020/11/artur1.jpg"
        className={style.poster__item}
      />
      <button className={style.poster__playButton}></button>
    </div>
  );
};

export default Poster;
