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
import VerticalGallerySection from "../../generalC/verticalSection/VerticalGallerySection";
import { SwiperSlide } from "swiper/react";

interface AboutUsGallerySectionProps {
  dataList: IReviewListData[];
  //
  title: string;
  description: string[];
  //
  arrowButtonText: string;
}

const AboutUsGallerySection: FC<AboutUsGallerySectionProps> = ({
  dataList,
  //
  title,
  description,
  arrowButtonText,
}) => {
  const [currentVideo, isMWOpen, onVideoItemClick, toggleMW] =
    useCurrentVideo();

  return (
    <section className={` container-fluid  ${style.section}`}>
      <div className="row">
        <div className={`col p-0 ${style.aboutUsGallerySection}`}>
          <VerticalGallerySection
            title={title}
            description={description}
            buttonArrowText={arrowButtonText}
          >
            {dataList.map(item => (
              <SwiperSlide>
                <PortfolioItem
                  className={"portfolioItem__verticalGallery"}
                  //
                  key={item.imgSrc}
                  //
                  imgSrc={item.imgSrc}
                  description={item.category}
                  //
                  name={item.name}
                >
                  <Button
                    styles={"button__play__directorSection"}
                    onClick={() => onVideoItemClick(item.videoSrc)}
                  />
                </PortfolioItem>
              </SwiperSlide>
            ))}
            <ModelWindow isOpen={isMWOpen} toggleMW={toggleMW}>
              <Video videoSrc={currentVideo} />
            </ModelWindow>
          </VerticalGallerySection>
        </div>
      </div>
    </section>
  );
};

export default AboutUsGallerySection;

// {dataList.map(item => (
//   <PortfolioItem
//     className={"portfolioItem__verticalGallery"}
//     //
//     key={item.imgSrc}
//     //
//     imgSrc={item.imgSrc}
//     description={item.category}
//     name={item.name}
//   >
//     <Button
//       styles={"button__play__directorSection"}
//       onClick={() => onVideoItemClick(item.videoSrc)}
//     />
//   </PortfolioItem>
// ))}
// <ModelWindow isOpen={isMWOpen} toggleMW={toggleMW}>
//   <Video videoSrc={currentVideo} />
// </ModelWindow>
