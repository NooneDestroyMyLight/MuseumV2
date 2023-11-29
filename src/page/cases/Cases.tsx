import { FC } from "react";
import { useSticky } from "../../hooks/useSticky";
import style from "./Cases.module.scss";
//
import Header from "../../components/layout/header/Header";
//
import ConsultationSection from "../../components/mainScreenC/consultationSection/ConsultationSection";
import ContactInfo from "../../components/mainScreenC/consultationSection/sendQuestions/contactInfo/ContactInfo";
import SendQuestions from "../../components/mainScreenC/consultationSection/sendQuestions/SendQuestions";
import Footer from "../../components/layout/footer/Footer";
import CasesHeader from "../../components/casesC/casesHeader/CasesHeader";
import PhotosList from "../../components/casesC/photosList/PhotosList";

export interface CasesProps {}

const Cases: FC<CasesProps> = ({}) => {
  const [isSticky, elRef] = useSticky(false);
  return (
    <main>
      <li ref={elRef} className={style.stickyScreen} />
      <Header
        HeaderNavDropdownIsStickyStyle={"stickydHeaderNavItem"}
        HeaderNavDropdownNotStickyStyle={"headerNavItem"}
        //
        notStickedMobileBackground={"black"}
        isStickyMobileBackground={"white"}
        //
        isSticky={isSticky}
        //
        textColor={"white"}
        isStickyTextColor={"black"}
      />
      <CasesHeader
        title="
Private house, Valencia Spain"
        category="
        Residential Properties"
      />
      <PhotosList />
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

export default Cases;
