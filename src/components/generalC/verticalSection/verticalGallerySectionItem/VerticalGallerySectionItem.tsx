import { FC, ReactNode } from "react";

import style from "./AboutUsGallerySection.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

interface VerticalGallerySectionItemProps {
  imgSrc: string;
  alt: string;
}

const VerticalGallerySectionItem: FC<VerticalGallerySectionItemProps> = ({
  imgSrc,
  alt,
}) => {
  return (
    <div className={style.verticalGallerySectionItem}>
      <img
        className={style.verticalGallerySectionItem__img}
        src={imgSrc}
        alt={alt}
      />
    </div>
  );
};

export default VerticalGallerySectionItem;
