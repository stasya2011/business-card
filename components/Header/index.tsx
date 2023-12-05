import Link from "next/link";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.header}>
      <ul className={styles.nav}>
        <li>
          <Link href={"#about"}>ABOUT ME</Link>
        </li>
        <li>
          <Link href={"#portfolio"}>PORTFOLIO</Link>
        </li>
        <li>
          <Link href={"#contact"}>CONTACT</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
