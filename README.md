# Back-Office-Web

Back-Office-Web est la version web de l'interface back-office de mon portfolio. Cette application permet de gérer mes projets, expériences, et les commentaires de mes clients, avec une charte graphique cohérente avec l'ensemble de mon portfolio, et une navigation fluide.

## Fonctionnalités

- **Gestion des projets** : Ajouter et gérer des projets directement depuis l'application web.
- **Gestion des expériences** : Enregistrez vos nouvelles expériences professionnelles ou personnelles.
- **Gestion des commentaires** : Consultez et gérez les retours de vos clients sur leurs projets.

## Technologies utilisées

- **Next.js** : Framework principal pour le développement de l'application web. Next.js permet de créer des applications React optimisées pour la performance et le référencement.
- **React** : Librairie JavaScript pour construire des interfaces utilisateur dynamiques et réactives.
- **Tailwind CSS** : Framework CSS utilitaire pour le stylisme rapide et efficace des composants de l'application.
- **Next-Themes** : Pour la gestion des thèmes (mode clair/sombre) au sein de l'application.

## Dépendances principales

- `next` : Framework React pour le développement d'applications web avec rendu côté serveur et génération de sites statiques.
- `react` : Librairie JavaScript pour la construction de l'interface utilisateur.
- `react-dom` : Permet d'exécuter React sur le DOM (Document Object Model).
- `next-themes` : Pour gérer facilement les thèmes (clair/sombre) dans l'application.
- `tailwindcss` : Framework CSS utilitaire pour un stylisme rapide basé sur des classes utilitaires.

## Scripts disponibles

- `dev` : Démarre l'application en mode développement.
- `build` : Génère une version de production optimisée de l'application.
- `start` : Démarre l'application à partir du build de production.
- `lint` : Analyse le code pour détecter les problèmes de style et de syntaxe.

## Installation

Pour installer et exécuter cette application sur votre machine locale, suivez les étapes ci-dessous :

1. **Clonez le dépôt** :
   ```bash
   git clone https://github.com/niedjo/back-office-web.git
   cd back-office-web
   ```

2. **Installez les dépendances** :
   Assurez-vous d'avoir Node.js installé sur votre machine. Ensuite, exécutez la commande suivante pour installer toutes les dépendances requises :
   ```bash
   npm install
   ```

3. **Démarrez l'application** :
   Après l'installation des dépendances, vous pouvez démarrer l'application en mode développement avec la commande suivante :
   ```bash
   npm run dev
   ```
   Cela ouvrira l'application sur `http://localhost:3000` dans votre navigateur.

4. **Utilisation de l'API** :
   Cette application utilise une API hébergée sur [api.niedjo-kuitche.onrender.com](https://api.niedjo-kuitche.onrender.com) pour gérer les données des projets, expériences, et commentaires des clients. Assurez-vous que l'API est opérationnelle pour un fonctionnement optimal de l'application.

## Contributions

Les contributions sont les bienvenues ! N'hésitez pas à proposer des améliorations ou à signaler des bugs en ouvrant une issue ou en soumettant une pull request.

## Licence

Ce projet est sous licence ISC.
