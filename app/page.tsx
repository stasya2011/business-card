import Header from "@/components/Header";
import BackgroundComponent from "@/components/Background";
import Wrapper from "@/components/Wrapper";
import Card from "@/components/Card";
import "../_global.scss";
import Slider from "@/components/Slider";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="main-wrapper">
      <Header />
      <BackgroundComponent />
      <Wrapper title="Abot me">
        {
          <p style={{ fontSize: 16, paddingLeft: 20, paddingRight: 20 }}>
            My name is Ksenia ... Text Text Text Text Text Text Text Text My
            name is Ksenia ... Text Text Text Text Text Text Text TextMy name is
            Ksenia ... Text Text Text Text Text Text Text Text
          </p>
        }
        <div>
          <Card src="/ks-2.png" />
        </div>
      </Wrapper>
      <Wrapper title="Portfolio Highlights">
        <Slider />
      </Wrapper>
      <Wrapper title="Contact">
        <Footer />
      </Wrapper>
    </main>
  );
}
