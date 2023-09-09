import { FC } from "react";
import style from "./SendQuestions.module.scss";

import "bootstrap/dist/css/bootstrap.min.css";
import Input from "./input/Input";
import Textarea from "./textAriea/Textarea";

interface SendQuestionsProps {
  title: string;
  subTitle: string;
}

const SendQuestions: FC<SendQuestionsProps> = ({ title, subTitle }) => {
  return (
    <div className={`col-auto  ${style.SendQuestionsContainer}`}>
      <div className={style.title}>
        <span className={style.subTitle}>{title}</span>
        <span>{subTitle}</span>
      </div>
      <div className={`${style.inputs}`}>
        <Input label="Your name *" />
        <Input label="Phone number / email *" />
      </div>
      <Textarea label="Your massage" />
      <button className={style.button}>Send your massage</button>
    </div>
  );
};

export default SendQuestions;
