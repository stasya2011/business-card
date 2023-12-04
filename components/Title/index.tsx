import styles from "./title.module.scss";

const Title = ({ children }: { children: React.ReactNode }) => {
  return <h1 className={styles["title-h1"]}>{children}</h1>;
};

export default Title;
