import { FC, ReactNode } from "react";
import style from "./VerticalGallerySection.module.scss";

import VerticalGallery from "../../aboutUsC/verticalGallery/VerticalGallery";
import ButtonArrow from "../../mainScreenC/buttonArrow/ButtonArrow";

interface VerticalGallerySectionProps {
  children: ReactNode;
  //
  title: string;
  description: string[];
  //
  buttonArrowText: string;
}

const VerticalGallerySection: FC<VerticalGallerySectionProps> = ({
  children,
  //
  title,
  description,
  //
  buttonArrowText,
}) => {
  return (
    <div className={style.verticalGallerySection}>
      <div className={style.description}>
        <h3 className={style.description__title}>{title}</h3>
        {description.map(item => (
          <p>{item}</p>
        ))}
        <ButtonArrow color="black" text={buttonArrowText} />
      </div>
      <VerticalGallery>{children}</VerticalGallery>
    </div>
  );
};

export default VerticalGallerySection;
