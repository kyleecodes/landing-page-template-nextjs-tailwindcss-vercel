import styles from "../styles/Header.module.css";

function Header() {
  return (
    <div className={styles.header_container}>
      <a href="/">
        <div className={styles.company_title}>COMPANY TITLE</div>
        <div className={styles.subtitle}>company subtitle</div>
      </a>
    </div>
  );
}

export default Header;
