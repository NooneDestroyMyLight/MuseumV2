import { FC, ReactNode, useState } from "react";
import style from "./BoxMenu.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import BoxMenuLayout from "./boxMenuLayout/BoxMenuLayout";

export interface InfoSectionProps {}

const BoxMenu: FC<InfoSectionProps> = ({}) => {
  const [currentBackground, setCurrentBackground] = useState<null | string>(
    null
  );
  return (
    <section className={` ${style.boxMenuContainer}`}>
      <div className={`container  ${style.boxMenuTitleContainer}`}>
        <div className="row">
          <BoxMenuLayout
            setCurrentBackground={setCurrentBackground}
            currentBackground={currentBackground}
          />
        </div>
      </div>

      <div
        className={`${style.boxMenuItemContainer} ${style.topLeftImg}`}
        style={{
          backgroundImage: currentBackground
            ? currentBackground
            : `url("/boxMenuImg/design-web.jpg") `,

          // backgroundSize: "100vw 800px ",
        }}
        onMouseEnter={() =>
          setCurrentBackground(`url("/boxMenuImg/design-web.jpg") `)
        }
        onMouseLeave={() => {
          setCurrentBackground(null);
        }}
      ></div>
      <div
        className={`${style.boxMenuItemContainer} ${style.topRightImg}`}
        style={{
          backgroundImage: currentBackground
            ? currentBackground
            : `url("/boxMenuImg/remont-web.jpg") `,
        }}
        onMouseEnter={() =>
          setCurrentBackground(`url("/boxMenuImg/remont-web.jpg") `)
        }
        onMouseLeave={() => {
          setCurrentBackground(null);
        }}
      ></div>
      <div
        className={`${style.boxMenuItemContainer} ${style.bottomLeftImg}`}
        style={{
          backgroundImage: currentBackground
            ? currentBackground
            : `url("/boxMenuImg/remont-3.jpg")`,
        }}
        onMouseEnter={() =>
          setCurrentBackground(`url("/boxMenuImg/remont-3.jpg")`)
        }
        onMouseLeave={() => {
          setCurrentBackground(null);
        }}
      ></div>
      <div
        className={`${style.boxMenuItemContainer} ${style.bottomRightImg}`}
        style={{
          backgroundImage: currentBackground
            ? currentBackground
            : `url("/boxMenuImg/showroom.jpg")`,
        }}
        onMouseEnter={() =>
          setCurrentBackground(`url("/boxMenuImg/showroom.jpg")`)
        }
        onMouseLeave={() => {
          setCurrentBackground(null);
        }}
      ></div>
    </section>
  );
};

export default BoxMenu;
