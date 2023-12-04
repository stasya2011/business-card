import SubTitle from "../Subtitle";
import styles from "./wrapper.module.scss";

const Wrapper = (props: { title: string; children: React.ReactNode }) => {
  return (
    <div className={styles["sub-title"]}>
      <SubTitle>{props.title}</SubTitle>
      {props.children}
    </div>
  );
};

export default Wrapper;
