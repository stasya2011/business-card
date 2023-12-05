import Link from "next/link";
import { Link as LinkT } from "../../navigation";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <div className={styles.wrapper}>
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
      <ul className={styles.lang}>
        <li>
          <LinkT href={"/"} locale="cs">
            CS
          </LinkT>
        </li>
        <li>
          <LinkT href={"/"} locale="en">
            EN
          </LinkT>
        </li>
      </ul>
    </div>
  );
};

export default Header;
