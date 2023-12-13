import { FC, useMemo } from "react";
import style from "./HeaderNavItem.module.scss";

import "bootstrap/dist/css/bootstrap.min.css";
import { IHeaderNav } from "../../headerNav.data";
import Dropdown from "../../../../../HOC/dropdown/Dropdown";

interface IHeaderNavItemProps {
  isStickyStyle: string;
  notStickyStyle: string;
  //
  navItem: IHeaderNav;
  textColor: string;
  isSticky: boolean;
  navToggle: boolean;
}

const HeaderNavItem: FC<IHeaderNavItemProps> = ({
  isStickyStyle,
  notStickyStyle,
  //
  navItem,
  textColor,
  isSticky,
  navToggle,
}) => {
  return (
    <label
      style={{ color: textColor }}
      className={`text-nowrap ${style.headerNavItamContainer}`}
    >
      {navItem.name}
      <div className={style.subMenu}>
        {navItem.subMenu && !navToggle && (
          <Dropdown
            styleClass={isSticky ? isStickyStyle : notStickyStyle} //Its styles take from Dropdown.scss Look that
          >
            {navItem.subMenu.map(item => (
              <label className={`text-nowrap ${style.headerNavItamContainer}`}>
                {item.name}
              </label>
            ))}
          </Dropdown>
        )}
      </div>

      {navItem.subMenu && navToggle && (
        <div className={style.subMenuMobile}>
          {navItem.subMenu.map(item => (
            <label
              style={{ color: textColor }}
              className={`text-nowrap ${style.subItem}`}
            >
              {item.name}
            </label>
          ))}
        </div>
      )}
    </label>
  );
};
export default HeaderNavItem;
