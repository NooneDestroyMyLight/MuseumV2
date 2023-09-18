import { FC } from "react";
import style from "./FAQSectionItem.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export interface FAQSectionItemProps {
  title: string;
  discription: string;
  ////
  isDiscOpen: string;
  setDiscOpen: React.Dispatch<React.SetStateAction<string>>;
}

const FAQSectionItem: FC<FAQSectionItemProps> = ({
  title,
  discription,
  isDiscOpen,
  setDiscOpen,
}) => {
  const onItemClick = () => {
    setDiscOpen(isDiscOpen != title ? title : "");
  };

  return (
    <ul onClick={onItemClick} className={`${style.fAQSectionItem}`}>
      <li
        className={`
        ${style.fAQSectionItem__Container} 
        ${isDiscOpen === title && style.fAQSectionItem__Active}
        `}
        data-content={isDiscOpen === title ? "+" : "-"}
      >
        <label className={style.title}>{title}</label>
      </li>
      <div
        className={`${style.discription} ${style.subText} ${
          isDiscOpen === title && style.show
        }`}
      >
        <p className={style.discription__Content}>{discription}</p>
      </div>
    </ul>
  );
};

export default FAQSectionItem;
