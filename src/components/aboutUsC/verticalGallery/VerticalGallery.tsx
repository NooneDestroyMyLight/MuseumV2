import { FC, ReactNode } from "react";

import style from "./VerticalGallery.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
//

interface VerticalGalleryProps {
  children: ReactNode;
}

const VerticalGallery: FC<VerticalGalleryProps> = ({ children }) => {
  return <div className={`${style.verticalGallery}`}>{children}</div>;
};

export default VerticalGallery;
