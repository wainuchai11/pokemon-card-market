import { FC, useEffect } from "react";
import styles from "./drawer.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Drawer = ({ open, onSetclose }: DrawerProps) => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state?.cart);

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

  const totalQty = () => {
    const total = cartItems.reduce((acc, item) => acc + item.qty, 0);
    return total;
  };

  const totalPrice = () => {
    const total = cartItems.reduce((acc, item) => acc + item.sum, 0);
    const result = formatNumber(total);
    return result;
  };

  const increaseQty = (id: string) => {
    dispatch({ type: "cart/increaseQty", payload: id });
  };

  const decreaseQty = (id: string, qty: number) => {
    if (qty === 1) {
      dispatch({ type: "cart/removeItem", payload: id });
    }

    dispatch({ type: "cart/decreaseQty", payload: id });
  };

  const formatNumber = (num: number) => {
    const formattedNumber = num.toLocaleString("en-US", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
    return formattedNumber;
  };

  const clearCart = () => {
    dispatch({ type: "cart/clearCart" });
  };

  const onRenderItem = () => {
    return cartItems.map((item, idx) => {
      return (
        <div key={idx}>
          <div className={styles.detail}>
            <div className={styles.card}>
              <Image
                className={styles.image}
                src={item.image}
                alt=""
                width={44}
                height={60}
              />
            </div>
            <div className={styles.cardDeatail}>
              <div className={styles.cardName}>{item.name}</div>
              <div className={styles.price}>$ {item.price}</div>
            </div>
            <div className={styles.sumPrice}>$ {formatNumber(item.sum)}</div>
          </div>
          <div className={styles.buttonContent}>
            <button
              className={styles.minusBtn}
              onClick={() => decreaseQty(item.id, item.qty)}
            >
              -
            </button>
            <div className={styles.qtyItem}>{item.qty}</div>
            <button
              className={styles.plusBtn}
              onClick={() => increaseQty(item.id)}
            >
              +
            </button>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <div className={`${styles.sidenav} ${open ? styles.open : styles.close}`}>
        <div className={styles.header}>
          <div className={styles.titleContainer}>
            <div className={styles.title}>Cart</div>
            <div className={styles.clearBtn} onClick={clearCart}>
              Clear all
            </div>
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

          {cartItems && onRenderItem()}
        </div>

        <div className={styles.footer}>
          <div className={styles.totalCardContainer}>
            <div className={styles.totalText}>Total card Amount</div>
            <div className={styles.totalNumber}>{totalQty()}</div>
          </div>
          <div className={styles.totalPriceContainer}>
            <div className={styles.totalPriceText}>Total price</div>
            <div className={styles.totalPriceNumber}>$ {totalPrice()}</div>
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
};

export default Drawer;
