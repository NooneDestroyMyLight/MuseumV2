import { FC } from "react";
import style from "./PortfolioItem.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { motion } from "framer-motion";

export interface PortfolioItemProps {
  index: number;
  showMore: boolean;
  //
  imgSrc: string;
  name: string;
  category: string;
}

const PortfolioItem: FC<PortfolioItemProps> = ({
  imgSrc,
  name,
  category,
  index,
  showMore,
}) => {
  return (
    <motion.div
      className={`${style.portfolioItem}`}
      // style={{ display: index >= 9 && !showMore ? "none" : "" }}
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
  );
};

export default PortfolioItem;
