# Homii — Application web de location immobilière

Application web de location courte durée développée avec **React**.

---

## Aperçu

Homii est une plateforme de location courte durée permettant de parcourir des logements répartis partout en France, de consulter le détail de chaque annonce (photos, description, équipements, hôte, note) et de découvrir les valeurs de la plateforme.

---

## Stack technique

| Technologie | Version |
|---|---|
| React | 19.2.0 |
| React Router DOM | 7.9.6 |
| React Icons | 5.5.0 |
| Sass | 1.94.2 |
| Vite | 7.2.4 |

---

## Fonctionnalités

- Listing de 20 logements en grille responsive
- Slideshow d'images avec navigation et compteur
- Sections accordéon (Collapse) animées
- Système de notation 1 à 5 étoiles
- Tags de catégorie par logement
- Affichage du profil hôte
- Page 404 avec redirection vers l'accueil
- Redirection automatique vers 404 si l'ID du logement est invalide
- Design entièrement responsive (mobile / desktop)
- Balises SEO, Open Graph et Twitter Card

---

## Pages

| Route | Composant | Description |
|---|---|---|
| `/` | `Home` | Grille de toutes les annonces |
| `/about` | `About` | Valeurs de la plateforme |
| `/housing/:id` | `Housing` | Détail d'un logement |
| `*` | `NotFound` | Page 404 |

