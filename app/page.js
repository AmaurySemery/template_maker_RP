import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h3>RP Template maker</h3>
      <p>Facilite toi la vie en intégrant tes RP dans tes <Link href="/collection" >templates</Link> quali'</p>
      <img class="image-accueil" src="https://i.pinimg.com/originals/7b/df/16/7bdf164aaed98d4336084d0b33e3e588.gif" alt="Accueil"></img>
    </main>
  );
}
