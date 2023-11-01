import { FC } from "react";
import style from "./PhotoListDescription.module.scss";

export interface PhotoListDescriptionProps {
  location: string;
  locationValue: string;
  //
  area: string;
  areaValue: string;
  //
  releaseDate: string;
  releaseDateValue: string;
}

const PhotoListDescription: FC<PhotoListDescriptionProps> = ({
  location,
  locationValue,
  //
  area,
  areaValue,
  //
  releaseDate,
  releaseDateValue,
}) => {
  return (
    <ul className={style.photoListDescription}>
      <li className={`${style.location} ${style.photoListDescription__item}`}>
        <label className={style.photoListDescription__item__title}>
          {location}
        </label>
        <span className={style.photoListDescription__item__value}>
          {locationValue}
        </span>
      </li>
      <li className={`${style.area} ${style.photoListDescription__item}`}>
        <label className={style.photoListDescription__item__title}>
          {area}
        </label>
        <span className={style.photoListDescription__item__value}>
          {areaValue}
        </span>
      </li>
      <li className={`${style.release} ${style.photoListDescription__item}`}>
        <label className={style.photoListDescription__item__title}>
          {releaseDate}
        </label>
        <span className={style.photoListDescription__item__value}>
          {releaseDateValue}
        </span>
      </li>
    </ul>
  );
};

export default PhotoListDescription;
