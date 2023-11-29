import { FC } from "react";
import style from "./PriceListTextBlock.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export interface PriceListTextBlockProps {
  priceLvl: string;
  priceSummary: string;
  discription: string[];
  priceCost: string;
}

const PriceListTextBlock: FC<PriceListTextBlockProps> = ({
  priceLvl,
  priceSummary,
  discription,
  priceCost,
}) => {
  return (
    <ul className={`d-flex flex-column  ${style.priceListSection}`}>
      <li>
        <h2 className={style.title}>{priceLvl}</h2>
        <span>{priceSummary}</span>
      </li>
      <h4>What's included in the price?</h4>
      <li className={style.discription}>
        {discription.map(item => (
          <span className={style.discription__Item}>{item}</span>
        ))}
      </li>
      <li>
        <h3>{priceCost}$ /sq.m</h3>
      </li>
      <button className={style.button}>order</button>
    </ul>
  );
};

export default PriceListTextBlock;
