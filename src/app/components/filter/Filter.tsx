"use client";
import { FC, useEffect, useMemo, useState } from "react";
import SelectBox from "../selectBox/SelectBox";
import styles from "./filter.module.css";
import axios from "axios";
import { CardSet } from "../../../../constant";

const Filter: FC<FilterProps> = ({
  setSelected,
  typeSelected,
  rarirySelected,
}) => {
  const [sets, setSets] = useState<CardSet[]>([]);
  const [types, setTypes] = useState<typeAndRarity[]>([]);
  const [rarities, setRarities] = useState<typeAndRarity[]>([]);
  const [selectedSet, setSelectedSet] = useState<any>();
  const [selectedType, setSelectedType] = useState<any>();
  const [selectedRarity, setSelectedRarity] = useState<any>();

  const getFilterSetProps = () => {
    let result = [{ name: "Set", id: 0, value: "" }];
    axios.get("https://api.pokemontcg.io/v2/sets").then((response) => {
      response.data.data.map((set: any, idx: number) => {
        result.push({
          name: set.name,
          id: idx + 1,
          value: set.name,
        });
      });
      setSets(result as unknown as CardSet[]);
    });
  };

  const getFilterTypes = () => {
    let result = [{ name: "Type", id: 0, value: "" }];
    axios.get("https://api.pokemontcg.io/v2/types").then((response) => {
      response.data.data.map((type: string, idx: number) => {
        result.push({
          name: type,
          id: idx + 1,
          value: type,
        });
      });
      setTypes(result);
    });
  };

  const getFilterRarities = () => {
    let result = [{ name: "Rarity", id: 0, value: "" }];
    axios.get("https://api.pokemontcg.io/v2/rarities").then((response) => {
      response.data.data.map((rarity: any, idx: number) => {
        result.push({
          name: rarity,
          id: idx + 1,
          value: rarity,
        });
      });
      setRarities(result);
    });
  };

  const memorizeSet = useMemo(() => sets, [sets]);
  const memorizeTypes = useMemo(() => types, [types]);
  const memorizeRarities = useMemo(() => rarities, [rarities]);

  useEffect(() => {
    getFilterSetProps();
    getFilterTypes();
    getFilterRarities();
  }, []);

  useEffect(() => {
    setSelected = selectedSet;
    typeSelected = selectedType;
    rarirySelected = selectedRarity;
  }, [selectedSet, selectedType, selectedRarity]);

  return (
    <div className={styles.container}>
      <div className={styles.title}>Choose Card</div>
      <div className={styles.filters}>
        <SelectBox items={memorizeSet} title="set" selected={setSelectedSet} />
        <SelectBox
          items={memorizeTypes}
          title="type"
          selected={setSelectedType}
        />
        <SelectBox
          items={memorizeRarities}
          title="rarities"
          selected={setSelectedRarity}
        />
      </div>
    </div>
  );
};

type FilterProps = {
  setSelected?: (item: string) => void;
  typeSelected?: (item: string) => void;
  rarirySelected?: (item: string) => void;
};

type typeAndRarity = {
  name: string;
  id: number;
  value: string;
};

export default Filter;
