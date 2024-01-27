import styles from "../collection/collection.module.css";

export default function Template({ data }) {
  const { id, title, body, message } = data;
  // console.log(data)
  return (
    <div className={styles.collection} key={id}>
      <div>{title}</div>
      <div>{body}</div>
      <div>{message}</div>
    </div>
  );
}