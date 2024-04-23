"use client";

import { CardSet, PokemonCard } from "../../../../constant";
import Card from "../card/Card";
import styles from "./cardList.module.css";

function CardList({ cards = [] }: { readonly cards?: PokemonCard[] }) {
  return (
    <div className={styles.container}>
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}

export default CardList;
