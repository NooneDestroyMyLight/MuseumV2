import { FC, useState } from "react";
import style from "./PortfolioList.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { portfolioListData } from "./portfolioList.data";
import PortfolioItem from "./portfolioItem/PortfolioItem";

export interface PortfolioListProps {}

const PortfolioList: FC<PortfolioListProps> = ({}) => {
  return (
    <div className={`row  d-flex  ${style.portfolioList}`}>
      {portfolioListData.map(item => (
        <div className={`p-0 col-4 ${style.item}`}>
          <PortfolioItem imgSrc={item.imgSrc} />
        </div>
      ))}
    </div>
  );
};

export default PortfolioList;
