import { FC, useState } from "react";
import style from "./Project.module.scss";
//
import Header from "../../components/layout/header/Header";
import { useSticky } from "../../hooks/useSticky";
//

//
import FilterList, {
  allProject,
} from "../../components/interiorDesignC/galery/filterList/FilterList";
//
import {
  IPortfolioListData,
  portfolioCategory,
  portfolioListData,
} from "../../components/interiorDesignC/galery/portfolioList/portfolioList.data";
//
import TextTitle from "../../components/mainScreenC/infoSection/textTitle/TextTitle";
import ButtonArrow from "../../components/mainScreenC/buttonArrow/ButtonArrow";
//
import { AnimatePresence } from "framer-motion";
import PortfolioList from "../../components/interiorDesignC/galery/portfolioList/PortfolioList";
import PortfolioItem from "../../components/interiorDesignC/galery/portfolioList/portfolioItem/PortfolioItem";
//
import EstimateCost from "../../components/interiorDesignC/estimateCostSection/EstimateCost";
import { estimateCostSectionData } from "../services/interiorDesign/interiorDesign.data";
//
import Footer from "../../components/layout/footer/Footer";

export interface ProjectProps {}

const Project: FC<ProjectProps> = ({}) => {
  const [isSticky, elRef] = useSticky(false);
  const [portfilioList, setPortfilioList] =
    useState<IPortfolioListData[]>(portfolioListData);

  const [currentFilter, setCurrentFilter] = useState<string>(allProject);

  return (
    <main className={style.project}>
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
      <div className={`${style.filteredList} ${style.section}`}>
        <div className={`container-fluid ${style.listWithFilter}`}>
          <TextTitle
            title={["Our", "project"]}
            backText={"Cases"}
            colorStyle="textTitleLightStyleNoneMargin"
          >
            <div className={`align-self-end `}>
              <ButtonArrow text={"Our service"} color="black" />
            </div>
          </TextTitle>
          <FilterList
            category={portfolioCategory}
            //
            setPortfilioList={setPortfilioList}
            portfilioList={portfolioListData}
            ///
            currentFilter={currentFilter}
            setCurrentFilter={setCurrentFilter}
          />
          <PortfolioList showMore={true}>
            {portfilioList.map(
              (item, index) =>
                index < 9 && (
                  <AnimatePresence>
                    <PortfolioItem
                      key={item.imgSrc}
                      //
                      className={"portfolioItem"}
                      imgSrc={item.imgSrc}
                      description={item.category}
                      name={item.name}
                    />
                  </AnimatePresence>
                )
            )}
          </PortfolioList>
        </div>
        {currentFilter === allProject && (
          <div className={style.estimateCostWrapper}>
            <EstimateCost estimateCostSectionData={estimateCostSectionData} />
          </div>
        )}
        <div className={`container-fluid `}>
          <PortfolioList showMore={true}>
            {portfilioList.map(
              (item, index) =>
                index > 9 && (
                  <AnimatePresence>
                    <PortfolioItem
                      key={item.imgSrc}
                      //
                      className={"portfolioItem"}
                      imgSrc={item.imgSrc}
                      description={item.category}
                      name={item.name}
                    />
                  </AnimatePresence>
                )
            )}
          </PortfolioList>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Project;
