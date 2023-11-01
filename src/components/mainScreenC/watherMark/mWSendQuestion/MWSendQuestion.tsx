import { FC } from "react";
import style from "./MWSendQuestion.module.scss";
import Input from "../../consultationSection/sendQuestions/input/Input";
import Textarea from "../../consultationSection/sendQuestions/textAriea/Textarea";
import Button from "../../../generalC/button/Button";

interface MWSendQuestionProps {
  title: string;
  subTitle: string;
  //
  inputClassName: string;
  textareaClassName: string;
  //
  onCloseIconClick: () => void;
}

const MWSendQuestion: FC<MWSendQuestionProps> = ({
  title,
  subTitle,
  //
  inputClassName,
  textareaClassName,
  //
  onCloseIconClick,
}) => {
  return (
    <div className={style.mWSendQuestion__wrapper}>
      <ul className={style.mWSendQuestion}>
        <li className={style.mWSendQuestion__title}>
          <p className={style.mWSendQuestion__title__mainText}>{title}</p>
          <p>{subTitle}</p>
        </li>
        <li
          onClick={onCloseIconClick}
          className={style.mWSendQuestion__button__close}
        />
        <li className={style.mWSendQuestion__input__name}>
          <Input
            label="Your name *"
            className={
              inputClassName ? (inputClassName as string) : "DarkStyleInput"
            }
          />
        </li>
        <li className={style.mWSendQuestion__input__email}>
          <Input
            label="Phone number / email *"
            className={
              inputClassName ? (inputClassName as string) : "DarkStyleInput"
            }
          />
        </li>
        <li className={style.mWSendQuestion__textarea}>
          <Textarea label="Your massage" className={textareaClassName} />
        </li>
        <li className={style.mWSendQuestion__button}>
          <Button styles={"button__mWSendQuestion"} buttonText="Sand massage" />
        </li>
      </ul>
    </div>
  );
};

export default MWSendQuestion;
