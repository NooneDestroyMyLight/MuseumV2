import { FC, ReactNode } from "react";
import style from "./TextTitle.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import ButtonArrow from "../../buttonArrow/ButtonArrow";

import { InfoSectionProps } from "../InfoSection";

interface TextTitleProps {
  children?: ReactNode;
  title: string[];
  backText: string;
  colorStyle: string;
}

const TextTitle: FC<TextTitleProps> = ({
  title,
  backText,
  children,
  colorStyle,
}) => {
  return (
    <div className={`col d-flex justify-content-between  ${style[colorStyle]}`}>
      <h2 className={style.title} data-content={backText}>
        {title.map(item => (
          <p>{item}</p>
        ))}
      </h2>
      <div className="d-flex align-items-start">
        {children && children}
        {/* <ButtonArrow text={buttonText} color="black" /> */}
      </div>
    </div>
  );
};

export default TextTitle;
