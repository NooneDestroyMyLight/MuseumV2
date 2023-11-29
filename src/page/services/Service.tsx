import { FC } from "react";
import { useSticky } from "../../hooks/useSticky";
//
import style from "./Servcie.module.scss";
//
import ConsultationSection from "../../components/mainScreenC/consultationSection/ConsultationSection";
import SendQuestions from "../../components/mainScreenC/consultationSection/sendQuestions/SendQuestions";
import ContactInfo from "../../components/mainScreenC/consultationSection/sendQuestions/contactInfo/ContactInfo";
//
import Footer from "../../components/layout/footer/Footer";
import ServiceGallerysList from "../../components/serviceC/serviceGallerysList/ServiceGallerysList";
import Header from "../../components/layout/header/Header";

interface ServiceProps {}

const Service: FC<ServiceProps> = () => {
  const [isSticky, elRef] = useSticky(false);
  return (
    <main>
      <li ref={elRef} className={style.stickyScreen} />
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
      <ServiceGallerysList />
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
