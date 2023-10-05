import { FC, useEffect, useRef } from "react";
import style from "./Video.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
//
import Plyr from "plyr-react";
import "plyr-react/plyr.css";

interface VideoProps {
  videoSrc: string;
}

const Video: FC<VideoProps> = ({ videoSrc }) => {
  return (
    <div className={style.video}>
      <Plyr
        source={{
          type: "video",
          sources: [
            {
              src: videoSrc,
              provider: "youtube",
            },
          ],
        }}
      />
    </div>
  );
};
//"https://www.youtube.com/watch?v=AD2aftdD_fA&embeds_widget_referrer=https%3A%2F%2Fmuseum-interior.com%2Fes%2Finterior-design%2F&embeds_referring_origin=https%3A%2F%2Fmuseum-interior.com&feature=emb_yt_watermark"

export default Video;
