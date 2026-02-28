import fondAboutBanner from "../assets/fond_about_banner.webp";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import "../styles/collapses-container.scss";

export default function About() {
  return (
    <>
      <Banner image={fondAboutBanner} />

      <section className="collapses-container">
        <Collapse title="Transparence">
          <p>
            Chaque annonce publiée sur Homii est soigneusement vérifiée. Les
            photos reflètent fidèlement les logements, et toutes les
            informations sont contrôlées par notre équipe avant mise en ligne.
          </p>
        </Collapse>

        <Collapse title="Respect">
          <p>
            Le respect mutuel est au fondement de notre plateforme. Tout
            comportement irrespectueux, discriminatoire ou perturbateur entraîne
            une exclusion définitive de la communauté Homii.
          </p>
        </Collapse>

        <Collapse title="Engagement">
          <p>
            Chez Homii, la qualité de service est notre priorité absolue. De
            la réservation à votre départ, nous veillons à ce que chaque étape
            de votre séjour se déroule dans les meilleures conditions possible.
          </p>
        </Collapse>

        <Collapse title="Sécurité">
          <p>
            La sécurité de nos voyageurs et de nos hôtes est non négociable.
            Chaque logement est soumis à une vérification rigoureuse avant
            référencement. Le système de notes croisées entre hôtes et
            locataires garantit le maintien de nos standards élevés de qualité.
          </p>
        </Collapse>
      </section>
    </>
  );
}
