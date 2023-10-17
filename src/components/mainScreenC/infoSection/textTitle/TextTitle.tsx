import { FC, ReactNode } from "react";
import style from "./TextTitle.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export interface TextTitleProps {
  children?: ReactNode;
  title: string[];
  backText: string;
  colorStyle: string;
  //
}

const TextTitle: FC<TextTitleProps> = ({
  title,
  backText,
  children,
  colorStyle,
  //
}) => {
  return (
    <div className={`row d-flex justify-content-between `}>
      <div className="col p-0">
        <div className={style[colorStyle]}>
          <h2 className={style.title} data-content={backText}>
            {title.map(item => (
              <p>{item}</p>
            ))}
          </h2>
          <div>
            {children && children}
            {/* <ButtonArrow text={buttonText} color="black" /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextTitle;
