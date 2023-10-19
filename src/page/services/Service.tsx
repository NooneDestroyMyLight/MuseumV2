import { FC } from "react";

import style from "./Servcie.module.scss";
//
import ConsultationSection from "../../components/mainScreenC/consultationSection/ConsultationSection";
import SendQuestions from "../../components/mainScreenC/consultationSection/sendQuestions/SendQuestions";
import ContactInfo from "../../components/mainScreenC/consultationSection/sendQuestions/contactInfo/ContactInfo";
//
import Footer from "../../components/layout/footer/Footer";

interface ServiceProps {}

const Service: FC<ServiceProps> = () => {
  return (
    <main>
      <ConsultationSection>
        <ContactInfo info="" />
        <SendQuestions
          title="Do you have any questions?"
          subTitle="Just write to us"
        />
      </ConsultationSection>
      <Footer />
    </main>
  );
};
export default Service;
