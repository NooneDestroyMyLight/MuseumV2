import { FC, ReactNode, useState } from "react";
import style from "./PortfolioList.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import PortfolioItem from "./portfolioItem/PortfolioItem";
import { IPortfolioListData } from "./portfolioList.data";

import { AnimatePresence, motion } from "framer-motion";

export interface PortfolioListProps {
  // portfilioList: IPortfolioListData[];
  showMore?: boolean;
  //
  children?: ReactNode;
}

const PortfolioList: FC<PortfolioListProps> = ({
  // portfilioList,
  showMore,
  children,
  //
}) => {
  return (
    <div className={`row ${style.portfolioList}`}>
      <div className="col p-0 ">
        <div
          className={`${style.portfolioList__container} ${
            showMore && style.showMore
          }`}
        >
          {children}
          {/* <AnimatePresence>
            {portfilioList.map(item => (
              <PortfolioItem
                key={item.imgSrc}
                //
                imgSrc={item.imgSrc}
                description={item.category}
                name={item.name}
              />
            ))}
          </AnimatePresence> */}
        </div>
      </div>
    </div>
  );
};

export default PortfolioList;
