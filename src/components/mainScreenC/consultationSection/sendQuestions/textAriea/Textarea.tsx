import { FC } from "react";
import style from "./Textarea.module.scss";

import "bootstrap/dist/css/bootstrap.min.css";

interface TextareaProps {
  label: string;
  className?: string;
}

const Textarea: FC<TextareaProps> = ({ label, className }) => {
  return (
    <div className={style[className ? className : "textarea"]}>
      <fieldset className={style.inputGroup}>
        <textarea cols={30} rows={3} className={style.input} placeholder=" " />
        <label className={style.inputLabel}>{label}</label>
      </fieldset>
    </div>
  );
};

export default Textarea;
