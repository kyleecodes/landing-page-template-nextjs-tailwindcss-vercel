import styles from "../styles/Socials.module.css";

function SocialLink() {
  return (
    <div className={styles.socials_container}>
      <div className={styles.link_container}>
        <a target="_blank" href="/" rel="noopener noreferrer">
          <h2> link </h2>
        </a>
      </div>

      <div className={styles.link_container}>
        <a target="_blank" href="/" rel="noopener noreferrer">
          <h2> link </h2>{" "}
        </a>
      </div>

      <div className={styles.link_container}>
        <a target="_blank" href="/" rel="noopener noreferrer">
          <h2> link </h2>{" "}
        </a>
      </div>

      <div className={styles.link_container}>
        <a target="_blank" href="/" rel="noopener noreferrer">
          <h2> link </h2>{" "}
        </a>
      </div>
      <div className={styles.link_container}>
        <a target="_blank" href="/" rel="noopener noreferrer">
          <h2> link </h2>
        </a>
      </div>

      <div className={styles.link_container}>
        <a target="_blank" href="/" rel="noopener noreferrer">
          <h2> link </h2>{" "}
        </a>
      </div>
    </div>
  );
}

export default SocialLink;
