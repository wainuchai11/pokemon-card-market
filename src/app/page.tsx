import CardList from "./components/cardList/CardList";
import styles from "./homepage.module.css";

function Home() {
  return (
    <div className={styles.container}>
      <CardList />
    </div>
  );
}

export default Home;
