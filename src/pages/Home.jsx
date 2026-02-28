import Banner from "../components/Banner";
import Card from "../components/Card";
import logements from "../data/logements.json";
import fondHomeBanner from "../assets/fond_home_banner.webp";
import "../styles/card-container.scss";

export default function Home() {
  return (
    <>
      <Banner
        text={
          <>
            Homii : votre évasion, <br className="mobile-break" />
            où que vous alliez
          </>
        }
        image={fondHomeBanner}
      />

      <section className="cards-container">
        {logements.map((logement) => (
          <Card
            key={logement.id}
            id={logement.id}
            title={logement.title}
            image={logement.cover}
          />
        ))}
      </section>
    </>
  );
}
