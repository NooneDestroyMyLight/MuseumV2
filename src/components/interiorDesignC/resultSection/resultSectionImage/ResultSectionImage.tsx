import { FC, useState } from "react";
import style from "./ResultSectionImage.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { ReactCompareSlider } from "react-compare-slider";
import { ReactCompareSliderImage } from "react-compare-slider";

const ResizeTumblerButton: FC = () => {
  return (
    <>
      <div className={style.resizeTumbler} aria-hidden="true"></div>
      <ul className={style.resizeTumblerButt} aria-hidden="true">
        <li className={style.leftIcon}></li>
        <li className={style.rightIcon}></li>
      </ul>
    </>
  );
};

export interface ResultSectionImageProps {
  firstImageSrc: string;
  firstImageLabel: string;
  firstImageAlt: string;
  ///
  secondImageSrc: string;
  secondImageLabel: string;
  secondImageAlt: string;
}

const ResultSectionImage: FC<ResultSectionImageProps> = ({
  firstImageSrc,
  firstImageAlt,
  firstImageLabel,
  //
  secondImageSrc,
  secondImageAlt,
  secondImageLabel,
}) => {
  const [currentWidth, setCurrentWidth] = useState<string>("50"); //default value
  return (
    <div className={`col-6 d-flex flex-column p-0 ${style.resultSectionImage}`}>
      <ReactCompareSlider
        handle={<ResizeTumblerButton />}
        position={50}
        itemOne={
          <ReactCompareSliderImage
            src={firstImageSrc}
            srcSet={firstImageSrc}
            alt={firstImageAlt}
          />
        }
        itemTwo={
          <ReactCompareSliderImage
            src={secondImageSrc}
            srcSet={secondImageSrc}
            alt={secondImageAlt}
          />
        }
      />
      <ul className="d-flex justify-content-between">
        <li className={style.bold}>{firstImageLabel}</li>
        <li className={style.bold}>{secondImageLabel}</li>
      </ul>
    </div>
  );
};

export default ResultSectionImage;
