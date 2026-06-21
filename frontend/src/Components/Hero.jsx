function Hero() {
  return (
    <section
      style={{
        background: "#071A52",
        color: "white",
        textAlign: "center",
        padding: "5rem 2rem",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          marginBottom: "1rem",
        }}
      >
        Transform Guest Feedback
        <br /><br />

        into Actionable Insights
      </h1>

      <p
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          color: "#cbd5e1",
          lineHeight: "1.6",
        }}
      >
        StayInsight AI utilizes advanced NLP to analyze guest
        experiences for homestays and eco-tourism businesses.
      </p>

      <button
        style={{
          marginTop: "2rem",
          background: "#22c1c3",
          color: "white",
          border: "none",
          padding: "12px 24px",
          borderRadius: "8px",
          cursor: "pointer",
          fontSize: "1rem",
        }}
      >
        Start Analyzing for Free
      </button>
    </section>
  );
}

export default Hero;