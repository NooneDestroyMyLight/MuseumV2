import { FC } from "react";
import style from "./HeaderNav.module.scss";

import { headerNavData } from "../headerNav.data";

import HeaderNavItem from "./headerNavItem/HeaderNavItem";

import "bootstrap/dist/css/bootstrap.min.css";
import BurgerMenuIcon from "../../../../assets/burgerMenu/BurgerMenuIcon";

interface HeaderNavProps {
  textColor: string;
  isSticky: boolean;
}

const HeaderNav: FC<HeaderNavProps> = ({ textColor, isSticky }) => {
  return (
    <div className={` d-flex   align-items-center ${style.headerNav}`}>
      {headerNavData.map(item => (
        <HeaderNavItem name={item.name} textColor={textColor} />
      ))}
      <button className={style.headerNav__BurgerMenu}>
        <BurgerMenuIcon color={isSticky ? "black" : "white"} />
      </button>
    </div>
  );
};
export default HeaderNav;
