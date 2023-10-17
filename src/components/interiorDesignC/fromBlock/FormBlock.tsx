import { FC, ReactNode, useEffect, useRef, useState } from "react";
import style from "./FormBlock.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "../../layout/header/Header";
import { useSticky } from "../../../hooks/useSticky";

export interface FormBlockProps {
  children?: ReactNode;
  // title: string;
  // buttonText: string;

  //   backText: string;
}

const FormBlock: FC<FormBlockProps> = ({ children }) => {
  const [isSticky, elRef] = useSticky(false);

  return (
    <ul className={style.formBlockWithHeader}>
      <Header
        HeaderNavDropdownIsStickyStyle={"stickydHeaderNavItem"}
        HeaderNavDropdownNotStickyStyle={"stickydHeaderNavItem"}
        //
        notStickedMobileBackground={"white"}
        isStickyMobileBackground={"white"}
        //
        isSticky={isSticky}
        //
        textColor={"black"}
        isStickyTextColor={"black"}
      />
      <li ref={elRef} className={`container-fluid  ${style.formBlock}`}>
        <div className={`row p-0 ${style.formBlock__container}`}>
          {children}
        </div>
      </li>
    </ul>
  );
};

export default FormBlock;
