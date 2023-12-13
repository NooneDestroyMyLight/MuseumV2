import { FC } from "react";
import style from "./InteriorDesignFromBlockChild.module.scss";

import TextBlock from "../../../../mainScreenC/infoSection/textBlock/TextBlock";
import Input from "../../../../mainScreenC/consultationSection/sendQuestions/input/Input";
//
import Silder from "../../slider/Silder";

interface InteriorDesignFromBlockChildProps {
  textBlockData: string[];
  title: string;
  buttonText: string;
  //
  sliderData: string[];
}

const InteriorDesignFromBlockChild: FC<InteriorDesignFromBlockChildProps> = ({
  textBlockData,
  title,
  buttonText,
  //
  sliderData,
}) => {
  return (
    <>
      <div
        className={`col-auto p-0 d-flex flex-column ${style.formBlock__container__discription}`}
      >
        <h1>{title}</h1>
        <TextBlock text={textBlockData} />
        <Input label="Your name *" StylesClass="LightStyleInput" />
        <Input label="Phone number / email *" StylesClass="LightStyleInput" />
        <button className={style.button}>{buttonText}</button>
      </div>
      <Silder sliderData={sliderData} />
    </>
  );
};
export default InteriorDesignFromBlockChild;
