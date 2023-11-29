import { FC } from "react";
import style from "./HeaderNav.module.scss";

import { headerNavData } from "../headerNav.data";
import HeaderNavItem from "./headerNavItem/HeaderNavItem";
/////
import BurgerMenuIcon from "../../../../assets/burgerMenu/BurgerMenuIcon";
import CloseIcon from "../../../../assets/closeIcon/CloseIcon";

import "bootstrap/dist/css/bootstrap.min.css";

interface HeaderNavProps {
  HeaderNavDropdownIsStickyStyle: string;
  HeaderNavDropdownNotStickyStyle: string;
  //
  isStickyColor: string;
  notStickyColor: string;
  //
  textColor: string;
  isSticky: boolean;
  //
  setNavToggle: React.Dispatch<React.SetStateAction<boolean>>;
  navToggle: boolean;
}

const HeaderNav: FC<HeaderNavProps> = ({
  HeaderNavDropdownIsStickyStyle,
  HeaderNavDropdownNotStickyStyle,
  //
  isStickyColor,
  notStickyColor,
  //
  textColor,
  isSticky,
  //
  setNavToggle,
  navToggle,
}) => {
  const onBurgerButtonClick = (): void => {
    if (navToggle) {
      document.body.classList.remove("modal-open");
    } else if (!navToggle) {
      document.body.classList.add("modal-open");
    }
    setNavToggle(!navToggle);
  };

  return (
    <>
      <div className={`${style.linkGroup} ${navToggle && style.showLinkGroup}`}>
        {headerNavData.map(item => (
          <HeaderNavItem
            isStickyStyle={HeaderNavDropdownIsStickyStyle}
            notStickyStyle={HeaderNavDropdownNotStickyStyle}
            //
            textColor={textColor}
            isSticky={isSticky}
            //
            navToggle={navToggle} //Burger Menu
            //
            navItem={item}
          />
        ))}
      </div>
      <button
        onClick={() => onBurgerButtonClick()}
        className={style.headerNav__BurgerMenu}
      >
        {navToggle ? (
          <CloseIcon
            width={"30"}
            height={"30"}
            color={isSticky ? isStickyColor : notStickyColor}
          />
        ) : (
          <BurgerMenuIcon color={isSticky ? isStickyColor : notStickyColor} />
        )}
      </button>
    </>
  );
};
export default HeaderNav;
