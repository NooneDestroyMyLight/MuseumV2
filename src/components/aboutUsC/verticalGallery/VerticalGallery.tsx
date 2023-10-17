import { FC } from "react";

import style from "./VerticalGallery.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonArrow from "../../mainScreenC/buttonArrow/ButtonArrow";
import { reviewListData } from "../../interiorDesignC/galery/portfolioList/portfolioList.data";
import PortfolioItem from "../../interiorDesignC/galery/portfolioList/portfolioItem/PortfolioItem";
import Button from "../../generalC/button/Button";
import { Swiper, SwiperSlide } from "swiper/react";

interface VerticalGalleryProps {
  title: string;
  description: string;
}

const VerticalGallery: FC<VerticalGalleryProps> = ({ title, description }) => {
  return (
    <section
      className={` container-fluid ${style.verticalGallery} ${style.section}`}
    >
      <div className={`${style.portfolioList}`}>
        {reviewListData.map(item => (
          <PortfolioItem
            className={"portfolioVideoItem"}
            //
            key={item.imgSrc}
            //
            imgSrc={item.imgSrc}
            description={item.category}
            name={item.name}
          >
            <Button
              styles={"button__play__directorSection"}
              // onClick={() => onVideoItemClick(item.videoSrc)}
            />
          </PortfolioItem>
        ))}
      </div>

      <div className={style.description}>
        <h2 className={style.description__title}>{title}</h2>
        <p>{description}</p>
        <ButtonArrow color="black" text="Leave feedback" />
      </div>
    </section>
  );
};

export default VerticalGallery;

{
  /* <div className={`${style.portfolioList}`}>
{reviewListData.map(item => (
  <PortfolioItem
    className={"portfolioVideoItem"}
    //
    key={item.imgSrc}
    //
    imgSrc={item.imgSrc}
    description={item.category}
    name={item.name}
  >
    <Button
      styles={"button__play__directorSection"}
      // onClick={() => onVideoItemClick(item.videoSrc)}
    />
  </PortfolioItem>
))}
</div> */
}
