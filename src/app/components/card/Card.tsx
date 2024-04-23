"use client";
import Image from "next/image";
import styles from "./card.module.css";

function Card() {
  return (
    <div className={styles.card}>
      <div className={styles.cardImage}>
        <Image
          src="https://via.placeholder.com/270"
          alt="card"
          width={194}
          height={270}
        />
      </div>
      <div className={styles.cardContent}>
        <h2 className={styles.productTitle}>Healthy noodle with spinach leaf</h2>
        <div className={styles.productPrice}>
          <span className={styles.price}>$2.29</span>
          <span className={styles.quantity}>20 Cards</span>
        </div>
        <button className={styles.addToCart}>Add to cart</button>
      </div>
    </div>
  );
}

export default Card;
