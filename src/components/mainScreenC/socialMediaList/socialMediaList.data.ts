import TwitterIcon from "../../../assets/socialMediaItem/twitterIcon/TwitterIcon";
import FacebookIcon from "../../../assets/socialMediaItem/facebookIcon/FacebookIcon";

import InstagramIcon from "../../../assets/socialMediaItem/instagramIcon/InstagramIcon";
import BeIcon from "../../../assets/socialMediaItem/beIcon/BeIcon";
import YouTubeIcon from "../../../assets/socialMediaItem/youTubeIcon/YouTubeIcon";
import { FC } from "react";
import { socialMediaIconProps } from "../../../assets/socialMediaItem/socialMediaIconProps.interface";
import PinterestIcon from "../../../assets/socialMediaItem/pinterestIcon/PinterestIcon";

interface ISocialMediaList {
  iconComponent: FC<socialMediaIconProps>;
  link: string;
}

export const socialMediaList: ISocialMediaList[] = [
  { iconComponent: TwitterIcon, link: "/Twitter" },
  { iconComponent: FacebookIcon, link: "/Twitter" },
  // { iconComponent: PinterestIcon, link: "/Twitter" },

  { iconComponent: InstagramIcon, link: "/Twitter" },
  { iconComponent: BeIcon, link: "/Twitter" },
  { iconComponent: YouTubeIcon, link: "/Twitter" },
];
