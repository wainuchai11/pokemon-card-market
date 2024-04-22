"use client";
import Image from "next/image";
import styles from "./navbar.module.css";

function Navbar() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.logo}>Pokemon market</h1>
        <div className={styles.actions}>
          <div className={styles.searchContainer}>
            <input
              type="text"
              placeholder="Search by Name"
              className={styles.searchInput}
            />
            <Image
              className={styles.searchIcon}
              src="/search.png"
              alt="search"
              width={15}
              height={15}
            />
          </div>
          <button className={styles.button}>
            <Image src="/shopping-bag.png" alt="cart" width={24} height={24} />
          </button>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search by Name"
            className={styles.searchInput}
          />
          <Image
            className={styles.searchIcon}
            src="/search.png"
            alt="search"
            width={15}
            height={15}
          />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
