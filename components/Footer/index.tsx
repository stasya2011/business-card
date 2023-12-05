import Image from "next/image";
import styles from "./footer.module.scss";
import Link from "next/link";

const contactInfo = [
  {
    link: "https://www.linkedin.com/in/kseniya-hrynkevich-aa8bbb2a2/",
    type: "instagram",
    icon: "/instagram.svg",
    id: 1,
  },
  {
    link: "https://www.linkedin.com/in/kseniya-hrynkevich-aa8bbb2a2/",
    type: "email",
    icon: "/email.svg",
    id: 2,
  },
  {
    link: "https://www.linkedin.com/in/kseniya-hrynkevich-aa8bbb2a2/",
    type: "linkedin",
    icon: "/linkedin.svg",
    id: 2,
  },
];

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles["list-of-contact-info"]}>
        {contactInfo.map((element) => {
          return (
            <Link href={element.link} key={element.id}>
              <Image
                src={element.icon}
                width={50}
                height={50}
                alt={element.type}
              />
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default Footer;