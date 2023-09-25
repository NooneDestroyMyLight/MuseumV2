import { FC } from "react";
import style from "./PortfolioItem.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { motion } from "framer-motion";

export interface PortfolioItemProps {
  imgSrc: string;
  name: string;
  category: string;
}

const PortfolioItem: FC<PortfolioItemProps> = ({ imgSrc, name, category }) => {
  return (
    // <div className={`col-4 p-0 `}>
    <motion.div
      className={` ${style.portfolioItem}`}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      layout
    >
      <img src={imgSrc} alt="img" />
      <div className={style.infoGroup}>
        <span className={`${style.name} ${style.boldItem}`}>{name}</span>
        <span className={style.category}>{category}</span>
      </div>
    </motion.div>
    // </div>
  );
};

export default PortfolioItem;
