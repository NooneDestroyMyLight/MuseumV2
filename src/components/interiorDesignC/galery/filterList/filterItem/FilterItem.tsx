import { FC } from "react";
import style from "./FilterItem.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { IPortfolioListData } from "../../portfolioList/portfolioList.data";
//
import { allProject } from "../FilterList";

export interface FilterItemProps {
  name: string;
  //
  setPortfilioList: React.Dispatch<React.SetStateAction<IPortfolioListData[]>>;
  portfilioList: IPortfolioListData[];
  //
  currentFilter: string;
  setCurrentFilter: React.Dispatch<React.SetStateAction<string>>;
}

const FilterItem: FC<FilterItemProps> = ({
  name,
  //
  portfilioList,
  setPortfilioList,
  //
  currentFilter,
  setCurrentFilter,
}) => {
  //
  const onFilterClick = () => {
    setPortfilioList(
      portfilioList.filter(item =>
        item.category === name ? item : name === allProject && item
      )
    );
    setCurrentFilter(name);
  };

  return (
    <button
      onClick={onFilterClick}
      className={`${style.filterItem} 
      
      ${name === currentFilter && style.currentFilter}`}
    >
      {name}
    </button>
  );
};

export default FilterItem;
