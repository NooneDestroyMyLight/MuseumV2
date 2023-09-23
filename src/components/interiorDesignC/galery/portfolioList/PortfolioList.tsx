import { FC, useState } from "react";
import style from "./PortfolioList.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { portfolioListData } from "./portfolioList.data";
import PortfolioItem from "./portfolioItem/PortfolioItem";

export interface PortfolioListProps {}

const PortfolioList: FC<PortfolioListProps> = ({}) => {
  return (
    <div className={`${style.portfolioList}`}>
      {portfolioListData.map(item => (
        // <div className={"col-4 p-0"}>
        <div className={`${style.item}`}>
          <PortfolioItem imgSrc={item.imgSrc} />
        </div>
        // </div>
      ))}
    </div>
  );
};

export default PortfolioList;
