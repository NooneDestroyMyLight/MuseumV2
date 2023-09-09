import { FC } from "react";
import style from "./ContactInfo.module.scss";
import { contact } from "../../../../layout/footer/footer.data";

import "bootstrap/dist/css/bootstrap.min.css";
import SubTitle from "../../../subTitle/SubTitle";
import { contactInfoData } from "./contactInfo.data";

interface ContactInfoProps {
  info: string;
}

const ContactInfo: FC<ContactInfoProps> = ({ info }) => {
  return (
    <ul className={`col-auto ${style.contactInfo}`}>
      <SubTitle
        label="Our contacts"
        subLabel="Contact us in a comfortable way"
      />

      {contactInfoData.map(item => (
        <li className={style.contactInfo__Block}>
          {item.map(inner => (
            <span className={`${style.contactText} ${style.line}`}>
              {inner.text}
            </span>
          ))}
        </li>
      ))}

      {/* <li className={style.contactInfo__Block}>
        <span className={style.contactText}>Valencia</span>
      </li>

      <li className={style.contactInfo__Block}>
        {contact.map(item => (
          <span className={`${style.contactText} ${style.line}`}>
            {item.text}
          </span>
        ))}
      </li> */}
    </ul>
  );
};

export default ContactInfo;
