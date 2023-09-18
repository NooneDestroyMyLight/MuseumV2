import { FC, ReactNode } from "react";
import style from "./Gallery.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import TextTitle from "../../mainScreenC/infoSection/textTitle/TextTitle";
import ButtonArrow from "../../mainScreenC/buttonArrow/ButtonArrow";
import FilterList from "./filterList/FilterList";
import PortfolioList from "./portfolioList/PortfolioList";

export interface GalleryProps {
  // children?: ReactNode;
  // title: string;
  // buttonText: string;
  //   backText: string;
}

const Gallery: FC<GalleryProps> = ({}) => {
  return (
    <section className={style.gallery}>
      <div
        className={`d-flex flex-column container-fluid ${style.gallery__Container}`}
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
        <FilterList />
        <PortfolioList />
      </div>
    </section>
  );
};

export default Gallery;
