import { FC } from "react";
import style from "./Footer.module.scss";

import MainLogo from "../../../assets/mainLogo/mainLogo/MainLogo";

import { footerDatas } from "./footer.data";

import "bootstrap/dist/css/bootstrap.min.css";

const Footer: FC = () => {
  return (
    <footer className={style.footer}>
      <div className={`container-fluid ${style.footer__Container}`}>
        <div className={`row ${style.footerInfoList}`}>
          <div className={`col-md-3  ${style.generalText} ${style.item}`}>
            <MainLogo color="white" />
          </div>
          {footerDatas.map(item => (
            <div className={`col-md-3  ${style.generalText}`}>
              {item.map(insideItem => (
                <p className={style.item}>{insideItem.text}</p> // Change <P> into <Link>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
export default Footer;
