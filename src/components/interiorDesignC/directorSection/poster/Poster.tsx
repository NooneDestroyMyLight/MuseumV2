import { FC, useState } from "react";
import style from "./Poster.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Video from "../../../generalC/video/Video";
import ModelWindow from "../../../../HOC/modelWindow/ModelWindow";

interface PosterProps {
  className: string;
  imageSrc: string;
  //
  title?: string;
  //
  videoSrc: string;
}

const Poster: FC<PosterProps> = ({ className, imageSrc, title, videoSrc }) => {
  const [isMWOpen, setMWOpen] = useState<boolean>(false);

  const onPlayButtonClick = (): void => {
    setMWOpen(true);
  };

  return (
    <div className={`col-auto p-0  ${style.poster}  ${style[className]}`}>
      <video poster={imageSrc} className={style.poster__item} />
      <button
        onClick={onPlayButtonClick}
        className={style.poster__playButton}
      />
      {(title as string) && (
        <span className={style.poster__title}>{title}</span>
      )}
      <ModelWindow isOpen={isMWOpen} setMWOpen={setMWOpen}>
        <Video videoSrc={videoSrc} />
      </ModelWindow>
    </div>
  );
};

export default Poster;

//"https://www.youtube.com/watch?v=AD2aftdD_fA&embeds_widget_referrer=https%3A%2F%2Fmuseum-interior.com%2Fes%2Finterior-design%2F&embeds_referring_origin=https%3A%2F%2Fmuseum-interior.com&feature=emb_yt_watermark"
