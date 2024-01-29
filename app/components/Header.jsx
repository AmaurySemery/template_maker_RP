import Link from 'next/link';
import styles from './Header.module.css'
import User from "./User";

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
                    <User />
                </div>
            </nav>
        </header>
    )
}