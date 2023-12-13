import { FC } from "react";
//
import style from "./ConstructionAndRenovationFormBlockChild.module.scss";
//
import TextBlock from "../../../../mainScreenC/infoSection/textBlock/TextBlock";
import ButtonArrow from "../../../../mainScreenC/buttonArrow/ButtonArrow";
import Input from "../../../../mainScreenC/consultationSection/sendQuestions/input/Input";
//
import Poster from "../../../directorSection/poster/Poster";

interface InteriorDesignFromBlockChildProps {
  textBlockData: string[];
  title: string;
  //
  buttonArrowText: string;
  //
  buttonText: string;
}

const ConstructionAndRenovationFormBlockChild: FC<
  InteriorDesignFromBlockChildProps
> = ({
  textBlockData,
  title,
  //
  buttonArrowText,
  //
  buttonText,
}) => {
  return (
    <>
      <div
        className={`col-auto p-0 d-flex flex-column ${style.formBlock__container__discription}`}
      >
        <h1>{title}</h1>
        <TextBlock text={textBlockData} />
        <ButtonArrow color="black" text={buttonArrowText} />
        <Input label="Your name *" StylesClass="LightStyleInput" />
        <Input label="Phone number / email *" StylesClass="LightStyleInput" />
        <button className={style.button}>{buttonText}</button>
      </div>
      {/* <div className="col-auto p-0 d-flex"> */}
      <Poster
        className="formBlockSize"
        imageSrc="https://museum-interior.com/wp-content/uploads/2020/11/img.jpg"
        //
        title="Renovation apartment in 1 minute"
        //
        videoSrc={"https://www.youtube.com/watch?v=5zCul8AtKhw"}
      />
      {/* </div> */}
    </>
  );
};
export default ConstructionAndRenovationFormBlockChild;
