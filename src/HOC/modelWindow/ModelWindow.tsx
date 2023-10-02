import { FC, ReactNode, memo } from "react";
import style from "./ModelWindow.module.scss";

interface ModelWindowProps {
  children: ReactNode;
}

const ModelWindow: FC<ModelWindowProps> = ({ children }) => {
  return <div className={style.modelWindow}>{children}</div>;
};
export default ModelWindow;
