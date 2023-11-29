import { FC } from "react";
import style from "./TextTitleWithArrowButton.module.scss";
import TextTitle from "../../components/mainScreenC/infoSection/textTitle/TextTitle";
import ButtonArrow from "../../components/mainScreenC/buttonArrow/ButtonArrow";

interface TextTitleWithArrowButtonProps {
  textTitleStyle: string;
  //
  title: string[];
  backText: string;
  //
  buttonText: string;
  buttonColor: string;
}

const TextTitleWithArrowButton: FC<TextTitleWithArrowButtonProps> = ({
  textTitleStyle,
  //
  title,
  backText,
  //
  buttonText,
  buttonColor,
}) => {
  return (
    <TextTitle
      title={title}
      backText={backText}
      colorStyle={textTitleStyle} //"textTitleLightStyle"
    >
      <div
        className={`align-self-end ${style.TextTitleWithArrowButton__button}`}
      >
        <ButtonArrow text={buttonText} color={buttonColor} />
      </div>
    </TextTitle>
  );
};
export default TextTitleWithArrowButton;
