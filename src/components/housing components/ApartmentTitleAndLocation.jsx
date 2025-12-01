import "./ApartmentTitleAndLocation.scss";

export default function ApartmentTitleAndLocation({ title, location }) {
  return (
    <div className="apartment-info">
      <h1 className="apartment-info__title">{title}</h1>
      <p className="apartment-info__location">{location}</p>
    </div>
  );
}
