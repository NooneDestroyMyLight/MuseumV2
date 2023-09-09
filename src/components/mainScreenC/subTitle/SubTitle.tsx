import { FC } from "react";
import style from "./Subtitle.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

interface SubTitleProps {
  label: string;
  subLabel: string;
}

const SubTitle: FC<SubTitleProps> = ({ label, subLabel }) => {
  return (
    <div className="d-flex flex-column">
      <span className={style.subTitle}>{label}</span>
      <span className={style.contactText}>{subLabel}</span>
    </div>
  );
};

export default SubTitle;
