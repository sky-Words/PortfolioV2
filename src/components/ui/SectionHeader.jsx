export function SectionHeader({ kicker, title, compact = false }) {
  return (
    <div className={`section-head${compact ? " compact" : ""}`}>
      <span className="section-kicker">{kicker}</span>
      <h2>{title}</h2>
    </div>
  );
}
