import { FC, useState } from "react";
import style from "./Header.module.scss";

import MainLogo from "../../../assets/mainLogo/mainLogo/MainLogo";
import HeaderNav from "./headerNav/HeaderNav";

import "bootstrap/dist/css/bootstrap.min.css";

interface HeaderProps {
  isSticky: boolean;
  //////////////////
  mainColor: string;
  isStickyColor: string;
}

const Header: FC<HeaderProps> = ({ isSticky, mainColor, isStickyColor }) => {
  const [navToggle, setNavToggle] = useState<boolean>(false);
  return (
    <header
      className={`
      ${style.header} 
      ${isSticky && style.sticked} 
      ${navToggle && style.burgerMenuActive}
      ${navToggle && !isSticky && style.notSticked}
      `}
    >
      <section className={`container-fluid ${style.header__Container}`}>
        <div className={`row `}>
          <div
            className={`col p-0 d-flex justify-content-between   ${style.header__Container__Links}`}
          >
            <MainLogo
              color={isSticky ? isStickyColor : mainColor}
              // width={isSticky ? "141" : "109"}
              // height={isSticky ? "62" : "48"}
            />
            <HeaderNav
              setNavToggle={setNavToggle}
              navToggle={navToggle}
              //
              textColor={isSticky ? isStickyColor : mainColor}
              isSticky={isSticky}
            />
          </div>
        </div>
      </section>
    </header>
  );
};
export default Header;
