import { FC } from "react";
import style from "./HeaderNav.module.scss";

import { headerNavData } from "../headerNav.data";

import HeaderNavItem from "./headerNavItem/HeaderNavItem";

import "bootstrap/dist/css/bootstrap.min.css";

interface HeaderNavProps {
  textColor: string;
}

const HeaderNav: FC<HeaderNavProps> = ({ textColor }) => {
  return (
    <div className={` d-flex   align-items-center ${style.headerNav}`}>
      {headerNavData.map(item => (
        <HeaderNavItem name={item.name} textColor={textColor} />
      ))}
      <button className={style.headerNav__BurgerMenu}></button>
    </div>
  );
};
export default HeaderNav;
