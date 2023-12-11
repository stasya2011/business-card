"use client";

import { Link as LinkTranslations } from "../../navigation";
import { usePathname, useSearchParams } from "next/navigation";
import styles from "./dropdown.module.scss";

const DropDownList = () => {
  const pathname = usePathname();

  return (
    <>
      <ul className={styles.lang}>
        <li key={"cs"}>
          <LinkTranslations
            href={"/"}
            locale="cs"
            style={{ fontWeight: pathname === "/cs" ? "800" : "normal" }}
          >
            CS
          </LinkTranslations>
        </li>
        <li>|</li>
        <li key={"en"}>
          <LinkTranslations
            href={"/"}
            locale="en"
            style={{ fontWeight: pathname === "/en" ? "800" : "normal" }}
          >
            EN
          </LinkTranslations>
        </li>
      </ul>
    </>
  );
};

export default DropDownList;
