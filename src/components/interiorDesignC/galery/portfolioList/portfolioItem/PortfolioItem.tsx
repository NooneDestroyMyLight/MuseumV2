import { FC, ReactNode } from "react";
import style from "./PortfolioItem.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { motion } from "framer-motion";

export interface PortfolioItemProps {
  className: string;
  //
  imgSrc: string;
  name: string;
  description: string;
  //
  children?: ReactNode;
}

const PortfolioItem: FC<PortfolioItemProps> = ({
  className,
  //
  imgSrc,
  name,
  description,
  //
  children,
}) => {
  return (
    <motion.div
      className={`${style[className]}`}
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ duration: 0.3 }}
      layout
    >
      <img src={imgSrc} alt="img" /> {/* Add alt*/}
      <div className={style.portfolioItem__infoGroup}>
        <span
          className={`${style.portfolioItem__infoGroup__name} ${style.boldItem}`}
        >
          {name}
        </span>
        <span className={style.portfolioItem__infoGroup__description}>
          {description}
        </span>
      </div>
      {children}
    </motion.div>
  );
};

export default PortfolioItem;
