import Link from 'next/link';
import styles from './Header.module.css'

export default function Header() {
    return (
        <header>
            <nav className={styles.nav}>
                <div>
                    <Link href="/">Accueil</Link>
                </div>
                <div>
                    <Link href="/ideas" className={styles.lnk}>Collection</Link>
                    <Link href="/register" className={styles.lnk}>S'enregistrer</Link>
                </div>
            </nav>
        </header>
    )
}