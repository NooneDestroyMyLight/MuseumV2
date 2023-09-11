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
    <header className={`${style.header} ${isSticky && style.active}`}>
      <section
        className={`container-fluid d-flex justify-content-between  ${style.header__Container}`}
      >
        <MainLogo
          color={isSticky ? isStickyColor : mainColor}
          // width={isSticky ? "141" : "109"}
          // height={isSticky ? "62" : "48"}
        />
        <HeaderNav
          textColor={isSticky ? isStickyColor : mainColor}
          isSticky={isSticky}
        />
      </section>
    </header>
  );
};
export default Header;
