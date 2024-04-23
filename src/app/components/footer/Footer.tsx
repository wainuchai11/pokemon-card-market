"use client";
import { useState, FC } from "react";
import styles from "./footer.module.css";

const Footer: FC<FooterProps> = ({
  dataPerPage,
  hasPrev,
  hasNext,
  goNext,
  goPrev,
}) => {
  const [perpage, setPerpage] = useState<number>(20);

  const handlePerPageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPerpage(parseInt(e.target.value));
    dataPerPage(parseInt(e.target.value));
  };

  return (
    <div className={styles.container}>
      <button className={styles.button} disabled={!hasPrev} onClick={goPrev}>
        Previous
      </button>
      <div className={styles.content}>
        <div className={styles.logo}>Pokemon market</div>
        <div className={styles.copyright}>&copy; 2024 Pokemon Market</div>
        <div className={styles.selector}>
          <select onChange={handlePerPageChange}>
            <option value="20">20</option>
            <option value="40">40</option>
            <option value="60">60</option>
            <option value="80">80</option>
            <option value="100">100</option>
          </select>
        </div>
      </div>
      <button className={styles.button} disabled={!hasNext} onClick={goNext}>
        Next
      </button>
    </div>
  );
};

type FooterProps = {
  dataPerPage: (perPage: number) => void;
  hasPrev: boolean;
  hasNext: boolean;
  goNext: () => void;
  goPrev: () => void;
};

export default Footer;
