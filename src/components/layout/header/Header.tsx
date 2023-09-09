import { FC, useEffect, useRef, useState } from "react";
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
  return (
    <header className={`${style.header} ${isSticky && style.active}`}>
      <section
        className={`container d-flex justify-content-between  ${style.header__Container}`}
      >
        <MainLogo color={isSticky ? isStickyColor : mainColor} />
        <HeaderNav textColor={isSticky ? isStickyColor : mainColor} />
      </section>
    </header>
  );
};
export default Header;
