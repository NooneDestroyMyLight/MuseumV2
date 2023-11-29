import { FC, ReactNode } from "react";
import style from "./ReviewListSection.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
//
import { AnimatePresence } from "framer-motion";
//
import { reviewListData } from "../../interiorDesignC/galery/portfolioList/portfolioList.data";
import Button from "../../generalC/button/Button";
import ModelWindow from "../../../HOC/modelWindow/ModelWindow";
import Video from "../../generalC/video/Video";
//

import TextTitle from "../../mainScreenC/infoSection/textTitle/TextTitle";

import { useCurrentVideo } from "../../../hooks/useCurrentVideo";

interface SendReviewSectionProps {
  children?: ReactNode;
  //
}

const ReviewListSection: FC<SendReviewSectionProps> = ({}) => {
  const [currentVideo, isMWOpen, onVideoItemClick, toggleMW] =
    useCurrentVideo();
  return (
    <div className={style.reviewListSection}>
      <section
        className={`container-fluid ${style.reviewListSection} ${style.section}`}
      >
        <TextTitle
          title={["Client", "review"]}
          backText={"Recall"}
          colorStyle="textTitleLightStyle"
          //
        />
        <ul className="row">
          <li className={`col p-0 ${style.col}`}>
            <div className={style.list__review}>
              <AnimatePresence>
                {reviewListData.map(item => (
                  <div className={style.img}>
                    <img
                      src={item.imgSrc}
                      alt="review item"
                      className={style.img__review}
                    />
                    <Button
                      styles={"button__play__directorSection"}
                      onClick={() => onVideoItemClick(item.videoSrc)}
                    />
                    <ul className={style.img__description}>
                      <li className={style.boldItem}>{item.name}</li>
                      <li>
                        {item.category.map(inner => (
                          <p>{inner}</p>
                        ))}
                      </li>
                    </ul>
                  </div>
                ))}
              </AnimatePresence>
            </div>
          </li>
        </ul>
        <ModelWindow isOpen={isMWOpen} toggleMW={toggleMW}>
          <Video videoSrc={currentVideo} />
        </ModelWindow>
      </section>
    </div>
  );
};

export default ReviewListSection;
