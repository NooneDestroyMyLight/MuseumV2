import { FC } from "react";
import { socialMediaIconProps } from "../socialMediaIconProps.interface";

const YouTubeIcon: FC<socialMediaIconProps> = ({ color, width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      fill={color}
      version="1.1"
      id="Слой_1"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 20 20"
    >
      <defs>
        <rect id="SVGID_3_" x="0" />
      </defs>
      <clipPath id="SVGID_1_">
        <use />
      </clipPath>
      <path d="M8.8,11.9L12,10L8.8,8.1V11.9z" />
      <path
        d="M10,0C4.5,0,0,4.5,0,10s4.5,10,10,10s10-4.5,10-10S15.5,0,10,0z M16.2,10c0,0,0,2-0.3,3
			c-0.1,0.5-0.6,1-1.1,1.1c-1,0.3-4.9,0.3-4.9,0.3s-3.9,0-4.9-0.3C4.6,14,4.2,13.5,4,13c-0.3-1-0.3-3-0.3-3s0-2,0.3-3
			c0.1-0.5,0.6-1,1.1-1.1c1-0.3,4.9-0.3,4.9-0.3s3.9,0,4.9,0.3C15.4,6,15.8,6.5,16,7C16.3,8,16.2,10,16.2,10z"
      />
    </svg>
  );
};
export default YouTubeIcon;
