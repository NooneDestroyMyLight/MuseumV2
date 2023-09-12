import { FC, ReactNode, memo } from "react";
import style from "./Dropdown.module.scss";

interface DropdownProps {
  styleClass: string;
  children: ReactNode;
}

const Dropdown: FC<DropdownProps> = memo(({ children, styleClass }) => {
  console.log("Dropdown Open");
  return (
    <div className={`${style[styleClass]} ${style.dropdown}`}>{children}</div>
  );
});
export default Dropdown;
