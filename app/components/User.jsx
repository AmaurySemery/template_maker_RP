"use client";

import { AuthContext } from "../context/AuthContextProvider";
import Link from "next/link";
import { useContext } from "react";
import styles from './Header.module.css'

// Le but est de remplacer register par profile quand l'utilisateur est connecté

export default function User() {
  const { user } = useContext(AuthContext);

  return (
    <>
      {user && <Link href="/newtemplate" className={styles.lnk}>Nouveau template</Link>}
      {user && <Link href="/collection" className={styles.lnk}>Ma collection</Link>}
      {user && <Link href="/profile" className={styles.lnk}>Profile</Link>}
      {!user && <Link href="/register" className={styles.lnk}>S'enregistrer / Se connecter</Link>}
    </>
  );
}