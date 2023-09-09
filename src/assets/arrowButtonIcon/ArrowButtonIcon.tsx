import { FC } from "react";

interface ArrowButtonIconProps {
  color: string;
  width: string;
  height: string;
}

const ArrowButtonIcon: FC<ArrowButtonIconProps> = ({
  color,
  width,
  height,
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 65 8"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M64.3536 4.35355C64.5488 4.15829 64.5488 3.84171 64.3536 3.64645L61.1716 0.464466C60.9763 0.269204 60.6597 0.269204 60.4645 0.464466C60.2692 0.659728 60.2692 0.976311 60.4645 1.17157L63.2929 4L60.4645 6.82843C60.2692 7.02369 60.2692 7.34027 60.4645 7.53553C60.6597 7.7308 60.9763 7.7308 61.1716 7.53553L64.3536 4.35355ZM0 4.5H64V3.5H0V4.5Z"
        fill={color}
      />
    </svg>
  );
};
export default ArrowButtonIcon;
