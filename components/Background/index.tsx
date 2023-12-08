import Image from "next/image";
import styles from "./background.module.scss";
import Title from "../Title";

const BackgroundComponent = () => {
  return (
    <div className={styles["background-component"]}>
      <Image
        alt="Hrynkevich Kseniya"
        width={375}
        height={610}
        src={"/Main-bg.png"}
        style={{ width: "100%" }}
      />
      <Title>
        Kseniya <span>Hrynkevich</span>
      </Title>
    </div>
  );
};

export default BackgroundComponent;
