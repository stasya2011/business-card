import SubTitle from "../Subtitle";
import styles from "./wrapper.module.scss";

const Wrapper = (props: {
  title: string;
  anchor: string;
  style: any;
  children: React.ReactNode;
}) => {
  return (
    <div className={styles["sub-title"]} style={{ ...props.style }}>
      <SubTitle anchor={props.anchor}>{props.title}</SubTitle>
      {props.children}
    </div>
  );
};

export default Wrapper;
