import { FC, useState } from "react";
import style from "./FAQSectionList.module.scss";
import "bootstrap/dist/css/bootstrap.min.css";

import { fAQSectionData } from "../fAQSection.data";
import FAQSectionItem from "./fAQSectionItem/FAQSectionItem";

export interface FAQSectionListProps {}

const FAQSectionList: FC<FAQSectionListProps> = ({}) => {
  const [isDiscOpen, setDiscOpen] = useState<string>(fAQSectionData[0].title);
  return (
    <div className={`row ${style.fAQSectionList}`}>
      <div className={`col-6 p-0 ${style.column}`}>
        {fAQSectionData.map(
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
        {fAQSectionData.map(
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
