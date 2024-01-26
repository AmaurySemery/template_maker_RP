import styles from './collection.module.css';

export default function Collection() {
    return (
        <main className="main">
            <h3>Votre collection de templates</h3>
            <p>Ici, vous pouvez accéder aux templates de votre collection, les modifier, les supprimer et sélectionner votre template du moment !</p>
            
            <div className={styles.container}>
                <div className={styles.idea}>
                    <div className={styles['collection-title']}>Mon template 1</div>
                </div>
                <div className={styles.idea}>
                    <div className={styles['collection-title']}>Mon template 2</div>
                </div>
                <div className={styles.idea}>
                    <div className={styles['collection-title']}>Mon template 3</div>
                </div>
                <div className={styles.idea}>
                    <div className={styles['collection-title']}>Mon template 4</div>
                </div>
            </div>
        </main>
    )
}