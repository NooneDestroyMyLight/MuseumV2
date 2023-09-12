import { FC } from "react";

interface CloseIconProps {
  color: string;
  width: string;
  height: string;
}

const CloseIcon: FC<CloseIconProps> = ({ color, width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <line
        x1="15.3536"
        y1="0.353553"
        x2="0.353554"
        y2="15.3536"
        stroke={color}
      />
      <line
        y1="-0.5"
        x2="21.2132"
        y2="-0.5"
        transform="matrix(0.707107 0.707107 0.707107 -0.707107 1 0)"
        stroke={color}
      />
    </svg>
  );
};
export default CloseIcon;
