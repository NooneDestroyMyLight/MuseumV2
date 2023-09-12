import { FC } from "react";
import style from "./HeaderNav.module.scss";

import { headerNavData } from "../headerNav.data";
import HeaderNavItem from "./headerNavItem/HeaderNavItem";
/////
import BurgerMenuIcon from "../../../../assets/burgerMenu/BurgerMenuIcon";
import CloseIcon from "../../../../assets/closeIcon/CloseIcon";

import "bootstrap/dist/css/bootstrap.min.css";

interface HeaderNavProps {
  textColor: string;
  isSticky: boolean;
  //
  setNavToggle: React.Dispatch<React.SetStateAction<boolean>>;
  navToggle: boolean;
}

const HeaderNav: FC<HeaderNavProps> = ({
  textColor,
  isSticky,
  //
  setNavToggle,
  navToggle,
}) => {
  const onBurgerButtonClick = (): void => {
    console.log("navToggle");
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
          <HeaderNavItem name={item.name} textColor={textColor} />
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
            color={isSticky ? "black" : "white"}
          />
        ) : (
          <BurgerMenuIcon color={isSticky ? "black" : "white"} />
        )}
      </button>
    </>
  );
};
export default HeaderNav;
