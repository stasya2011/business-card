import Header from "@/components/Header";
import BackgroundComponent from "@/components/Background";
import Wrapper from "@/components/Wrapper";
import Card from "@/components/Card";
import Slider from "@/components/Slider";
import Footer from "@/components/Footer";
import { useTranslations } from "next-intl";
import "../../_global.scss";

export default function Home() {
  const t = useTranslations("Index");
  return (
    <main className="main-wrapper">
      <Header />
      <BackgroundComponent />
      <Wrapper
        title="About me"
        anchor="about"
        style={{
          marginTop: 30,
          marginBottom: 10,
          fontSize: 16,
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        {<p style={{}}>{t("about")}</p>}
        <div>
          <Card src="/ks-2.png" />
        </div>
      </Wrapper>
      <Wrapper
        title="Portfolio Highlights"
        anchor="portfolio"
        style={{ marginTop: 100 }}
      >
        <Slider />
      </Wrapper>
      <Wrapper title="Contact" anchor="contact" style={{ marginTop: 50 }}>
        <Footer />
      </Wrapper>
    </main>
  );
}
