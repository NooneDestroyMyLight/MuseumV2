import { FC, useState } from "react";
import style from "./Poster.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
//
import Video from "../../../generalC/video/Video";
import ModelWindow from "../../../../HOC/modelWindow/ModelWindow";
import Button from "../../../generalC/button/Button";
import { useToggle } from "../../../../hooks/useToggle";

interface PosterProps {
  className: string;
  buttonClassName: string;
  //
  imageSrc: string;
  videoSrc: string;
  //
  title?: string;
  //
}

const Poster: FC<PosterProps> = ({
  className,
  buttonClassName,
  //
  imageSrc,
  videoSrc,
  //
  title,
}) => {
  const [isMWOpen, toggleMW] = useToggle(false);

  return (
    <div className={`col-auto p-0  ${style.poster}  ${style[className]}`}>
      <video poster={imageSrc} className={style.poster__item} />
      <Button styles={buttonClassName} onClick={toggleMW as () => void} />
      {title && <span className={style.poster__title}>{title}</span>}
      <ModelWindow
        isOpen={isMWOpen as boolean}
        toggleMW={toggleMW as () => void}
      >
        <Video videoSrc={videoSrc} />
      </ModelWindow>
    </div>
  );
};

export default Poster;
