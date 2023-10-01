import { FC } from "react";

import style from "./InteriorDesign.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import FormBlock from "../../../components/interiorDesignC/fromBlock/FormBlock";

import RuningBanner from "../../../components/mainScreenC/runingBanner/RuningBanner";
import ServiceRangeSection from "../../../components/mainScreenC/serviceRangeSection/ServiceRangeSection";

import ConsultationSection from "../../../components/mainScreenC/consultationSection/ConsultationSection";
import ContactInfo from "../../../components/mainScreenC/consultationSection/sendQuestions/contactInfo/ContactInfo";
import SendQuestions from "../../../components/mainScreenC/consultationSection/sendQuestions/SendQuestions";

import FAQSection from "../../../components/interiorDesignC/fAQSection/FAQSection";
import Footer from "../../../components/layout/footer/Footer";
import { serviceThesisItemInteriorDesignPageData } from "../../../components/mainScreenC/serviceRangeSection/serviceRange.data";
import PriceListSection from "../../../components/interiorDesignC/priceListSection/PriceListSection";

import Gallery from "../../../components/interiorDesignC/galery/Gallery";
import ProcessSection from "../../../components/interiorDesignC/processSection/ProcessSection";
import ResultSection from "../../../components/interiorDesignC/resultSection/ResultSection";

//
import EstimateCost from "../../../components/interiorDesignC/estimateCostSection/EstimateCost";
import { estimateCostSectionData } from "./interiorDesign.data";
//

import TextBlock from "../../../components/mainScreenC/infoSection/textBlock/TextBlock";
import { textBlockResultSectionData } from "../../../components/interiorDesignC/resultSection/resultSection.data";

import ResultSectionImage from "../../../components/interiorDesignC/resultSection/resultSectionImage/ResultSectionImage";
import DirectorSection from "../../../components/interiorDesignC/directorSection/DirectorSection";
import Button from "../../../components/generalC/button/Button";

const InteriorDesign: FC = () => {
  return (
    <div>
      <FormBlock title={"Interior Design"} buttonText="To get a consultation" />
      <RuningBanner />
      <ServiceRangeSection data={serviceThesisItemInteriorDesignPageData} />
      <Gallery showButtonText="Show more" />
      {/* <PriceListSection /> */}
      <ResultSection buttonText="More about construction">
        <ul className={`row ${style.resultSection__hoc__container}`}>
          <li className={`col-6 p-0 ${style.column}`}>
            <TextBlock text={textBlockResultSectionData} />
            <Button
              buttonText={"More about construction"}
              styles={"resultSectionButton"}
            />
          </li>
          <ResultSectionImage
            firstImageSrc={
              "../../../../public/InteriorDesignPage/resultSection/realiz-1.jpg"
            }
            firstImageLabel={"Visualización"}
            firstImageAlt="ResultSectionImage"
            //
            secondImageSrc={
              "../../../../public/InteriorDesignPage/resultSection/viz.jpg"
            }
            secondImageAlt={"ResultSectionImage"}
            secondImageLabel={"Implementación"}
          />
        </ul>
      </ResultSection>
      {/* <EstimateCost estimateCostSectionData={estimateCostSectionData} /> */}
      {/* <DirectorSection styles={{ paddingTop: "20px" }} /> */}
      <ProcessSection />
      <FAQSection />
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
