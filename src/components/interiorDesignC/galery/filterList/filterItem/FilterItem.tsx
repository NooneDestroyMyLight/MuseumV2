import { FC, useState } from "react";
import style from "./FilterItem.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

export interface FilterItemProps {
  name: string;
  setCurrentFilter: React.Dispatch<React.SetStateAction<string>>;
  currentFilter: string;
}

const FilterItem: FC<FilterItemProps> = ({
  name,
  setCurrentFilter,
  currentFilter,
}) => {
  return (
    <button
      onClick={() => {
        setCurrentFilter(name);
      }}
      className={`${style.filterItem} ${
        currentFilter === name && style.currentFilter
      }`}
    >
      {name}
    </button>
  );
};

export default FilterItem;
