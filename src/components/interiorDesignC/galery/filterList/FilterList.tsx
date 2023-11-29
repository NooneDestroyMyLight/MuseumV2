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
    <ul className="row">
      <li className="col p-0">
        <div className={` ${style.filterList}`}>
          {category.map(item => (
            <div className={` ${style.col}`}>
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
      </li>
    </ul>
  );
};

export default FilterList;
