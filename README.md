# Homii 🏠

Application web de location courte durée développée avec **React**. Parcourez des logements partout en France, consultez les annonces en détail et découvrez les valeurs de la plateforme.

🌐 **Application en ligne** : [homii-application-web-de-location-i.vercel.app](https://homii-application-web-de-location-i.vercel.app)

---

## Sommaire

- [Fonctionnalités](#fonctionnalités)
- [Stack technique](#stack-technique)
- [Architecture du projet](#architecture-du-projet)
- [Installation et lancement](#installation-et-lancement)
- [Pages et routing](#pages-et-routing)

---

## Fonctionnalités

- Listing de 20 logements en grille responsive (CSS Grid)
- Slideshow d'images avec navigation et compteur
- Sections accordéon (Collapse) avec animation CSS
- Système de notation affiché de 1 à 5 étoiles
- Tags de catégorie par logement
- Affichage du profil hôte
- Page 404 personnalisée avec redirection vers l'accueil
- Redirection automatique vers 404 si l'ID du logement est invalide
- Design entièrement responsive (mobile / desktop)
- Balises SEO, Open Graph et Twitter Card

---

## Stack technique

| Technologie      | Version | Rôle                        |
| ---------------- | ------- | --------------------------- |
| React            | 19.2.0  | Framework UI                |
| React Router DOM | 7.9.6   | Navigation côté client      |
| React Icons      | 5.5.0   | Icônes                      |
| Sass             | 1.94.2  | Styles (BEM + design tokens)|
| Vite             | 7.2.4   | Bundler et serveur de dev   |

---

## Architecture du projet

```
homii/
├── public/                  # Fichiers statiques (favicon, og-image)
└── src/
    ├── assets/              # Images et logos
    ├── components/          # Composants réutilisables
    │   ├── Banner/          # Bannière pleine largeur
    │   ├── Card/            # Carte logement (grille d'accueil)
    │   ├── Collapse/        # Accordéon animé
    │   ├── Header/          # Barre de navigation
    │   ├── Footer/          # Pied de page
    │   ├── Layout/          # Gabarit global (Header + Outlet + Footer)
    │   ├── Slideshow/       # Carrousel d'images
    │   └── housing components/
    │       ├── ApartmentTitleAndLocation/
    │       ├── Host/        # Profil hôte
    │       ├── Rating/      # Étoiles de notation
    │       └── Tag/         # Tags de catégorie
    ├── data/
    │   └── logements.json   # Données des 20 annonces
    ├── pages/               # Pages de l'application
    │   ├── Home/            # Grille des annonces
    │   ├── About/           # Valeurs de la plateforme
    │   ├── Housing/         # Détail d'un logement
    │   └── NotFound/        # Page 404
    └── styles/              # Styles globaux et utilitaires SCSS
```

---

## Installation et lancement

### Prérequis

- Node.js v18+

### Lancer le projet

```bash
npm install
npm run dev
```

### Build de production

```bash
npm run build
npm run preview
```

---

## Pages et routing

| Route          | Composant  | Description                              |
| -------------- | ---------- | ---------------------------------------- |
| `/`            | `Home`     | Grille de toutes les annonces            |
| `/about`       | `About`    | Valeurs de la plateforme                 |
| `/housing/:id` | `Housing`  | Détail d'un logement (ou 404 si ID inconnu) |
| `*`            | `NotFound` | Page 404 avec lien vers l'accueil        |

---

_Homii — v2.0.0_
