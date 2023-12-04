import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <ul className={styles.nav}>
        <li>ABOUT ME</li>
        <li>PORTFOLIO</li>
        <li>ABOUT ME</li>
      </ul>
    </div>
  );
};

export default Header;
