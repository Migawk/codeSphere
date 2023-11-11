import styles from "../header.module.sass";

export default function NavButton({children}: {children: React.ReactNode}) {
  if(typeof children !== "string") return <p>Wrong data type</p>;

  return (
    <button
      className={styles.NavButton}
    >
      <span>
        {children.toUpperCase()}
      </span>
      <span>
        <span>
          {children.toUpperCase()}
        </span>
      </span>
    </button>
  )
 }
