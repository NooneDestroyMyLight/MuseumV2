import { FC } from "react";
import style from "./PhotoListImgItem.module.scss";
import { IPhotoListImgsData } from "../photoList.data";

export interface PhotoListImgItemProps {
  ImgItem: IPhotoListImgsData;
}

const PhotoListImgItem: FC<PhotoListImgItemProps> = ({ ImgItem }) => {
  const { alt, imgSrc } = ImgItem;
  return <img src={imgSrc} alt={alt} className={style.photoListImgItem} />;
};

export default PhotoListImgItem;
