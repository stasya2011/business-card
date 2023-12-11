import { useTranslations } from "next-intl";
import Link from "next/link";
import DropDownList from "../DropdownList";
import styles from "./header.module.scss";

const Header = () => {
  const t = useTranslations("menu");
  
  return (
    <div className={styles.wrapper}>
      <ul className={styles.nav}>
        <li>
          <Link href={"#about"}>{t("about")}</Link>
        </li>
        <li>
          <Link href={"#portfolio"}>{t("portfolio")}</Link>
        </li>
        <li>
          <Link href={"#contact"}>{t("contact")}</Link>
        </li>
      </ul>
      <DropDownList />
    </div>
  );
};

export default Header;
