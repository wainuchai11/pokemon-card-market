"use client";
import { useEffect, useState } from "react";
import { Provider } from "react-redux";
import { store } from "./store/store";
import { CardSet, PokemonCard, TypeAndRarity } from "../../constant";
import CardList from "./components/cardList/CardList";
import Filter from "./components/filter/Filter";
import styles from "./homepage.module.css";
import Navbar from "./components/navbar/Navbar";
import axios from "axios";
import Footer from "./components/footer/Footer";

function Home() {
  const [selectedSet, setSelectedSet] = useState<CardSet>();
  const [selectedType, setSelectedType] = useState<TypeAndRarity>();
  const [selectedRarity, setSelectedRarity] = useState<TypeAndRarity>();
  const [searchName, setSearchName] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cards, setCards] = useState<PokemonCard[]>([]);
  const [perPage, setPerPage] = useState<number>(20);
  const [page, setPage] = useState<number>(1);
  const [totalCout, setTotalCount] = useState<number>(0);
  const [nextPage, setNextPage] = useState<number>(1);
  const [prevPage, setPrevPage] = useState<number>(1);

  const hasPrevious = perPage * (page - 1) > 0;
  const hasNext = perPage * page < totalCout;

  useEffect(() => {
    let type = "";
    let rarity = "";
    let pageNo = page.toString();

    if (selectedType) {
      type = JSON.stringify(selectedType);
    }

    if (selectedRarity) {
      rarity = JSON.stringify(selectedRarity);
    }

    handleFetchCard(
      searchName,
      selectedSet?.name ?? "",
      type,
      rarity,
      pageNo,
      perPage.toString()
    );
  }, [selectedSet, selectedType, selectedRarity, searchName, perPage, page]);

  const handleFetchCard = (
    name?: string,
    set?: string,
    type?: string,
    rarity?: string,
    page?: string,
    dataPerPage?: string
  ) => {
    setIsLoading(true);
    let url = `https://api.pokemontcg.io/v2/cards?page=${page}&pageSize=${dataPerPage}`;

    const addQueryParam = (param: string, value: string) => {
      if (url.includes("?")) {
        const queryParams = new URLSearchParams(url.split("?")[1]);
        let existingQParam = queryParams.get("q");
        if (existingQParam) {
          existingQParam += ` ${param}:${encodeURIComponent(value)}`;
        } else {
          existingQParam = `${param}:${encodeURIComponent(value)}`;
        }
        queryParams.set("q", existingQParam);
        url = `${url.split("?")[0]}?${queryParams.toString()}`;
      } else {
        url += `?q=${param}:${encodeURIComponent(value)}`;
      }
    };

    if (name) addQueryParam("name", name);

    if (type) {
      const { name: typeName } = JSON.parse(type);
      addQueryParam("types", typeName.toLowerCase());
    }

    if (rarity) {
      const { name: rarityName } = JSON.parse(rarity);
      const formattedRarity = rarityName
        .replace(/\b\w/g, (match: string) => match.toLowerCase())
        .replace(/\s+(\w)/g, (_: any, letter: string) => letter.toUpperCase());
      addQueryParam("rarity", formattedRarity);
    }

    if (set) {
      const formattedSet = set
        .replace(/\b\w/g, (match: string) => match.toLowerCase())
        .replace(/\s+(\w)/g, (_: any, letter: string) => letter.toUpperCase());
      addQueryParam("set.name", formattedSet);
    }

    axios
      .get(url)
      .then((response) => {
        setCards(response.data.data);
        setPage(parseInt(response.data.page));
        setTotalCount(parseInt(response.data.totalCount));
      })
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  };

  return (
    <Provider store={store}>
      <div className={styles.container}>
        <Navbar search={setSearchName} />
        <Filter
          setSelected={(item: string) =>
            setSelectedSet(item as unknown as CardSet | undefined)
          }
          typeSelected={(item: string) =>
            setSelectedType(item as unknown as TypeAndRarity | undefined)
          }
          rarirySelected={(item: string) =>
            setSelectedRarity(item as unknown as TypeAndRarity | undefined)
          }
        />

        {isLoading ? (
          <div className={styles.loading}>Loading...</div>
        ) : (
          <>
            <CardList cards={cards} />
          </>
        )}
        {!isLoading && cards.length === 0 && (
          <div className={styles.notfound}>No data found</div>
        )}

        <Footer
          dataPerPage={setPerPage}
          hasPrev={hasPrevious}
          hasNext={hasNext}
          goNext={() => setPage(page + 1)}
          goPrev={() => setPage(page - 1)}
        />
      </div>
    </Provider>
  );
}

export default Home;
