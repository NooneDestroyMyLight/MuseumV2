import { FC } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

interface HouseIconProps {
  color: string;
  width: string;
  height: string;
}

const HouseIcon: FC<HouseIconProps> = ({ color, width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 49 31"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 9.5L8.90039 11.2019V6.18359H11V9.5Z"
        fill="black"
        stroke="black"
      />
      <path
        d="M2 16.9794H3.5L23 2.5L33.5 10.3103H35.2133L22.9977 1L2 16.9794Z"
        fill="black"
        stroke="black"
      />
      <path
        d="M27.9502 4.16946L29 5L32.1761 2.5L42.5 10.3103H44.4578L32.1761 1L27.9502 4.16946Z"
        fill="black"
        stroke="black"
      />
      <rect x="38" y="18" width="1.92" height="12" fill="black" />
      <rect x="47" y="16" width="1.92" height="10" fill="black" />
      <rect
        x="42"
        y="26"
        width="1.92"
        height="6"
        transform="rotate(-90 42 26)"
        fill="black"
      />
      <rect x="5" y="18" width="1.92" height="12" fill="black" />
      <path
        d="M39.918 29L39.9178 30.92L5.00019 30.92L5.00019 29L39.918 29Z"
        fill="black"
      />
    </svg>
  );
};
export default HouseIcon;
