import { FC } from "react";
import style from "./ProcessSectionItem.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export interface ProcessSectionItemProps {
  label: string[];
  icon: string;
  isWide?: boolean;
}

const ProcessSectionItem: FC<ProcessSectionItemProps> = ({
  label,
  icon,
  isWide,
}) => {
  return (
    <ul className={`d-flex flex-column ${style.processSectionItem}`}>
      <li>
        <img
          src={icon}
          alt="icon"
          className={`${style.icon} ${isWide && style.isWide}`}
        />
      </li>
      <h4 className={`${style.label}`}>
        {label.map(item => (
          <p>{item}</p>
        ))}
      </h4>
    </ul>
  );
};

export default ProcessSectionItem;
