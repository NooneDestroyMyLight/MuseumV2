import { FC, useState } from "react";
import style from "./PortfolioItem.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export interface PortfolioItemProps {
  imgSrc: string;
}

const PortfolioItem: FC<PortfolioItemProps> = ({ imgSrc }) => {
  return (
    <div className={style.portfolioItem}>
      <img src={imgSrc} alt="img" />
    </div>
  );
};

export default PortfolioItem;
