import { FC } from "react";
import style from "./Dropdown.module.scss";

interface DropdownProps {
  color: string;
}

const Dropdown: FC<DropdownProps> = ({ color }) => {
  return (
    <div style={{ backgroundColor: color }} className={style.dropdown}></div>
  );
};
export default Dropdown;
