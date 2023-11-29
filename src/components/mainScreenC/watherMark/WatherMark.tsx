import { FC } from "react";
import { useToggle } from "../../../hooks/useToggle";
import style from "./WatherMark.module.scss";

import ButtonArrow from "../buttonArrow/ButtonArrow";
//
import ModelWindow from "../../../HOC/modelWindow/ModelWindow";
import MWSendQuestion from "./mWSendQuestion/MWSendQuestion";

interface WatherMarkProps {}

const WatherMark: FC<WatherMarkProps> = ({}) => {
  const [isMWOpen, toggleMW] = useToggle(false);

  return (
    <div className={`row d-flex flex-column  ${style.waterMark}`}>
      <div>
        <h1 className={`col ${style.h1title}`}>
          Interior design <br /> Construction and renovation <br />
          Architectural design
        </h1>
        <div onClick={toggleMW} className={`col ${style.buttonArrowContainer}`}>
          <ButtonArrow color="white" text={"Connect us"} />
        </div>
      </div>
      <ModelWindow isOpen={isMWOpen} toggleMW={toggleMW}>
        <MWSendQuestion
          title="Connect us"
          subTitle="Just write to us"
          //
          inputClassName="LightStyleInput"
          textareaClassName={"textarea__theme__black"}
          onCloseIconClick={toggleMW}
        />
      </ModelWindow>
    </div>
  );
};

export default WatherMark;
