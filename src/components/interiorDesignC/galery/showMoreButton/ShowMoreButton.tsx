import { FC } from "react";
import Button from "../../../generalC/button/Button";
import style from "./ShowMoreButton.module.scss";

export interface ShowMoreButtonProps {
  isHide?: boolean;
  //
  showButtonText: string;
  //
  onButtonClick: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

const ShowMoreButton: FC<ShowMoreButtonProps> = ({
  isHide,
  //
  showButtonText,
  //
  onButtonClick,
}) => {
  return (
    <div className={` ${isHide && style.hide} ${style.showMoreButton}`}>
      <Button
        buttonText={showButtonText}
        onClick={onButtonClick}
        styles={"boldItem"}
      />
      <div
        style={{ width: "30px", height: "25px" }}
        className={style.arrowIcon}
      ></div>
    </div>
  );
};

export default ShowMoreButton;
