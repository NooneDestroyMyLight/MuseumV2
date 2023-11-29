import { FC, useState } from "react";
import style from "./CasesHeader.module.scss";

export interface CasesHeaderProps {
  title: string;
  category: string;
}

const CasesHeader: FC<CasesHeaderProps> = ({ title, category }) => {
  return (
    <section className={style.casesHeader}>
      <img
        src="https://museum-interior.com/wp-content/uploads/2023/07/Gostinaja_Vid2_logo.jpg"
        alt="Cases background img"
        className={style.background}
      />
      <div className={`container-fluid p-0 ${style.casesHeader__container}`}>
        <div className={style.casesHeader__container__topic}>
          <h3>{title}</h3>
          <span>{category}</span>
        </div>
      </div>
    </section>
  );
};

export default CasesHeader;
