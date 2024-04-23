"use client";
import { useEffect, useState } from "react";
import { CardSet, PokemonCard, TypeAndRarity } from "../../constant";
import CardList from "./components/cardList/CardList";
import Filter from "./components/filter/Filter";
import styles from "./homepage.module.css";
import Navbar from "./components/navbar/Navbar";
import axios from "axios";
import Footer from "./components/footer/Footer";

function Home() {
  const [selectedSet, setSelectedSet] = useState<CardSet[]>([]);
  const [selectedType, setSelectedType] = useState<TypeAndRarity>();
  const [selectedRarity, setSelectedRarity] = useState<TypeAndRarity>();
  const [searchName, setSearchName] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cards, setCards] = useState<PokemonCard[]>([]);
  const [perPage, setPerPage] = useState<number>(20);

  useEffect(() => {
    console.log(selectedSet);
    console.log(selectedType);
    console.log(selectedRarity);
    console.log(searchName);
    console.log(perPage);
  }, [selectedSet, selectedType, selectedRarity, searchName, perPage]);

  useEffect(() => {
    let name = "";
    let type = "";
    let rarity = "";

    if (selectedSet.length > 0) {
      name = selectedSet[0].name;
    }
    if (selectedType) {
      type = JSON.stringify(selectedType);
    }

    if (selectedRarity) {
      rarity = JSON.stringify(selectedRarity);
    }

    handleFetchCard(name, type, rarity);
  }, [searchName, selectedType, selectedRarity]);

  const handleFetchCard = (name: string, type: string, rarity: string) => {
    console.log("fetching data", name, type, rarity);
    setIsLoading(true);
    let url = "https://api.pokemontcg.io/v2/cards?pageSize=20";
    axios
      .get(url)
      .then((response) => {
        setCards(response.data.data);
      })
      .catch((error) => console.log(error))
      .finally(() => setIsLoading(false));
  };

  return (
    <div className={styles.container}>
      <Navbar search={setSearchName} />
      <Filter
        setSelected={(item: string) =>
          setSelectedSet(item as unknown as CardSet[])
        }
        typeSelected={(item: string) =>
          setSelectedType(item as unknown as TypeAndRarity | undefined)
        }
        rarirySelected={(item: string) =>
          setSelectedRarity(item as unknown as TypeAndRarity | undefined)
        }
      />

      {isLoading && <div>Loading...</div>}
      <CardList cards={cards} />
      <Footer dataPerPage={setPerPage} />
    </div>
  );
}

export default Home;
