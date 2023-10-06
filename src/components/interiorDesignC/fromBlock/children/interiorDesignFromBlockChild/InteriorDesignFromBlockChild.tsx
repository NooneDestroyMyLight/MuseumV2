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
}

const InteriorDesignFromBlockChild: FC<InteriorDesignFromBlockChildProps> = ({
  textBlockData,
  title,
  buttonText,
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
      {/* <div className={`col-auto p-0 ${style.formBlock__sidebar}`}> */}
      <Silder />
      {/* </div> */}
    </>
  );
};
export default InteriorDesignFromBlockChild;
