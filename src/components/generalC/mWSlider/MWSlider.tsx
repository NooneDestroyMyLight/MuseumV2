import { FC, useState } from "react";
import style from "./MWSlider.module.scss";
//
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { photoListImgsData } from "../../casesC/photosList/photoList.data";
import PhotoListImgItem from "../../casesC/photosList/photoListImgItem/PhotoListImgItem";

interface MWSliderProps {}

const MWSlider: FC<MWSliderProps> = ({}) => {
  const [currentSlide, setCurrentSlide] = useState<number>(1);

  // const swiper = useSwiper();
  const [swiper, setSwiper] = useState<any>(null);

  return (
    <ul className={style.mWSlider}>
      <Swiper
        slidesPerView={1}
        loop={true}
        //class
        className={style.slider}
        wrapperClass={style.slider__wrapper}
        //
        onSwiper={swiper => setSwiper(swiper)}
        onSlideChange={swiper => {
          setCurrentSlide(swiper.realIndex + 1);
        }}
      >
        {photoListImgsData.map(item => (
          <SwiperSlide
            key={item.imgSrc}
            className={style.slider__wrapper__slide}
          >
            <PhotoListImgItem key={item.imgSrc} ImgItem={item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <li className={style.mWSlider__panel}>
        <span className={style.counter}>
          {currentSlide} / {photoListImgsData.length}
        </span>
      </li>
      <button onClick={() => swiper.slidePrev()} className={style.button__prev}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="25"
          height="25"
          x="0"
          y="0"
          viewBox="0 0 492 492"
        >
          <g>
            <path
              d="M198.608 246.104 382.664 62.04c5.068-5.056 7.856-11.816 7.856-19.024 0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12C361.476 2.792 354.712 0 347.504 0s-13.964 2.792-19.028 7.864L109.328 227.008c-5.084 5.08-7.868 11.868-7.848 19.084-.02 7.248 2.76 14.028 7.848 19.112l218.944 218.932c5.064 5.072 11.82 7.864 19.032 7.864 7.208 0 13.964-2.792 19.032-7.864l16.124-16.12c10.492-10.492 10.492-27.572 0-38.06L198.608 246.104z"
              fill="#ffffff"
              opacity="1"
              data-original="#000000"
            />
          </g>
        </svg>
      </button>
      <button onClick={() => swiper.slideNext()} className={style.button__next}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="25"
          height="25"
          x="0"
          y="0"
          viewBox="0 0 492.004 492.004"
        >
          <g>
            <path
              d="M382.678 226.804 163.73 7.86C158.666 2.792 151.906 0 144.698 0s-13.968 2.792-19.032 7.86l-16.124 16.12c-10.492 10.504-10.492 27.576 0 38.064L293.398 245.9l-184.06 184.06c-5.064 5.068-7.86 11.824-7.86 19.028 0 7.212 2.796 13.968 7.86 19.04l16.124 16.116c5.068 5.068 11.824 7.86 19.032 7.86s13.968-2.792 19.032-7.86L382.678 265c5.076-5.084 7.864-11.872 7.848-19.088.016-7.244-2.772-14.028-7.848-19.108z"
              fill="#ffffff"
              opacity="1"
              data-original="#000000"
            />
          </g>
        </svg>
      </button>
    </ul>
  );
};

export default MWSlider;
