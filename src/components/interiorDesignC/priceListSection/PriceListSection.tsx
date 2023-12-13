import { FC, ReactNode } from "react";
import style from "./PriceListSection.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import TextTitle from "../../mainScreenC/infoSection/textTitle/TextTitle";
import { priceListSectionData } from "./priceListSection.data";
import PriceListTextBlock from "./priceListTextBlock/PriceListTextBlock";

export interface PriceListSectionProps {}

const PriceListSection: FC<PriceListSectionProps> = ({}) => {
  return (
    <section className={style.priceListSection}>
      <div className={`container-fluid `}>
        <TextTitle
          title={["Cost of services", `interior design`]}
          backText={"price"}
          colorStyle="textTitleDarkStyle"
        />
        <div className="row">
          <div
            className={`col p-0 d-flex justify-content-between ${style.priceListSection__container}`}
          >
            {priceListSectionData.map(item => (
              <PriceListTextBlock
                priceLvl={item.priceLvl}
                priceSummary={item.priceSummary}
                discription={item.discription}
                priceCost={item.priceCost}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PriceListSection;
