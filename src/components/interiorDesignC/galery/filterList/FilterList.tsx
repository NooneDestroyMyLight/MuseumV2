import { FC, useState } from "react";
import style from "./FilterList.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import FilterItem from "./filterItem/FilterItem";
import { filterListData } from "./filterList.data";

export interface FilterListProps {}

const FilterList: FC<FilterListProps> = ({}) => {
  const [currentFilter, setCurrentFilter] = useState<string>("");
  return (
    <div className={`d-flex ${style.filterList}`}>
      {filterListData.map(item => (
        <FilterItem
          name={item.text}
          setCurrentFilter={setCurrentFilter}
          currentFilter={currentFilter}
        />
      ))}
    </div>
  );
};

export default FilterList;
