import "./card.css";

export default function Card({ children, title }) {
  return (
    <div className="card">
      <h2 className="heading"># {title}</h2>
      {children}
    </div>
  );
}
