import styles from "../collection/collection.module.css";

export default function Template({ data }) {
  const { id, body, message } = data;
  console.log(body)
  return (
    <div key={id}>
      <div>{body}</div>
      <div>{message}</div>
    </div>
  );
}