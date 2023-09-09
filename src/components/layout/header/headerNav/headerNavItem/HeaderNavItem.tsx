import { FC } from "react";
import style from "./HeaderNavItem.module.scss";

import "bootstrap/dist/css/bootstrap.min.css";

interface IHeaderNavItemProps {
  name: string;
  textColor: string;
}

const HeaderNavItem: FC<IHeaderNavItemProps> = ({ name, textColor }) => {
  return (
    <label
      style={{ color: textColor }}
      className={`col-auto text-nowrap ${style.headerNavItamContainer}`}
    >
      {name}
    </label>
  );
};
export default HeaderNavItem;
