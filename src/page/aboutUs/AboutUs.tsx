import { FC } from "react";
import style from "./AboutUs.module.scss";

import AboutUsMainScreen from "../../components/aboutUsC/aboutUsMainScreen/AboutUsMainScreenSection";
import { aboutUsMainScreenSectionData } from "../../components/aboutUsC/aboutUsMainScreen/aboutUsMainScreenSection.data";
//
import ProcessSection from "../../components/interiorDesignC/processSection/ProcessSection";
import { processSectionInteriorDesignPageData } from "../../components/interiorDesignC/processSection/processSection.data";
//
import RuningBanner from "../../components/mainScreenC/runingBanner/RuningBanner";
//
import DirectorSection from "../../components/interiorDesignC/directorSection/DirectorSection";
//
import VerticalGallery from "../../components/aboutUsC/verticalGallery/VerticalGallery";
//

import AboutUsInfoSection from "../../components/aboutUsC/aboutUsInfoSection/AboutUsInfoSection";
import AboutUsServiceSection from "../../components/aboutUsC/aboutUsService/AboutUsServiceSection";
import GalleryShortList from "../../components/generalC/galleryShortList/GalleryShortList";
import {
  reviewListData,
  teamListData,
} from "../../components/interiorDesignC/galery/portfolioList/portfolioList.data";
//
import ConsultationSection from "../../components/mainScreenC/consultationSection/ConsultationSection";
import ContactInfo from "../../components/mainScreenC/consultationSection/sendQuestions/contactInfo/ContactInfo";
import SendQuestions from "../../components/mainScreenC/consultationSection/sendQuestions/SendQuestions";
//
import Footer from "../../components/layout/footer/Footer";
import AboutUsGallerySection from "../../components/aboutUsC/aboutUsGallerySection/AboutUsGallerySection";

aboutUsMainScreenSectionData;
export interface ReviewProps {}

const AboutUs: FC<ReviewProps> = ({}) => {
  return (
    <main>
      <AboutUsMainScreen
        title={aboutUsMainScreenSectionData.title}
        description={aboutUsMainScreenSectionData.description}
      />
      <RuningBanner />
      <AboutUsInfoSection />
      <AboutUsServiceSection />
      <DirectorSection styles={{ paddingTop: "30px" }} />
      <GalleryShortList
        listData={teamListData}
        backTitleText="team"
        title={["Our team", "of specialists"]}
        titleClassName=""
      />
      <ProcessSection
        processSectionData={processSectionInteriorDesignPageData}
      />
      <AboutUsGallerySection
        dataList={reviewListData}
        title={"Feedback from our clients"}
        description={
          "Every project is very special for us. So we rooting for him with the whole team. Therefore, we are infinitely grateful for such sincere, truthful reviews of our customers."
        }
      />
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

export default AboutUs;
