function Card({ title, subtitle, img, children }) {
  return (
    <div className="card">
      {img && (
        <div className="card-image">
          <img src={img} alt="Placeholder" />
        </div>
      )}

      <div className="card-content">
        <h3>{title}</h3>
        <h5>{subtitle}</h5>
        {children}
      </div>
    </div>
  );
}

export default Card;
