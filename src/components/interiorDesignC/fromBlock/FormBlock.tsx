import { FC, ReactNode, useEffect, useRef, useState } from "react";
import style from "./FormBlock.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import Header from "../../layout/header/Header";
import TextBlock from "../../mainScreenC/infoSection/textBlock/TextBlock";
import Input from "../../mainScreenC/consultationSection/sendQuestions/input/Input";
import { textBlockInteriorDesignData } from "../../mainScreenC/infoSection/textBlock/textBlock.data";
import Silder from "./slider/Silder";

export interface FormBlockProps {
  children?: ReactNode;
  // title: string;
  // buttonText: string;

  //   backText: string;
}

const FormBlock: FC<FormBlockProps> = ({ children }) => {
  const divRef = useRef<HTMLLIElement | null>(null);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const headerElement = divRef.current;
    if (!headerElement) return;

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setIsSticky(false);
          } else {
            setIsSticky(true);
          }
        });
      },
      { threshold: 0.95 }
    );

    observer.observe(headerElement);

    return () => {
      observer.unobserve(headerElement);
    };
  }, []);

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
      <li ref={divRef} className={`container-fluid  ${style.formBlock}`}>
        <div className={`row p-0  ${style.formBlock__container}`}>
          {children}
        </div>
      </li>
    </ul>
  );
};

export default FormBlock;
