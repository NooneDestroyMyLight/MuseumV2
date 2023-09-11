import { FC } from "react";

interface BurgerMenuIconProps {
  color: string;
  // width: string;
  // height: string;
}

const BurgerMenuIcon: FC<BurgerMenuIconProps> = ({ color }) => {
  return (
    <svg
      width="32"
      height="22"
      viewBox="0 0 32 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line y1="1" x2="32" y2="1" stroke={color} stroke-width="2" />
      <line y1="11" x2="32" y2="11" stroke={color} stroke-width="2" />
      <line y1="21" x2="32" y2="21" stroke={color} stroke-width="2" />
    </svg>
  );
};
export default BurgerMenuIcon;
