import Card from "../card/Card";
import styles from "./cardList.module.css";

function CardList() {
  return (
    <div className={styles.container}>
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default CardList;
