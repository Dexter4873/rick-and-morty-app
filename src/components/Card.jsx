function Card({ children, title, subtitle }) {
  return (
    <div className="card">
      <div className="card-image">
        <img src="https://placehold.co/600x400" alt="Placeholder" />
      </div>

      <div className="card-content">
        <h3>{title}</h3>
        <h5>{subtitle}</h5>
        {children}
      </div>
    </div>
  );
}

export default Card;
