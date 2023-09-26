import { FC, useState } from "react";
import style from "./SliderCounterAndButton.module.scss";
import ArrowButtonIcon from "../../../../../assets/arrowButtonIcon/ArrowButtonIcon";
import { useSwiper } from "swiper/react";

export interface SliderCounterAndButtonProps {
  sliderLength: number;
  currentSlide: number;
}

const SliderCounterAndButton: FC<SliderCounterAndButtonProps> = ({
  sliderLength,
  currentSlide,
}) => {
  const swiper = useSwiper();

  return (
    <ul className={style.sliderCounterAndButton}>
      <button onClick={() => swiper.slidePrev()} className={style.prevButton}>
        <ArrowButtonIcon color={"white"} height="8" width="50" />
      </button>
      <li className={style.counter}>
        <span className={style.currentSlide}>0{currentSlide}</span>
        <span className={style.sliderLength}>0{sliderLength}</span>
      </li>
      <button onClick={() => swiper.slideNext()} className={style.nextButton}>
        <ArrowButtonIcon color={"white"} height="8" width="50" />
      </button>
    </ul>
  );
};

export default SliderCounterAndButton;
