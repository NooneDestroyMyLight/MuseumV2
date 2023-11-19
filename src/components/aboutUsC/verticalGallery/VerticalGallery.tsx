import { FC, ReactNode } from "react";

import style from "./VerticalGallery.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Swiper } from "swiper/react";
//

interface VerticalGalleryProps {
  children: ReactNode;
}

const VerticalGallery: FC<VerticalGalleryProps> = ({ children }) => {
  return (
    <Swiper
      slidesPerView={"auto"}
      mousewheel={true}
      scrollbar={{ draggable: true }}
      //class
      className={style.verticalGallery__wrapper}
      wrapperClass={style.verticalGallery}
    >
      {children}
    </Swiper>
  );
};

export default VerticalGallery;

{
  /* <Swiper
  slidesPerView={1}
  //class
  className={style.verticalGallery}
  wrapperClass={style.verticalList__wrapper}
>
  {children}
</Swiper>; */
}

// return <div className={`${style.verticalGallery}`}>{children}</div>;
