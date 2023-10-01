import { FC, useState } from "react";
import style from "./PortfolioList.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import PortfolioItem from "./portfolioItem/PortfolioItem";
import { IPortfolioListData } from "./portfolioList.data";

import { AnimatePresence, motion } from "framer-motion";

export interface PortfolioListProps {
  portfilioList: IPortfolioListData[];
  showMore: boolean;
}

const PortfolioList: FC<PortfolioListProps> = ({ portfilioList, showMore }) => {
  return (
    <div className={`row ${style.portfolioList}`}>
      <div className="col p-0 ">
        <div
          className={`${style.portfolioList__container} ${
            showMore && style.showMore
          }`}
        >
          <AnimatePresence>
            {portfilioList.map((item, index) => (
              <PortfolioItem
                showMore={showMore}
                key={item.imgSrc}
                index={index}
                //
                imgSrc={item.imgSrc}
                category={item.category}
                name={item.name}
              />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default PortfolioList;
