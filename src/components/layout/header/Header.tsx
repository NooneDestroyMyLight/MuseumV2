import { FC, useState } from "react";
import style from "./Header.module.scss";

import MainLogo from "../../../assets/mainLogo/mainLogo/MainLogo";
import HeaderNav from "./headerNav/HeaderNav";

interface HeaderProps {
  HeaderNavDropdownIsStickyStyle: string;
  HeaderNavDropdownNotStickyStyle: string;
  //
  isStickyMobileBackground: string;
  notStickedMobileBackground: string;
  //
  isSticky: boolean;
  //
  textColor: string;
  isStickyTextColor: string;
}

const Header: FC<HeaderProps> = ({
  HeaderNavDropdownIsStickyStyle,
  HeaderNavDropdownNotStickyStyle,
  //
  isStickyMobileBackground,
  notStickedMobileBackground,
  //
  isSticky,
  //
  textColor,
  isStickyTextColor,
}) => {
  const [navToggle, setNavToggle] = useState<boolean>(false);

  document.documentElement.style.setProperty(
    "--header--background-color-notSticked",
    notStickedMobileBackground
  );

  document.documentElement.style.setProperty(
    "--header--background-color-isSticky",
    isStickyMobileBackground
  );

  return (
    <header
      className={`
      ${style.header} 
      ${isSticky && style.sticked} 
      ${navToggle && style.burgerMenu__active}
      ${navToggle && !isSticky && style.notSticked}
      `}
    >
      <section className={`container-fluid ${style.header__container}`}>
        <div className={`row p-0`}>
          <div
            className={`col p-0 d-flex justify-content-between   ${style.header__container__links}`}
          >
            <MainLogo color={isSticky ? isStickyTextColor : textColor} />
            <HeaderNav
              HeaderNavDropdownIsStickyStyle={HeaderNavDropdownIsStickyStyle}
              HeaderNavDropdownNotStickyStyle={HeaderNavDropdownNotStickyStyle}
              //
              isStickyColor={isSticky ? isStickyTextColor : textColor}
              notStickyColor={isSticky ? isStickyTextColor : textColor}
              //
              textColor={isSticky ? isStickyTextColor : textColor}
              isSticky={isSticky}
              //
              setNavToggle={setNavToggle}
              navToggle={navToggle}
              //
            />
          </div>
        </div>
      </section>
    </header>
  );
};
export default Header;
