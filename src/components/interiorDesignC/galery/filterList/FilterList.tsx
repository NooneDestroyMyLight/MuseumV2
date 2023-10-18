import { FC, useState } from "react";
import style from "./FilterList.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import FilterItem from "./filterItem/FilterItem";
//
import { IPortfolioListData } from "../portfolioList/portfolioList.data";

export interface FilterListProps {
  category: string[];
  //
  portfilioList: IPortfolioListData[];
  setPortfilioList: React.Dispatch<React.SetStateAction<IPortfolioListData[]>>;
  //
  currentFilter: string;
  setCurrentFilter: React.Dispatch<React.SetStateAction<string>>;
}

export const allProject: string = "All projects";

const FilterList: FC<FilterListProps> = ({
  category,
  //
  portfilioList,
  setPortfilioList,
  //
  currentFilter,
  setCurrentFilter,
}) => {
  return (
    <div className={`row d-flex ${style.filterList}`}>
      {category.map(item => (
        <div className={`col-2  p-0 ${style.col}`}>
          <FilterItem
            name={item}
            //
            portfilioList={portfilioList}
            setPortfilioList={setPortfilioList}
            //
            currentFilter={currentFilter}
            setCurrentFilter={setCurrentFilter}
          />
        </div>
      ))}
    </div>
  );
};

export default FilterList;
