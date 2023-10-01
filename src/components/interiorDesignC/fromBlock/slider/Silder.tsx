import { FC, useState } from "react";
import style from "./Silder.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { sliderData } from "./slider.data";
import { Swiper, SwiperSlide } from "swiper/react";

import SliderCounterAndButton from "./sliderCounterAndButton/SliderCounterAndButton";

export interface SilderProps {}

const Silder: FC<SilderProps> = ({}) => {
  const [currentSlide, setCurrentSlide] = useState<number>(1);

  return (
    <Swiper
      slidesPerView={1}
      loop={true}
      //class
      className={`col-auto p-0 ${style.slider}`}
      wrapperClass={style.slider__Wrapper}
      onSlideChange={swiper => {
        setCurrentSlide(swiper.realIndex + 1);
      }}
    >
      {sliderData.map(item => (
        <SwiperSlide key={item} className={style.slider__Wrapper__Slide}>
          <img src={item} alt="img" key={item} className={style.img} />
        </SwiperSlide>
      ))}
      <SliderCounterAndButton
        currentSlide={currentSlide}
        sliderLength={sliderData.length}
      />
    </Swiper>
  );
};

export default Silder;
