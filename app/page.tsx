import "../_global.scss";
import Header from "@/components/Header";
import BackgroundComponent from "@/components/Background";
import Wrapper from "@/components/Wrapper";

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
      </Wrapper>
    </main>
  );
}
