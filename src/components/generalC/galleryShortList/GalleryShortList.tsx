import { FC, useState } from "react";
import style from "./GalleryShortList.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
//
import TextTitle from "../../mainScreenC/infoSection/textTitle/TextTitle";
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
    <section
      className={`container-fluid ${style.galleryShortList} ${style.section}`}
    >
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
      <div className={style.galleryShortList__button}>
        <ShowMoreButton
          isHide={showMore}
          showButtonText={"Show more"}
          onButtonClick={onButtonClick}
        />
      </div>
    </section>
  );
};

export default GalleryShortList;
