import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Card from "../components/Card";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <section
        style={{
          background: "#071A52",
          padding: "40px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
            gap: "20px",
          }}
        >
          <Card
            title="Sentiment Analysis"
            description="Automatically detect guest emotion from reviews."
          />

          <Card
            title="AI-Powered Recommendations"
            description="Receive data-driven advice on operational improvements."
          />

          <Card
            title="Review Summarization"
            description="Get instant summaries of key praise and complaints."
          />
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Home;