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
      {user && <Link href="/profile" className={styles.lnk}>Profile</Link>}
      {!user && <Link href="/register" className={styles.lnk}>Se connecter</Link>}
    </>
  );
}