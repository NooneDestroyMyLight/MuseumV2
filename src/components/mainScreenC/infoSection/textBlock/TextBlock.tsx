import { FC, ReactNode } from "react";
import style from "./textBlock.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export interface TextBlockProps {
  styles?: string; //Look module
  text: string[];
}

const TextBlock: FC<TextBlockProps> = ({ text, styles }) => {
  return (
    <article
      className={`d-flex flex-column  ${style.textBlockContainer} ${
        styles && style[styles]
      }`}
    >
      {text && text.map(item => <p className={style.paragraph}>{item}</p>)}
    </article>
  );
};

export default TextBlock;
