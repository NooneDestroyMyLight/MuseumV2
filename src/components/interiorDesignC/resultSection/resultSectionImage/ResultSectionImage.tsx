import { FC, MouseEventHandler, ReactNode, useRef, useState } from "react";

import style from "./ResultSectionImage.module.scss";

import "bootstrap/dist/css/bootstrap.min.css";

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
  firstImageLabel,
  firstImageAlt,
  //
  secondImageSrc,
  secondImageLabel,
  secondImageAlt,
}) => {
  const [currentWidth, setCurrentWidth] = useState<string>("50"); //default value
  return (
    <div className={`col-6 d-flex flex-column p-0 ${style.resultSectionImage}`}>
      <div className={style.resultSectionImage__container}>
        <div className={style.resultSectionImage__container__inner}>
          <img
            src={firstImageSrc}
            alt={firstImageAlt}
            className={`${style.fistImage} ${style.image}`}
          />

          <img
            src={secondImageSrc}
            style={{
              width: `${currentWidth}%`,
            }}
            className={`${style.secondImage} ${style.image}`}
          />
        </div>
        <input
          type="range"
          min="0"
          max="100"
          step="0.01"
          aria-label="Percentage of before image show"
          className={style.resizeBar}
          onInput={(e: React.ChangeEvent<HTMLInputElement>) =>
            setCurrentWidth(e.target.value)
          }
        />
        <div
          className={style.resizeTumbler}
          aria-hidden="true"
          style={{ left: `${currentWidth}%` }}
        ></div>
        <ul
          className={style.resizeTumblerButt}
          aria-hidden="true"
          style={{ left: `${currentWidth}%` }}
        >
          <li className={style.leftIcon}></li>
          <li className={style.rightIcon}></li>
        </ul>
      </div>
      <ul className="d-flex justify-content-between">
        <li className={style.bold}>{firstImageLabel}</li>
        <li className={style.bold}>{secondImageLabel}</li>
      </ul>
    </div>
  );
};

export default ResultSectionImage;
