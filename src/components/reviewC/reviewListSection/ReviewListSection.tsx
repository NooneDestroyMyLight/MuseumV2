import { FC, ReactNode, useState } from "react";
import style from "./ReviewListSection.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
//
import PortfolioList from "../../interiorDesignC/galery/portfolioList/PortfolioList";
import { AnimatePresence } from "framer-motion";
import PortfolioItem from "../../interiorDesignC/galery/portfolioList/portfolioItem/PortfolioItem";
import { reviewListData } from "../../interiorDesignC/galery/portfolioList/portfolioList.data";
import Button from "../../generalC/button/Button";
import ModelWindow from "../../../HOC/modelWindow/ModelWindow";
import Video from "../../generalC/video/Video";
//
import { useToggle } from "../../../hooks/useToggle";
import { useSticky } from "../../../hooks/useSticky";
import TextTitle from "../../mainScreenC/infoSection/textTitle/TextTitle";
import Header from "../../layout/header/Header";
import { useCurrentVideo } from "../../../hooks/useCurrentVideo";

interface SendReviewSectionProps {
  children?: ReactNode;
  //
}

const ReviewListSection: FC<SendReviewSectionProps> = ({}) => {
  const [isSticky, elRef] = useSticky(false);

  const [currentVideo, isMWOpen, onVideoItemClick, toggleMW] =
    useCurrentVideo();
  return (
    <div className={style.reviewListSection}>
      <li ref={elRef} className={style.stickyScreen} />
      <Header
        HeaderNavDropdownIsStickyStyle={"stickydHeaderNavItem"}
        HeaderNavDropdownNotStickyStyle={"stickydHeaderNavItem"}
        //
        notStickedMobileBackground={"white"}
        isStickyMobileBackground={"white"}
        //
        isSticky={isSticky}
        //
        textColor={"black"}
        isStickyTextColor={"black"}
      />
      <section
        className={`container-fluid ${style.reviewListSection} ${style.section}`}
      >
        <TextTitle
          title={["Client", "review"]}
          backText={"Recall"}
          colorStyle="textTitleLightStyle"
          //
        />
        <PortfolioList showMore={true}>
          <AnimatePresence>
            {reviewListData.map(item => (
              <PortfolioItem
                className={"portfolioVideoItem"}
                //
                key={item.imgSrc}
                //
                imgSrc={item.imgSrc}
                description={item.category}
                name={item.name}
              >
                <Button
                  styles={"button__play__directorSection"}
                  onClick={() => onVideoItemClick(item.videoSrc)}
                />
              </PortfolioItem>
            ))}
          </AnimatePresence>
        </PortfolioList>
        <ModelWindow isOpen={isMWOpen} toggleMW={toggleMW}>
          <Video videoSrc={currentVideo} />
        </ModelWindow>
      </section>
    </div>
  );
};

export default ReviewListSection;
