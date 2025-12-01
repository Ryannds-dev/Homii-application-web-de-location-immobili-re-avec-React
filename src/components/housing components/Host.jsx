import "./Host.scss";

export default function Host({ name, picture }) {
  return (
    <div className="host">
      <p className="host__name">{name}</p>
      <img className="host__picture" src={picture} alt={name} />
    </div>
  );
}
