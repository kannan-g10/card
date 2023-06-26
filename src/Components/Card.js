import "./Card.css";

const Card = ({ imgSrc, imgAlt, title, description, link, buttonTxt }) => {
  return (
    <div className="card-container">
      {imgSrc && imgAlt && (
        <img src={imgSrc} alt={imgAlt} className="card-img" />
      )}
      {title && <h1 className="card-title">{title}</h1>}
      {description && <p className="card-description">{description}</p>}
      {buttonTxt && link && (
        <a href={link} className="card-btn">
          {buttonTxt}
        </a>
      )}
    </div>
  );
};

export default Card;
