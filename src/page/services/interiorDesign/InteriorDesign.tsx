import { FC } from "react";

import style from "./InteriorDesign.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import FormBlock from "../../../components/interiorDesignC/fromBlock/FormBlock";

import RuningBanner from "../../../components/mainScreenC/runingBanner/RuningBanner";
import ServiceRangeSection from "../../../components/mainScreenC/serviceRangeSection/ServiceRangeSection";

import ConsultationSection from "../../../components/mainScreenC/consultationSection/ConsultationSection";
import ContactInfo from "../../../components/mainScreenC/consultationSection/sendQuestions/contactInfo/ContactInfo";
import SendQuestions from "../../../components/mainScreenC/consultationSection/sendQuestions/SendQuestions";

import Footer from "../../../components/layout/footer/Footer";
import { serviceThesisItemInteriorDesignPageData } from "../../../components/mainScreenC/serviceRangeSection/serviceRange.data";
import PriceListSection from "../../../components/interiorDesignC/priceListSection/PriceListSection";

const InteriorDesign: FC = () => {
  return (
    <div>
      <FormBlock title={"Interior Design"} buttonText="To get a consultation" />
      <RuningBanner />
      <ServiceRangeSection data={serviceThesisItemInteriorDesignPageData} />
      <PriceListSection />
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
export default InteriorDesign;
