import { FC } from "react";
import style from "./SocialMediaList.module.scss";
import { socialMediaList } from "./socialMediaList.data";

import "bootstrap/dist/css/bootstrap.min.css";

interface SocialMediaListProps {}

const SocialMediaList: FC<SocialMediaListProps> = ({}) => {
  return (
    <div className={`row d-flex  ${style.socialMediaListContainer}`}>
      {socialMediaList.map((item, index) => (
        <div className={`col-auto p-0 `}>
          <item.iconComponent
            key={index}
            width="20"
            height="20"
            color="white"
          />
        </div>
      ))}
    </div>
  );
};

export default SocialMediaList;
