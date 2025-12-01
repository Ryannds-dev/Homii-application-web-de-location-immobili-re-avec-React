import "./Rating.scss";

export default function Rating({ rating }) {
  const totalStars = 5;

  return (
    <div className="rating">
      {/* "_" c'est la convention quand les valeurs sont encore undefined */}
      {Array.from({ length: totalStars }).map((_, index) => {
        const starIsActive = index < rating;

        return (
          // span pour qu'elles soient sur la même ligne et key pour repérer la balise de la liste
          <span
            key={index}
            className={`rating__star ${starIsActive ? "active" : ""}`}
          >
            ★
          </span>
        );
      })}
    </div>
  );
}
