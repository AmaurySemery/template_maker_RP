import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <p>Marre de galérer à enfiler tes <Link href="/collection" >templates</Link> pour tes RP qui prennent du gras ?</p>
      <img class="image-accueil" src="https://media1.giphy.com/media/xT5LMsC6iydeziO6nC/200.gif?cid=82a1493baynkr03fjtz56mng389rr1aakwxo642wx8sdxqoz&ep=v1_gifs_search&rid=200.gif&ct=g" alt="Accueil"></img>
    </main>
  );
}
