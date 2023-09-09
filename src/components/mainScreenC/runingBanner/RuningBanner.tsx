import { FC } from "react";
import style from "./RuningBanner.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

interface RuningBannerProps {}

const RuningBanner: FC<RuningBannerProps> = () => {
  return (
    <section className={style.runingLineContainer}>
      <div className={` d-flex ${style.runingLineContent}`}>
        <h2 className={style.h1}>
          MUSEUM INTERIOR MUSEUM INTERIOR MUSEUM INTERIOR
        </h2>
        <h2 className={style.h1}>
          MUSEUM INTERIOR MUSEUM INTERIOR MUSEUM INTERIOR
        </h2>
        <h2 className={style.h1}>
          MUSEUM INTERIOR MUSEUM INTERIOR MUSEUM INTERIOR
        </h2>
      </div>
    </section>
  );
};

export default RuningBanner;
