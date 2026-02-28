import logoFooter from "../assets/LOGO_HOMII_FOOTER.png";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer className="footer">
      <img src={logoFooter} alt="Homii" className="footer__logo" />
      <p>© 2026 Homii. Tous droits réservés</p>
    </footer>
  );
}
