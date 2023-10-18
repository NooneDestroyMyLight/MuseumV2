import { FC, ReactNode, useState } from "react";
import style from "./GalleryShortList.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import TextTitle from "../../components/mainScreenC/infoSection/textTitle/TextTitle";
//

export interface SectionWithTitleProps {
  children: ReactNode;
  //
  title: string[];
  backTitleText: string;
  titleClassName: string;
}

const SectionWithTitle: FC<SectionWithTitleProps> = ({
  children,
  //
  title,
  backTitleText,
  titleClassName,
}) => {
  return (
    <section className={`container-fluid ${style.section}`}>
      <TextTitle
        title={title} //title
        backText={backTitleText} //backTitleText
        colorStyle={titleClassName} //titleClassName
      />
      {children}
    </section>
  );
};

export default SectionWithTitle;
