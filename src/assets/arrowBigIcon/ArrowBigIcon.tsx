import { FC } from "react";
import { ArrowButtonIconProps } from "../arrowButtonIcon/ArrowButtonIcon";

const ArrowBigIcon: FC<ArrowButtonIconProps> = ({ color, width, height }) => {
  return (
    <svg
      version="1.1"
      id="Слой_1"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      hanging={height}
      fill={color}
      x="0px"
      y="0px"
      viewBox="0 0 7.4 21.2"
    >
      <g>
        <path d="M3.3,20.8C3.5,21,3.8,21,4,20.8l3.2-3.2c0.2-0.2,0.2-0.5,0-0.7c-0.2-0.2-0.5-0.2-0.7,0l-2.8,2.8l-2.8-2.8 c-0.2-0.2-0.5-0.2-0.7,0c-0.2,0.2-0.2,0.5,0,0.7L3.3,20.8z M3.2,0.5l0,19.9h1l0-19.9L3.2,0.5z" />
      </g>
    </svg>
  );
};
export default ArrowBigIcon;
