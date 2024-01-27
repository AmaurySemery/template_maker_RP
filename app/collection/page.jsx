import Template from '../components/Template';
import styles from './collection.module.css';

async function fetchCollection() {
    const res = await fetch(`http://localhost:3000/api/collections`);
    const collection = await res.json();
    //console.log(collection);
  
    return collection;
  }

export default async function Collection() {
    const collection = await fetchCollection();
    // console.log(collection);
    return (
        <main className="main">
            <h3>Votre collection de templates</h3>
            <p>Ici, vous pouvez accéder aux templates de votre collection, les modifier, les supprimer et sélectionner votre template du moment !</p>

            <div className={styles.container}>
                {collection.length && collection.map((template) => <Template data={template} />)}
            </div>
        </main>
    )
}