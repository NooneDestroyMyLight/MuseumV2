import { FC, MouseEventHandler, ReactNode, useEffect, useRef } from "react";
import style from "./ModelWindow.module.scss";

interface ModelWindowProps {
  children: ReactNode;
  isOpen?: boolean;
  setMWOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ModelWindow: FC<ModelWindowProps> = ({ children, isOpen, setMWOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-open");
      console.log("remove this");
    } else if (!isOpen) {
      document.body.classList.remove("modal-open");
    }
  }, [isOpen]);

  return (
    <ul
      onClick={() => setMWOpen(false)}
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
    </ul>
  );
};
export default ModelWindow;
