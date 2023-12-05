import { Link as LinkT } from "../../navigation";
import styles from "./dropdown.module.scss";

const DropDownList = () => {
  return (
    <>
      <ul className={styles.lang}>
        <li key={"cs"}>
          <LinkT
            href={"/"}
            locale="cs"
            style={{ fontWeight: true ? "bold" : "normal" }}
          >
            CS
          </LinkT>
        </li>
        <li>|</li>
        <li key={"en"}>
          <LinkT
            href={"/"}
            locale="en"
            style={{ fontWeight: true ? "bold" : "normal" }}
          >
            EN
          </LinkT>
        </li>
      </ul>
    </>
  );
};

export default DropDownList;
