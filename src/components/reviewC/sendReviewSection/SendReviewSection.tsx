import { FC, ReactNode } from "react";
import style from "./SendReviewSection.module.scss";

import "bootstrap/dist/css/bootstrap.min.css";

interface SendReviewSectionProps {
  children?: ReactNode;
  //
  title: string[];
}

const SendReviewSection: FC<SendReviewSectionProps> = ({ children, title }) => {
  return (
    <section className={style.sendReviewSection}>
      <ul
        className={`container-fluid  d-flex flex-column ${style.sendReviewSection__container}`}
      >
        <li className="row">
          <div className="col p-0">
            <h2 className={style.sendReviewSection__container__title}>
              {title.map(item => (
                <p>{item}</p>
              ))}
            </h2>
          </div>
        </li>
        <li
          className={`row justify-content-between ${style.sendReviewSection__children}`}
        >
          {children && children}
        </li>
      </ul>
    </section>
  );
};

export default SendReviewSection;
