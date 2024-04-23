import { useState, FC, useEffect } from "react";
import styles from "./drawer.module.css";
import Image from "next/image";

const Drawer = ({ open, onSetclose, cartItems }: DrawerProps) => {
  useEffect(() => {
    if (open) {
      openNav();
    } else {
      closeNav();
    }
  }, [open]);

  const openNav = () => {
    onSetclose(true);
  };

  const closeNav = () => {
    onSetclose(false);
  };

  return (
    <div>
      <div className={`${styles.sidenav} ${open ? styles.open : styles.close}`}>
        <div className={styles.header}>
          <div className={styles.titleContainer}>
            <div className={styles.title}>Cart</div>
            <div className={styles.clearBtn}>Clear all</div>
          </div>
          <button className={styles.closebtn} onClick={closeNav}>
            &times;
          </button>
        </div>
        <div className={styles.content}>
          <div className={styles.subTitle}>
            <div className={styles.item}>Item</div>
            <div className={styles.qty}>Qty</div>
            <div className={styles.itemPrice}>Price</div>
          </div>
          <div className={styles.detail}>
            <div className={styles.card}>
                <Image className={styles.image} src="https://fakeimg.pl/44x60/" alt="" width={44} height={60} />
            </div>
            <div className={styles.cardDeatail}>
              <div className={styles.cardName}>card name</div>
              <div className={styles.price}>$ 100</div>
            </div>
            <div className={styles.sumPrice}>$ 100</div>
          </div>
          <div className={styles.buttonContent}>
            <button className={styles.plusBtn}>+</button>
            <div className={styles.qtyItem}>2</div>
            <button className={styles.minusBtn}>-</button>
          </div>
        </div>

        <div className={styles.footer}>
          <div className={styles.totalCardContainer}>
            <div className={styles.totalText}>Total card Amount</div>
            <div className={styles.totalNumber}>6</div>
          </div>
          <div className={styles.totalPriceContainer}>
            <div className={styles.totalPriceText}>Total price</div>
            <div className={styles.totalPriceNumber}>$ 21000</div>
          </div>
          <button className={styles.paymentBtn}>Continue to Payment</button>
        </div>
      </div>
    </div>
  );
};

type DrawerProps = {
  open: boolean;
  onSetclose: (item: any) => void;
  cartItems: object[];
};

export default Drawer;
