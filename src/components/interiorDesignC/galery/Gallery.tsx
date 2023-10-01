import { FC, useState } from "react";
import style from "./Gallery.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import TextTitle from "../../mainScreenC/infoSection/textTitle/TextTitle";
import ButtonArrow from "../../mainScreenC/buttonArrow/ButtonArrow";
import FilterList from "./filterList/FilterList";

import PortfolioList from "./portfolioList/PortfolioList";

import { motion, AnimatePresence } from "framer-motion";

import {
  IPortfolioListData,
  portfolioListData,
  portfolioCategory,
} from "./portfolioList/portfolioList.data";
import ShowMoreButton from "./showMoreButton/ShowMoreButton";
import Button from "../../generalC/button/Button";
import ArrowButtonIcon from "../../../assets/arrowButtonIcon/ArrowButtonIcon";

export interface GalleryProps {
  // children?: ReactNode;
  // title: string;
  // arrowButtonText: string;
  //   backText: string;
  showButtonText: string;
}

const Gallery: FC<GalleryProps> = ({ showButtonText }) => {
  const [portfilioList, setPortfilioList] =
    useState<IPortfolioListData[]>(portfolioListData);

  const [showMore, setShowMore] = useState<boolean>(false);

  const onButtonClick = () => {
    setShowMore(true);
  };

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
        <div className={style.portfolioGroup}>
          <FilterList
            //
            category={portfolioCategory}
            setPortfilioList={setPortfilioList}
            portfilioList={portfolioListData}
          />
          <PortfolioList portfilioList={portfilioList} showMore={showMore} />
        </div>
        <ul
          className={`row d-flex justify-content-center ${style.showMoreButton} `}
        >
          <li
            className={`col-auto p-0 ${style.showMoreButton__Container}`}
            style={{ display: showMore ? "none" : "" }}
          >
            <ShowMoreButton
              showButtonText={showButtonText}
              onButtonClick={onButtonClick}
            />
          </li>
        </ul>
        {/* <ShowMoreButton setShowMore={setShowMore} showMore={} showButtonText={showButtonText}/> */}
      </div>
    </section>
  );
};

export default Gallery;
