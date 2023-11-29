import { FC, ReactNode } from "react";

import style from "./ArchitecturalDesign.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import FormBlock from "../../../components/interiorDesignC/fromBlock/FormBlock";
import { textBlockArchitecturalDesignPageData } from "../../../components/mainScreenC/infoSection/textBlock/textBlock.data";
import InteriorDesignFromBlockChild from "../../../components/interiorDesignC/fromBlock/children/interiorDesignFromBlockChild/InteriorDesignFromBlockChild";
import { sliderArchitecturalDesignPageData } from "../../../components/interiorDesignC/fromBlock/slider/slider.data";
//
import RuningBanner from "../../../components/mainScreenC/runingBanner/RuningBanner";
//
import ProcessSection from "../../../components/interiorDesignC/processSection/ProcessSection";
import { processSectionArchitecturalDesignPageData } from "../../../components/interiorDesignC/processSection/processSection.data";
//
import ConsultationSection from "../../../components/mainScreenC/consultationSection/ConsultationSection";
import SendQuestions from "../../../components/mainScreenC/consultationSection/sendQuestions/SendQuestions";
import ContactInfo from "../../../components/mainScreenC/consultationSection/sendQuestions/contactInfo/ContactInfo";
import Footer from "../../../components/layout/footer/Footer";
import PortfolioList from "../../../components/interiorDesignC/galery/portfolioList/PortfolioList";
//
import { portfolioListData } from "../../../components/interiorDesignC/galery/portfolioList/portfolioList.data";
import TextTitle from "../../../components/mainScreenC/infoSection/textTitle/TextTitle";
import ButtonArrow from "../../../components/mainScreenC/buttonArrow/ButtonArrow";
import CompoundProjectSection from "../../../components/constructionAndRenovationC/compoundProject/CompoundProjectSection";
import PortfolioItem from "../../../components/interiorDesignC/galery/portfolioList/portfolioItem/PortfolioItem";

export interface ArchitecturalDesignProps {}

const ArchitecturalDesign: FC<ArchitecturalDesignProps> = ({}) => {
  return (
    <div>
      <FormBlock>
        <InteriorDesignFromBlockChild
          title={"Architectural design"}
          buttonText="Get a consultation"
          textBlockData={textBlockArchitecturalDesignPageData}
          //
          sliderData={sliderArchitecturalDesignPageData}
        />
      </FormBlock>
      <RuningBanner />
      <div className={`container-fluid ${style.section}`}>
        <TextTitle
          title={["Our", "project"]}
          backText={"Cases"}
          colorStyle="textTitleLightStyle"
        >
          <div className={`align-self-end `}>
            <ButtonArrow text={"Our service"} color="black" />
          </div>
        </TextTitle>
        <PortfolioList showMore={false}>
          {portfolioListData.map(item => (
            <PortfolioItem
              key={item.imgSrc}
              //
              className="portfolioItem"
              imgSrc={item.imgSrc}
              description={item.category}
              name={item.name}
            />
          ))}
        </PortfolioList>
      </div>
      <ProcessSection
        processSectionData={processSectionArchitecturalDesignPageData}
      />
      <CompoundProjectSection />
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

export default ArchitecturalDesign;
