import { FC, useState } from "react";
import style from "./Poster.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Video from "../../../generalC/video/Video";
import ModelWindow from "../../../../HOC/modelWindow/ModelWindow";

interface PosterProps {}

const Poster: FC<PosterProps> = ({}) => {
  const [isMWOpen, setMWOpen] = useState<boolean>(false);

  const onPlayButtonClick = (): void => {
    setMWOpen(true);
  };

  return (
    <div className={style.poster}>
      <video
        poster="https://museum-interior.com/wp-content/uploads/2020/11/artur1.jpg"
        className={style.poster__item}
      />
      <button
        onClick={onPlayButtonClick}
        className={style.poster__playButton}
      ></button>
      <ModelWindow isOpen={isMWOpen} setMWOpen={setMWOpen}>
        <Video />
      </ModelWindow>
    </div>
  );
};

export default Poster;
