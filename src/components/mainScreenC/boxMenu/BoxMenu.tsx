import { FC, useState } from "react";
import style from "./BoxMenu.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import BoxMenuLayout from "./boxMenuLayout/BoxMenuLayout";

import { boxMenuBackgroundDatas } from "./boxMenuBackground.data";

export interface InfoSectionProps {}

const BoxMenu: FC<InfoSectionProps> = ({}) => {
  const [currentBackground, setCurrentBackground] = useState<null | string>(
    null
  );
  return (
    <section className={` ${style.boxMenuContainer}`}>
      <div className={`container-fluid ${style.boxMenuTitleContainer}`}>
        <BoxMenuLayout
          setCurrentBackground={setCurrentBackground}
          currentBackground={currentBackground}
        />
      </div>
      {boxMenuBackgroundDatas.map(item => (
        <div
          className={`${style.boxMenuItemContainer} ${style[item.position]}`}
          style={{
            backgroundImage: currentBackground
              ? currentBackground
              : item.backgroundLink,
          }}
          onMouseEnter={() => setCurrentBackground(item.backgroundLink)}
          onMouseLeave={() => {
            setCurrentBackground(null);
          }}
        ></div>
      ))}
    </section>
  );
};

export default BoxMenu;
