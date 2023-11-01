import { FC, ReactNode, useEffect } from "react";
import style from "./ModelWindow.module.scss";
import { motion } from "framer-motion";
import ReactDOM from "react-dom";

interface ModelWindowProps {
  children: ReactNode;
  isOpen?: boolean;
  toggleMW: () => void;
}

const ModelWindow: FC<ModelWindowProps> = ({ children, isOpen, toggleMW }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
      console.log("remove this");
    } else if (!isOpen) {
      document.body.classList.remove("modal-open");
    }
  }, [isOpen]);

  if (!isOpen) return;

  return ReactDOM.createPortal(
    <motion.ul
      onClick={toggleMW}
      className={`${style.modelWindow} ${style.modelWindow__open}`}
    >
      <li
        onClick={(e): void => e.stopPropagation()}
        className={style.modelWindow__content}
      >
        {children}
      </li>
    </motion.ul>,
    document.getElementById("portal") as HTMLElement
  );
};
export default ModelWindow;
