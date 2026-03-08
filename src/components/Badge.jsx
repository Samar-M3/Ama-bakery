// components/Badge.jsx
// ─────────────────────────────────────────────────────────────────────────────
// Small pill shown on product cards (Bestseller, New, etc.)

export default function Badge({ label }) {
  const colorMap = {
    "Bestseller": { bg: "#B03A2E", c: "#fff" },
    "Signature":  { bg: "#6B21A8", c: "#fff" },
    "Local Fav":  { bg: "#1B5E3B", c: "#fff" },
    "New":        { bg: "#C9A84C", c: "#2C1A06" },
    "Daily":      { bg: "#1e40af", c: "#fff" },
  };
  const s = colorMap[label] || { bg: "#555", c: "#fff" };

  return (
    <span style={{
      position: "absolute", top: 14, left: 14, zIndex: 3,
      background: s.bg, color: s.c,
      fontSize: 9, fontWeight: 700, letterSpacing: "0.1em",
      padding: "4px 10px", borderRadius: 20, textTransform: "uppercase",
      fontFamily: "'Plus Jakarta Sans', sans-serif",
      boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
    }}>
      {label}
    </span>
  );
}
