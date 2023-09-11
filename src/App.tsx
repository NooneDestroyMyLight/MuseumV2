import style from "./App.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import InfoSection from "./components/mainScreenC/infoSection/InfoSection";

import MainScreen from "./page/mainScreen/MainScreen";
import { textBlockData } from "./components/mainScreenC/infoSection/textBlock/textBlock.data";

import TextBlock from "./components/mainScreenC/infoSection/textBlock/TextBlock";
import SummeryBlock from "./components/mainScreenC/summeryBlock/SummeryBlock";
import RuningBanner from "./components/mainScreenC/runingBanner/RuningBanner";

import BoxMenu from "./components/mainScreenC/boxMenu/BoxMenu";
import ServiceRangeSection from "./components/mainScreenC/serviceRangeSection/ServiceRangeSection";

import Footer from "./components/layout/footer/Footer";
import ConsultationSection from "./components/mainScreenC/consultationSection/ConsultationSection";
import SendQuestions from "./components/mainScreenC/consultationSection/sendQuestions/SendQuestions";
import ContactInfo from "./components/mainScreenC/consultationSection/sendQuestions/contactInfo/ContactInfo";
import Header from "./components/layout/header/Header";
import { useEffect, useRef, useState } from "react";

// import Button from "react-bootstrap/Button";
// import "bootstrap/dist/css/bootstra  p.min.css";
//<Button>Bootstap Button</Button>

function App() {
  return (
    <main className={`${style.mainContainer}`}>
      <MainScreen />
      <div>
        <RuningBanner />
        <InfoSection
          title={["Who we are", "and what are we able to do?"]}
          buttonText={"More about us"}
          backText={"about"}
        >
          <TextBlock text={textBlockData} />
          <div
            className={` d-flex flex-column ${style.summaryBlocksContainer}`}
          >
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
        <ServiceRangeSection />
        <ConsultationSection>
          <ContactInfo info="" />
          <SendQuestions
            title="Do you have any questions?"
            subTitle="Just write to us"
          />
        </ConsultationSection>
        <Footer />
      </div>
    </main>
  );
}

export default App;
