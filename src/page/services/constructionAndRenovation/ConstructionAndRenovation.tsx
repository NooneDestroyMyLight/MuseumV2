import { FC } from "react";

import style from "./ConstructionAndRenovation.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import FormBlock from "../../../components/interiorDesignC/fromBlock/FormBlock";
import { textBlockConstructionAndRenovationPageData } from "../../../components/mainScreenC/infoSection/textBlock/textBlock.data";

import RuningBanner from "../../../components/mainScreenC/runingBanner/RuningBanner";
import ServiceRangeSection from "../../../components/mainScreenC/serviceRangeSection/ServiceRangeSection";

import ConsultationSection from "../../../components/mainScreenC/consultationSection/ConsultationSection";
import ContactInfo from "../../../components/mainScreenC/consultationSection/sendQuestions/contactInfo/ContactInfo";
import SendQuestions from "../../../components/mainScreenC/consultationSection/sendQuestions/SendQuestions";

import FAQSection from "../../../components/interiorDesignC/fAQSection/FAQSection";
import { serviceThesisItemConstructionAndRenovationPageData } from "../../../components/mainScreenC/serviceRangeSection/serviceRange.data";
import { fAQSectionConstructionAndRenovationData } from "../../../components/interiorDesignC/fAQSection/fAQSection.data";

//
import Gallery from "../../../components/interiorDesignC/galery/Gallery";
import ProcessSection from "../../../components/interiorDesignC/processSection/ProcessSection";
import ResultSection from "../../../components/interiorDesignC/resultSection/ResultSection";
import { estimateCostSectionData } from "../interiorDesign/interiorDesign.data";
//
import EstimateCost from "../../../components/interiorDesignC/estimateCostSection/EstimateCost";
import ConstructionAndRenovationFormBlockChild from "../../../components/interiorDesignC/fromBlock/children/constructionAndRenovationFormBlockChild/ConstructionAndRenovationFormBlockChild";
//
import TextBlock from "../../../components/mainScreenC/infoSection/textBlock/TextBlock";
import { textBlockResultSectionConstructionAndRenovationData } from "../../../components/interiorDesignC/resultSection/resultSection.data";

import ResultSectionImage from "../../../components/interiorDesignC/resultSection/resultSectionImage/ResultSectionImage";
import DirectorSection from "../../../components/interiorDesignC/directorSection/DirectorSection";
import Button from "../../../components/generalC/button/Button";

import Footer from "../../../components/layout/footer/Footer";
const ConstructionAndRenovation: FC = () => {
  return (
    <div>
      <FormBlock>
        <ConstructionAndRenovationFormBlockChild
          title="Construction
          and repairs"
          //
          textBlockData={textBlockConstructionAndRenovationPageData}
          buttonArrowText="Price for construction work"
          //
          buttonText="Get consultation"
        />
      </FormBlock>
      <RuningBanner />
      <ServiceRangeSection
        data={serviceThesisItemConstructionAndRenovationPageData}
        className="constructionAndRenovation"
        //
        discriptionClassName="discription__constructionAndRenovation"
      />
      <Gallery showButtonText="Show more" />
      <ResultSection>
        <ul className={`row ${style.resultSection__hoc__container}`}>
          <li className={`col-6 p-0 ${style.column}`}>
            <TextBlock
              text={textBlockResultSectionConstructionAndRenovationData}
            />
            <Button
              buttonText={"More about design"}
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
      <EstimateCost estimateCostSectionData={estimateCostSectionData} />
      <DirectorSection styles={{ paddingTop: "30px" }} />
      <ProcessSection />
      <FAQSection
        FAQSectionListData={fAQSectionConstructionAndRenovationData}
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
export default ConstructionAndRenovation;
