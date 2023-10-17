import { FC, MouseEventHandler, ReactNode, useEffect, useRef } from "react";
import style from "./ModelWindow.module.scss";
import { motion } from "framer-motion";

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

  return (
    <motion.ul
      onClick={() => toggleMW()}
      className={`${style.modelWindow} ${isOpen && style.modelWindow__open}`}
    >
      <li
        onClick={(e): void => {
          e.stopPropagation();
        }}
        className={style.modelWindow__content}
      >
        {children}
      </li>
    </motion.ul>
  );
};
export default ModelWindow;
