import { FC } from "react";
import style from "./BoxMenuLayout.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import TitleWithButton from "../../watherMark/titleWithButton/TitleWithButton";
import { titleBoxMenuDatas } from "./titleBoxMenu.data";

interface BoxMenuLayoutProps {
  setCurrentBackground: React.Dispatch<React.SetStateAction<string | null>>;
  currentBackground: string | null;
}

const BoxMenuLayout: FC<BoxMenuLayoutProps> = ({
  setCurrentBackground,
  currentBackground,
}) => {
  return (
    <div className="row">
      {titleBoxMenuDatas.map(item => (
        <div
          className={`col-md-6 d-flex align-items-center   ${style.boxMenuTitle}`}
          onMouseEnter={() => setCurrentBackground(item.backgroundImg)}
          onMouseLeave={() => {
            setCurrentBackground(null);
          }}
        >
          <TitleWithButton
            marginTop="38px"
            titleText={item.text}
            color={
              currentBackground === null ||
              currentBackground === item.backgroundImg
                ? "white"
                : "rgba(255, 255, 255, 0.3)"
            }
            fontSize="34px"
          />
        </div>
      ))}
    </div>
  );
};

export default BoxMenuLayout;
