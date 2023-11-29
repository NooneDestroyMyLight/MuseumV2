import { FC, ReactNode } from "react";
import { useSticky } from "../../hooks/useSticky";

import style from "./Review.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import ContactInfo from "../../components/mainScreenC/consultationSection/sendQuestions/contactInfo/ContactInfo";
import SendQuestions from "../../components/mainScreenC/consultationSection/sendQuestions/SendQuestions";
import ConsultationSection from "../../components/mainScreenC/consultationSection/ConsultationSection";
//
import Footer from "../../components/layout/footer/Footer";
import SendReviewSection from "../../components/reviewC/sendReviewSection/SendReviewSection";
//
import ReviewListSection from "../../components/reviewC/reviewListSection/ReviewListSection";
import Header from "../../components/layout/header/Header";

export interface ReviewProps {}

const text = `Для роста нашей компании и развития в правильном направлении, нам очень важно Ваше мнение, которое сложилось на протяжении всего
рабочего процесса и полученного результата.`;

const Review: FC<ReviewProps> = ({}) => {
  const [isSticky, elRef] = useSticky(false);
  return (
    <div>
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
      <ReviewListSection />
      <SendReviewSection
        title={["Want to share", "experience working with us?"]}
      >
        {/* <ContactInfo info="" /> */}
        <div className={`p-0 col-auto`}>
          <p className={style.text}>{text}</p>
        </div>
        <SendQuestions title="Send review" />
      </SendReviewSection>
      <Footer />
    </div>
  );
};

export default Review;
