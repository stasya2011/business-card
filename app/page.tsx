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
      <Wrapper
        title="Abot me"
        anchor="about"
        style={{
          marginTop: 30,
          marginBottom: 10,
          fontSize: 16,
          paddingLeft: 20,
          paddingRight: 20,
        }}
      >
        {
          <>
            <p style={{}}>
              Hello there! I`m a professional hairstylist with over 10 years of
              experience. My passionate approach to the art of styling is
              coupled with extensive knowledge and continuous learning. All of
              this experience and creative energy come to life in each of my
              works.
            </p>
            <p>
              I believe that hair is not just material for cutting; it`s a
              canvas on which we can create a unique work of art. Constant
              refinement of my skills and attention to the latest trends help me
              provide clients with perfect solutions that match their style and
              preferences. Each haircut for me is an opportunity to accentuate
              your individuality and instill confidence in your appearance.
              Trust in my professionalism, and together we will craft a
              one-of-a-kind look that you`ll proudly showcase.
            </p>
            <p style={{}}>Thank you for choosing me to care for your beauty!</p>
          </>
        }
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
