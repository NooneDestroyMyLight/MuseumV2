import { FC, useState } from "react";
import style from "./GalleryShortList.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
//
import TextTitle from "../../mainScreenC/infoSection/textTitle/TextTitle";
import ButtonArrow, {
  ButtonArrowProps,
} from "../../mainScreenC/buttonArrow/ButtonArrow";
//
import PortfolioList from "../../interiorDesignC/galery/portfolioList/PortfolioList";
import PortfolioItem from "../../interiorDesignC/galery/portfolioList/portfolioItem/PortfolioItem";
import { IPortfolioListData } from "../../interiorDesignC/galery/portfolioList/portfolioList.data";
import ShowMoreButton from "../../interiorDesignC/galery/showMoreButton/ShowMoreButton";

export interface GalleryShortListProps {
  listData: IPortfolioListData[];
  //
  title: string[];
  backTitleText: string;
  titleClassName: string;
}

const GalleryShortList: FC<GalleryShortListProps> = ({
  listData,
  //
  title,
  backTitleText,
  titleClassName,
}) => {
  const [showMore, setShowMore] = useState<boolean>(false);

  const onButtonClick = () => {
    setShowMore(true);
  };

  return (
    <section className={`container-fluid ${style.section}`}>
      <TextTitle
        title={["Our", "project"]} //title
        backText={"team"} //backTitleText
        colorStyle="textTitleLightStyle" //titleClassName
      />
      <PortfolioList showMore={showMore}>
        {listData.map(item => (
          <PortfolioItem
            key={item.imgSrc}
            //
            className="portfolioTeamItem"
            imgSrc={item.imgSrc}
            description={item.category}
            name={item.name}
          />
        ))}
      </PortfolioList>
      <ShowMoreButton
        showButtonText={"Show more"}
        onButtonClick={onButtonClick}
      />
    </section>
  );
};

export default GalleryShortList;
