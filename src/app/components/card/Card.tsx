"use client";
import Image from "next/image";
import styles from "./card.module.css";
import { PokemonCard } from "../../../../constant";

function Card({ card }: { card: PokemonCard }) {
  return (
    <div className={styles.container}>
      <div className={styles.cardImage}>
        <Image src={card.images.small} alt="card" width={150} height={250} />
      </div>
      <div className={styles.cardContent}>
        <div className={styles.detail}>
          <div className={styles.productTitle}>{card?.name}</div>
          <div className={styles.productPrice}>
            <div className={styles.price}>
              $ {card?.cardmarket?.prices?.averageSellPrice ?? 0} 
            </div>
            <div className={styles.quantity}>{card?.set.total} Cards</div>
          </div>
        </div>
        <div className={styles.button}>
          <button className={styles.addToCart}>
            <Image  src="/shopping-bag.png" alt="" width={10} height={10} />
            <span className={styles.textBtn}>
              Add to Cart
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
