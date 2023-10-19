import { FC, ReactNode } from "react";

import style from "./AboutUsGallerySection.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import VerticalGallery from "../../aboutUsC/verticalGallery/VerticalGallery";
import ButtonArrow from "../../mainScreenC/buttonArrow/ButtonArrow";

interface VerticalGallerySectionProps {
  children: ReactNode;
  //
  title: string;
  description: string[];

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
    <section
      className={` container-fluid ${style.aboutUsGallerySection} ${style.section}`}
    >
      <div className={style.description}>
        <h2 className={style.description__title}>{title}</h2>
        {description.map(item => (
          <p>{item}</p>
        ))}
        <ButtonArrow color="black" text="buttonArrowText" />
      </div>
      <VerticalGallery>
        {children}
        {/* {dataList.map(item => (
          <PortfolioItem
            className={"portfolioItem__verticalGallery"}
            key={item.imgSrc}
            //
            imgSrc={item.imgSrc}
            description={item.category}
            name={item.name}
          />
        ))} */}
      </VerticalGallery>
    </section>
  );
};

export default VerticalGallerySection;
