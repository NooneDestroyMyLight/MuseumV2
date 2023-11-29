import { FC } from "react";
import style from "./PhotosList.module.scss";
import PhotoListDescription from "./photoListDescription/PhotoListDescription";
import ButtonArrow from "../../mainScreenC/buttonArrow/ButtonArrow";
import ArrowButtonIcon from "../../../assets/arrowButtonIcon/ArrowButtonIcon";
import { photoListImgsData } from "./photoList.data";
import PhotoListImgItem from "./photoListImgItem/PhotoListImgItem";
import { useCurrentVideo } from "../../../hooks/useCurrentVideo";
import ModelWindow from "../../../HOC/modelWindow/ModelWindow";
import MWSlider from "../../generalC/mWSlider/MWSlider";

export interface PhotosListProps {}

const PhotosList: FC<PhotosListProps> = ({}) => {
  const [currentVideo, isMWOpen, onVideoItemClick, toggleMW] =
    useCurrentVideo();
  return (
    <section className={`container-fluid p-0 ${style.photosList}`}>
      <div className={` ${style.photosList__container}`}>
        <PhotoListDescription
          location={"Location"}
          locationValue={"Spain, Valencia"}
          //
          area={"Square"}
          areaValue="134.17 sq.m."
          //
          releaseDate={"Release date"}
          releaseDateValue={"2023"}
        />
        <div className={style.photoList}>
          {photoListImgsData.map(item => (
            <div onClick={() => toggleMW()}>
              <PhotoListImgItem key={item.imgSrc} ImgItem={item} />
            </div>
          ))}
        </div>
        <ul className={`d-flex justify-content-between ${style.buttonGroup}`}>
          <ButtonArrow
            buttonClassName="textHide"
            color="black"
            text="Previous entry"
            isReverse
          />
          <ButtonArrow
            buttonClassName="textHide"
            color="black"
            text="Next entry"
          />
        </ul>
      </div>
      <ModelWindow isOpen={isMWOpen} toggleMW={toggleMW}>
        <div className={style.mWSlider__wrapper}>
          <button
            className={style.button__close}
            onClick={toggleMW}
            aria-label={"close (Esc)"}
          />
          <MWSlider />
        </div>
      </ModelWindow>
    </section>
  );
};

export default PhotosList;
