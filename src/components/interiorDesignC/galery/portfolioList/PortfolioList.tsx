import { FC, useState } from "react";
import style from "./PortfolioList.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import PortfolioItem from "./portfolioItem/PortfolioItem";
import { IPortfolioListData } from "./portfolioList.data";

import { AnimatePresence, motion } from "framer-motion";

export interface PortfolioListProps {
  portfilioList: IPortfolioListData[];
}

const PortfolioList: FC<PortfolioListProps> = ({ portfilioList }) => {
  return (
    <div className="row">
      <div className="col-auto p-0">
        <div className={`${style.portfolioList}`}>
          <AnimatePresence>
            {portfilioList.map(item => (
              <PortfolioItem
                key={item.imgSrc}
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
