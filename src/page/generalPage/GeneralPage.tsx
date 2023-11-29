import { FC } from "react";
import style from "./GeneralPage.module.scss";

import "bootstrap/dist/css/bootstrap.min.css";

import MainScreen from "../../components/mainScreenC/mainScreen/MainScreen";
import RuningBanner from "../../components/mainScreenC/runingBanner/RuningBanner";

import InfoSection from "../../components/mainScreenC/infoSection/InfoSection";
import TextBlock from "../../components/mainScreenC/infoSection/textBlock/TextBlock";

import SummeryBlock from "../../components/mainScreenC/summeryBlock/SummeryBlock";

import BoxMenu from "../../components/mainScreenC/boxMenu/BoxMenu";
import ServiceRangeSection from "../../components/mainScreenC/serviceRangeSection/ServiceRangeSection";

import ConsultationSection from "../../components/mainScreenC/consultationSection/ConsultationSection";
import ContactInfo from "../../components/mainScreenC/consultationSection/sendQuestions/contactInfo/ContactInfo";
import SendQuestions from "../../components/mainScreenC/consultationSection/sendQuestions/SendQuestions";

import Footer from "../../components/layout/footer/Footer";
import { textBlockGeneralPageData } from "../../components/mainScreenC/infoSection/textBlock/textBlock.data";
import { serviceThesisItemGeneralPageData } from "../../components/mainScreenC/serviceRangeSection/serviceRange.data";
import Header from "../../components/layout/header/Header";
import { useSticky } from "../../hooks/useSticky";

const GeneralPage: FC = () => {
  const [isSticky, elRef] = useSticky(false);
  return (
    <div className={`${style.mainContainer}`}>
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
      <MainScreen
        videoSrc="../../../public/introVideo/main-bg-video.mp4"
        videoType="video/mp4"
      />
      <RuningBanner />
      <InfoSection
        title={["Who we are", "and what are we able to do?"]}
        buttonText={"More about us"}
        backText={"about"}
      >
        <TextBlock
          text={textBlockGeneralPageData}
          styles={"textBlock__InfoSectionBlock"}
        />
        <div className={` d-flex flex-column ${style.summaryBlocksContainer}`}>
          <SummeryBlock
            title="Residential property"
            discription="Apartments, houses, townhouses"
            iconSrc="../public/summeryBlockIcon/HOUSE.svg"
          />
          <SummeryBlock
            title="Commercial real estate"
            discription="Restaurants and cafes, offices, barbershops, malls and stores, fitness centers"
            iconSrc="../public/summeryBlockIcon/COFFEE-SHOP.svg"
          />
        </div>
      </InfoSection>
      <BoxMenu />
      <ServiceRangeSection
        data={serviceThesisItemGeneralPageData}
        className="generalPage"
        discriptionClassName="discription__interiorDesign"
      />
      <ConsultationSection>
        <ContactInfo info="" />
        <SendQuestions
          title="Do you have any questions?"
          subTitle="Just write to us"
        />
      </ConsultationSection>
      <Footer />
    </div>
  );
};

export default GeneralPage;
