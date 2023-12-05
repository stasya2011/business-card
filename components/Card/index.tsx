import Image from "next/image";
import styles from "./card.module.scss";

const Card = (props: { src: string }) => {
  return (
    <div className={styles["block-of-cards"]}>
      <div className={styles["card-1"]}>
        <Image src={props.src} alt={"Title"} width={180} height={160} />
      </div>
      <div className={styles["card-2"]}>
        <Image src={"/ks-1.jpg"} alt={"Title"} width={135} height={185} />
      </div>
    </div>
  );
};

export default Card;
