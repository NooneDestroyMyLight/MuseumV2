import { FC, useEffect, useRef, useState } from "react";
import style from "./Video.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
//
import Plyr, { APITypes } from "plyr-react";
import "plyr-react/plyr.css";

interface VideoProps {
  videoSrc: string;
}

const Video: FC<VideoProps> = ({ videoSrc }) => {
  const playerRef = useRef<APITypes | null>(null);

  // useEffect(() => {
  //   if ((playerRef.current as APITypes).plyr && window.innerWidth <= 768) {
  //     (playerRef.current as APITypes).plyr.fullscreen.enter();
  //   }
  // }, [videoSrc]);

  // console.log("windowWidth", window.innerWidth);

  return (
    <div className={style.video}>
      <Plyr
        ref={playerRef}
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

export default Video;
