import styles from "../css/header.module.css";

function TitleBar() {
  return (
    <div className={styles.titlebar}>
      <span>
        <h3>SlideInator</h3>
      </span>
    </div>
  );
}

export { TitleBar };
