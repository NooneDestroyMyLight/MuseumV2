import { FC } from "react";
import style from "./Estimate.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { IEstimateCostSectionData } from "../../../page/services/interiorDesign/interiorDesign.data";
import Button from "../../generalC/button/Button";

interface EstimateCostProps {
  estimateCostSectionData: IEstimateCostSectionData;
}

const EstimateCost: FC<EstimateCostProps> = ({ estimateCostSectionData }) => {
  const { title, buttonText, discription } = estimateCostSectionData;

  return (
    <section className={`${style.estimateCost} `}>
      <ul
        className={`d-flex flex-column container-fluid p-0 ${style.estimateCost__container}`}
      >
        <h2>
          {title.map(item => (
            <p>{item}</p>
          ))}
        </h2>
        <p className={style.estimateCost__container__discription}>
          {discription}
        </p>
        <li className={style.eestimateCost__container__button}>
          <Button
            buttonText={buttonText}
            styles={"estimateCostSectionButton"}
          />
        </li>
      </ul>
      <img
        src="../../../../public/InteriorDesignPage/estimateCostSection/10en.png"
        alt="estimateCostImg"
        className={style.img}
      />
    </section>
  );
};

export default EstimateCost;
