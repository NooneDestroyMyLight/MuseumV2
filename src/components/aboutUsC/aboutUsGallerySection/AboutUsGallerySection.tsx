import { FC } from "react";

import style from "./AboutUsGallerySection.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import ButtonArrow from "../../mainScreenC/buttonArrow/ButtonArrow";
import { IReviewListData } from "../../interiorDesignC/galery/portfolioList/portfolioList.data";

import VerticalGallery from "../verticalGallery/VerticalGallery";
import PortfolioItem from "../../interiorDesignC/galery/portfolioList/portfolioItem/PortfolioItem";
import Button from "../../generalC/button/Button";
import { useCurrentVideo } from "../../../hooks/useCurrentVideo";

import ModelWindow from "../../../HOC/modelWindow/ModelWindow";
import Video from "../../generalC/video/Video";

interface AboutUsGallerySectionProps {
  dataList: IReviewListData[];
  //
  title: string;
  description: string;
}

const AboutUsGallerySection: FC<AboutUsGallerySectionProps> = ({
  dataList,
  //
  title,
  description,
}) => {
  const [currentVideo, isMWOpen, onVideoItemClick, toggleMW] =
    useCurrentVideo();

  return (
    <section
      className={` container-fluid ${style.aboutUsGallerySection} ${style.section}`}
    >
      <div className={style.description}>
        <h2 className={style.description__title}>{title}</h2>
        <p>{description}</p>
        <ButtonArrow color="black" text="Leave feedback" />
      </div>
      <VerticalGallery>
        {dataList.map(item => (
          <PortfolioItem
            className={"portfolioItem__verticalGallery"}
            //
            key={item.imgSrc}
            //
            imgSrc={item.imgSrc}
            description={item.category}
            name={item.name}
          >
            <Button
              styles={"button__play__directorSection"}
              onClick={() => onVideoItemClick(item.videoSrc)}
            />
          </PortfolioItem>
        ))}
        <ModelWindow isOpen={isMWOpen} toggleMW={toggleMW}>
          <Video videoSrc={currentVideo} />
        </ModelWindow>
      </VerticalGallery>
    </section>
  );
};

export default AboutUsGallerySection;
