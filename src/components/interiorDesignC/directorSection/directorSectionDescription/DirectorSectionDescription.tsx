import { FC } from "react";
import style from "./DirectorSectionDescription.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { IDirectorSectionDesription } from "../directorSectionDesription.data";
import ButtonArrow from "../../../mainScreenC/buttonArrow/ButtonArrow";

interface DirectorSectionDiscriptionProps {
  text: IDirectorSectionDesription;
}

const DirectorSectionDescription: FC<DirectorSectionDiscriptionProps> = ({
  text,
}) => {
  const { title, description, topic, author, buttonText } = text;
  return (
    <div className={style.directorSectionDescription}>
      <div
        className={`d-flex flex-column ${style.directorSectionDescription__container}`}
      >
        <h4 className={style.title}>
          {title.map(item => (
            <p>{item}</p>
          ))}
        </h4>
        <p>{description}</p>

        <ul>
          {topic.map(item => (
            <li className={item.isBold ? style.boldItem : ""}>{item.text}</li>
          ))}
        </ul>

        <ul>
          {author.map(item => (
            <li className={item.isBold ? style.boldItem : ""}>{item.text}</li>
          ))}
        </ul>
      </div>
      <ButtonArrow text={buttonText} color={"black"} />
    </div>
  );
};

export default DirectorSectionDescription;
