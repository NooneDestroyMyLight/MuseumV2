import { FC } from "react";
import style from "./SendQuestions.module.scss";

import "bootstrap/dist/css/bootstrap.min.css";
import Input from "./input/Input";
import Textarea from "./textAriea/Textarea";

interface SendQuestionsProps {
  title: string;
  subTitle?: string;

  sendQuestionsClassName?: string;
  inputClassName?: string;
  textareaClassName?: string;
}

const SendQuestions: FC<SendQuestionsProps> = ({
  title,
  subTitle,
  //
  sendQuestionsClassName,
  inputClassName,
  textareaClassName,
}) => {
  return (
    <div
      className={`col-auto p-0 ${style[sendQuestionsClassName as string]} ${
        style.sendQuestions
      }`}
    >
      <div className={style.SendQuestionsContainer}>
        <div className={style.title}>
          <span className={style.title__text}>{title}</span>
          <span>{subTitle}</span>
        </div>
        <div className={`${style.inputs}`}>
          <Input
            label="Your name *"
            className={
              inputClassName ? (inputClassName as string) : "DarkStyleInput"
            }
          />
          <Input
            label="Phone number / email *"
            className={
              inputClassName ? (inputClassName as string) : "DarkStyleInput"
            }
          />
        </div>
        <Textarea label="Your massage" className={textareaClassName} />
        <button className={style.button}>Send massage</button>
      </div>
    </div>
  );
};

export default SendQuestions;
