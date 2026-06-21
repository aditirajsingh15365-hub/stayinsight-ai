function Card({ title, description }) {
  return (
    <div
      style={{
        background: "rgba(255,255,255,0.08)",
        border: "1px solid rgba(255,255,255,0.15)",
        borderRadius: "16px",
        padding: "24px",
        color: "white",
        backdropFilter: "blur(10px)",
        minHeight: "180px",
      }}
    >
      <h3>{title}</h3>
      <p style={{ color: "#cbd5e1" }}>{description}</p>
    </div>
  );
}

export default Card;