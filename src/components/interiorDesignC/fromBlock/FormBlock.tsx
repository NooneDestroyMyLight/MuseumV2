import { FC, ReactNode, useEffect, useRef, useState } from "react";
import style from "./FormBlock.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import TextBlock from "../../mainScreenC/infoSection/textBlock/TextBlock";
import Input from "../../mainScreenC/consultationSection/sendQuestions/input/Input";
import { textBlockInteriorDesignData } from "../../mainScreenC/infoSection/textBlock/textBlock.data";
import Silder from "./slider/Silder";
import Header from "../../layout/header/Header";

export interface FormBlockProps {
  children?: ReactNode;
  title: string;
  buttonText: string;

  //   backText: string;
}

const FormBlock: FC<FormBlockProps> = ({ title, buttonText }) => {
  const divRef = useRef<HTMLDivElement | null>(null);
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
    <>
      <Header isSticky={isSticky} mainColor={"black"} isStickyColor={"black"} />
      <div ref={divRef} className={`container-fluid  ${style.formBlock}`}>
        <div
          className={`row p-0 d-flex justify-content-between ${style.formBlock__Container}`}
        >
          <div
            className={`col-auto p-0 d-flex flex-column ${style.formBlock__Container__Discription}`}
          >
            <h1>{title}</h1>
            <TextBlock text={textBlockInteriorDesignData} />
            <Input label="Your name *" StylesClass="LightStyleInput" />
            <Input
              label="Phone number / email *"
              StylesClass="LightStyleInput"
            />
            <button className={style.button}>{buttonText}</button>
          </div>
          <Silder />
        </div>
      </div>
    </>
  );
};

export default FormBlock;
