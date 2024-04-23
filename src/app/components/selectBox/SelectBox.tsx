import { CardSet } from "../../../../constant";
import styles from "./selectBox.module.css";
import React from "react";

const SelectBox: React.FC<SelectBoxProps> = ({
  items,
  title = "title",
  selected,
}) => {
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    selected &&
      selected(
        items.find(
          (item) =>
            typeof item !== "string" &&
            "name" in item &&
            item.name === e.target.value
        ) as Item
      );
  };

  return (
    <div className={styles.selectBox} key={title}>
      <select onChange={handleSelectChange}>
        {items.map((item) => (
          <option
            key={typeof item !== "string" && "id" in item ? item.id : undefined}
            value={
              typeof item !== "string" && "value" in item
                ? item.value
                : undefined
            }
          >
            {typeof item !== "string" && "name" in item ? item.name : item}
          </option>
        ))}
      </select>
    </div>
  );
};

type Item = {
  id: number;
  name: string;
  value: string;
};

type SelectBoxProps = {
  items: Item[] | string[] | CardSet[];
  title?: string;
  selected?: (item: Item) => void;
};

export default SelectBox;
