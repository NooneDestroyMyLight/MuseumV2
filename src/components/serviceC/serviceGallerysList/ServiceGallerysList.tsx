import { FC } from "react";
import style from "./ServiceGallerysList.module.scss";
//
import TextTitle from "../../mainScreenC/infoSection/textTitle/TextTitle";
import ButtonArrow from "../../mainScreenC/buttonArrow/ButtonArrow";
//
import VerticalGallerySection from "../../generalC/verticalSection/VerticalGallerySection";
import {
  verticalGalleryDataImgList,
  verticalGalleryDataImgListCategory,
} from "../../generalC/verticalSection/verticalGallerySection.data";
import VerticalGallerySectionItem from "../../generalC/verticalSection/verticalGallerySectionItem/VerticalGallerySectionItem";
import { serviceGallerysListData } from "./ServiceGallerysList.data";

export interface ServiceGallerysListProps {}

const ServiceGallerysList: FC<ServiceGallerysListProps> = ({}) => {
  return (
    <section
      className={` container-fluid ${style.serviceGallerysList} ${style.section}`}
    >
      <TextTitle
        title={["Our", "project"]}
        backText={"Cases"}
        colorStyle="textTitleLightStyle"
      >
        <div className={`align-self-end `}>
          <ButtonArrow text={"Our service"} color="black" />
        </div>
      </TextTitle>
      <div className="row">
        <div className={`col p-0 ${style.serviceGallerysList__container}`}>
          <VerticalGallerySection
            title={serviceGallerysListData[0].title}
            description={[serviceGallerysListData[0].description]}
            buttonArrowText={serviceGallerysListData[0].arrowButtonText}
          >
            {verticalGalleryDataImgList.map(
              item =>
                item.category === verticalGalleryDataImgListCategory[0] && (
                  <VerticalGallerySectionItem
                    imgSrc={item.imgSrc}
                    alt={item.alt}
                    key={item.imgSrc}
                  />
                )
            )}
          </VerticalGallerySection>
          <VerticalGallerySection
            title={serviceGallerysListData[1].title}
            description={[serviceGallerysListData[1].description]}
            buttonArrowText={serviceGallerysListData[1].arrowButtonText}
          >
            {verticalGalleryDataImgList.map(
              item =>
                item.category === verticalGalleryDataImgListCategory[1] && (
                  <VerticalGallerySectionItem
                    imgSrc={item.imgSrc}
                    alt={item.alt}
                    key={item.imgSrc}
                  />
                )
            )}
          </VerticalGallerySection>
          <VerticalGallerySection
            title={serviceGallerysListData[2].title}
            description={[serviceGallerysListData[2].description]}
            buttonArrowText={serviceGallerysListData[2].arrowButtonText}
          >
            {verticalGalleryDataImgList.map(
              item =>
                item.category === verticalGalleryDataImgListCategory[2] && (
                  <VerticalGallerySectionItem
                    imgSrc={item.imgSrc}
                    alt={item.alt}
                    key={item.imgSrc}
                  />
                )
            )}
          </VerticalGallerySection>
        </div>
      </div>
    </section>
  );
};

export default ServiceGallerysList;
