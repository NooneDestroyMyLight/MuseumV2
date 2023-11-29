import { FC, useState } from "react";
import style from "./Gallery.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import TextTitle from "../../mainScreenC/infoSection/textTitle/TextTitle";
import ButtonArrow from "../../mainScreenC/buttonArrow/ButtonArrow";
import FilterList, { allProject } from "./filterList/FilterList";

import PortfolioList from "./portfolioList/PortfolioList";

import { motion, AnimatePresence } from "framer-motion";

import {
  IPortfolioListData,
  portfolioListData,
  portfolioCategory,
} from "./portfolioList/portfolioList.data";
import ShowMoreButton from "./showMoreButton/ShowMoreButton";
import PortfolioItem from "./portfolioList/portfolioItem/PortfolioItem";
import EstimateCost from "../estimateCostSection/EstimateCost";
import { estimateCostSectionData } from "../../../page/services/interiorDesign/interiorDesign.data";

export interface GalleryProps {
  // children?: ReactNode;
  // title: string;
  // arrowButtonText: string;
  //   backText: string;
  showButtonText?: string;
  showAll: boolean;

  dataList: IPortfolioListData[];
}

const Gallery: FC<GalleryProps> = ({ showButtonText, showAll, dataList }) => {
  const [portfilioList, setPortfilioList] =
    useState<IPortfolioListData[]>(dataList);
  const [showMore, setShowMore] = useState<boolean>(showAll);
  const [currentFilter, setCurrentFilter] = useState<string>(allProject);

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
            category={portfolioCategory}
            //
            setPortfilioList={setPortfilioList}
            portfilioList={portfolioListData}
            ///
            currentFilter={currentFilter}
            setCurrentFilter={setCurrentFilter}
          />
          <PortfolioList showMore={showMore}>
            <AnimatePresence>
              {portfilioList.map(item => (
                <PortfolioItem
                  key={item.imgSrc}
                  //
                  imgSrc={item.imgSrc}
                  description={item.category}
                  name={item.name}
                  className={"portfolioItem"}
                />
              ))}
            </AnimatePresence>
          </PortfolioList>
        </div>
        <ul
          className={`row d-flex justify-content-center ${style.showMoreButton} `}
        >
          <li
            className={`col-auto p-0 ${style.showMoreButton__Container}`}
            style={{ display: showMore ? "none" : "" }}
          >
            {showButtonText && (
              <ShowMoreButton
                showButtonText={showButtonText}
                onButtonClick={onButtonClick}
              />
            )}
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Gallery;
