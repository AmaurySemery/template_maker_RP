import Link from 'next/link';
import styles from './Header.module.css'

export default function Header() {
    return (
        <header>
            <nav className={styles.nav}>
                <div>
                    <Link href="/" className={styles.home}>Accueil</Link>
                </div>
                <div>
                    <Link href="/makeup" className={styles.lnk}>Habiller un RP</Link>
                    <Link href="/market" className={styles.lnk}>Boutique</Link>
                    <Link href="/newtemplate" className={styles.lnk}>Nouveau template</Link>
                    <Link href="/collection" className={styles.lnk}>Ma collection</Link>
                    <Link href="/register" className={styles.lnk}>S'enregistrer</Link>
                </div>
            </nav>
        </header>
    )
}