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
import InfoSection from "../../components/mainScreenC/infoSection/InfoSection";
import TextBlock from "../../components/mainScreenC/infoSection/textBlock/TextBlock";
//
import { textBlockAboutUsPageData } from "../../components/mainScreenC/infoSection/textBlock/textBlock.data";
//
import Footer from "../../components/layout/footer/Footer";
import AboutUsInfoSection from "../../components/aboutUsC/aboutUsInfoSection/AboutUsInfoSection";
import AboutUsServiceSection from "../../components/aboutUsC/aboutUsService/AboutUsServiceSection";
import GalleryShortList from "../../components/generalC/galleryShortList/GalleryShortList";
import { teamListData } from "../../components/interiorDesignC/galery/portfolioList/portfolioList.data";
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
      <VerticalGallery
        title={"Feedback from our clients"}
        description={
          "Every project is very special for us. So we rooting for him with the whole team. Therefore, we are infinitely grateful for such sincere, truthful reviews of our customers."
        }
      />
      <Footer />
    </main>
  );
};

export default AboutUs;
