import Image from "next/image";
import styles from "./footer.module.scss";
import Link from "next/link";

const contactInfo = [
  {
    link: "https://instagram.com/kseniyagrinkevich_?igshid=MzMyNGUyNmU2YQ==",
    type: "Instagram",
    icon: "/instagram.svg",
    id: 1,
  },
  {
    link: "https://www.linkedin.com/in/kseniya-hrynkevich-aa8bbb2a2/",
    type: "Email",
    icon: "/email.svg",
    id: 2,
  },
  {
    link: "https://www.linkedin.com/in/kseniya-hrynkevich-aa8bbb2a2/",
    type: "LinkedIn",
    icon: "/linkedin.svg",
    id: 3,
  },
];

const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <ul className={styles["list-of-contact-info"]}>
        {contactInfo.map((element) => {
          return (
            <li
              key={element.id}
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Link href={element.link} target="_blank">
                <Image
                  src={element.icon}
                  width={50}
                  height={50}
                  alt={element.type}
                />
              </Link>
              <span style={{ marginLeft: 20, marginRight: 20 }}>|</span>
              {element.type}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Footer;
