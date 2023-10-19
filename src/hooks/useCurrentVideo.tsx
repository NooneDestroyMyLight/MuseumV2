import { useState } from "react";
import { useToggle } from "./useToggle";

export const useCurrentVideo = (): [
  string,
  boolean,
  (videoSrc: string) => void,
  () => void
] => {
  const [isMWOpen, toggleMW] = useToggle(false);
  const [currentVideo, setCurrentVideo] = useState("");

  const onVideoItemClick = (videoSrc: string): void => {
    setCurrentVideo(videoSrc);
    toggleMW();
  };

  return [currentVideo, isMWOpen, onVideoItemClick, toggleMW];
};
