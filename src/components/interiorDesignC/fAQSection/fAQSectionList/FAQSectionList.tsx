import { FC, useState } from "react";
import style from "./FAQSectionList.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { IFAQSectionData } from "../fAQSection.data";
import FAQSectionItem from "./fAQSectionItem/FAQSectionItem";

export interface FAQSectionListProps {
  FAQSectionListData: IFAQSectionData[];
}

const FAQSectionList: FC<FAQSectionListProps> = ({ FAQSectionListData }) => {
  const [isDiscOpen, setDiscOpen] = useState<string>(
    FAQSectionListData.length > 0 ? FAQSectionListData[0].title : ""
  );

  return (
    <div className={`row ${style.fAQSectionList}`}>
      <div className={`col-6 p-0 ${style.column}`}>
        {FAQSectionListData.map(
          (item, index) =>
            index % 2 === 0 && (
              <FAQSectionItem
                title={item.title}
                discription={item.discription}
                key={index}
                ///
                isDiscOpen={isDiscOpen}
                setDiscOpen={setDiscOpen}
              />
            )
        )}
      </div>
      <div className={`col-6 p-0 ${style.column}`}>
        {FAQSectionListData.map(
          (item, index) =>
            index % 2 !== 0 && (
              <FAQSectionItem
                title={item.title}
                discription={item.discription}
                key={index}
                ///
                isDiscOpen={isDiscOpen}
                setDiscOpen={setDiscOpen}
              />
            )
        )}
      </div>
    </div>
  );
};

export default FAQSectionList;
