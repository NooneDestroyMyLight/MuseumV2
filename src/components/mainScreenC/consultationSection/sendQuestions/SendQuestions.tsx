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
    <div className={` col-auto p-0`}>
      <div className={style.SendQuestionsContainer}>
        <div className={style.title}>
          <span className={style.subTitle}>{title}</span>
          <span>{subTitle}</span>
        </div>
        <div className={`${style.inputs}`}>
          <Input label="Your name *" StylesClass={"DarkStyleInput"} />
          <Input
            label="Phone number / email *"
            StylesClass={"DarkStyleInput"}
          />
        </div>
        <Textarea label="Your massage" />
        <button className={style.button}>Send massage</button>
      </div>
    </div>
  );
};

export default SendQuestions;
