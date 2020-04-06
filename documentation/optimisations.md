# Accesibilité (A11y)

## Optimisation techniques

Parceque le site Solidarité Numérique s'adresse à tous et en particuliers aux personnes les moins à l'aise avec internet, il a été concu pour :

- fonctionner sur un panel très large de terminaux
  - être mobile responsive
  - fonctionner en 2G/3G
  - Être compatible avec de vieux navigateurs
  - Être utilisable sans javascript
- être frugal (éviter d'encombrer la bande passante des gens en temps de crise)
- être facile a utiliser, facile a comprendre, design inclusif

# Fonctionner sur un panel large de terminaux

L'export statiques vers des fichiers HTML & CSS & JS rend le site très robuste, et très simple. Aucun javascript n'est nécessaire au premier chargement de la page.

Par conséquent, 95% du site (sauf la recherche, qui n'est pas la seule manière de naviguer, et les typeform embeded) peut être chargé avec avec javascript désactivé.

Une fois le HTML et CSS chargés, dans le cas standard, Next télécharge les sources JS et utilise une fonctionalité appelée la réhydratation du html par le javascript pour rendre la page dynamique.

Cette fonctionalité, très puissante, est néanmoins couteuse (350ko de JS + le temps de parsing et d'éxecution de react) et inutile dans notre cas.

Par conséquent le JS a été supprimé totalement. Ce qui a permis :

- supprimer la latence au chargement de la page. Moins de 300ms entre l'affichage et la disponibilité de la souris.
- Diminuer la taille des pages de 500ko a 250ko en moyenne
- Diminuer le nombre d'appels qui passent par le réseau

Enfin une optimisation poussée des ressources statiques :

- optimisation du png en svg pour l'image d'accueil (75% d'économie)
- puis optimisation des virgules flottantes dans les SVG, 50% d'économie sur tous les svg)
- limitation du nombre de font

A permis de passer de 250ko à moins de 150ko, qui charge en 1s avec une connexion normale

NB: ca peu sembler étrange d'utiliser NextJS(un framework server side) pour produire un site totalement statique in fine.
Cela dit, NextJs bénéficie de nombreux outils qui ont facilité le dévelopement rapide de cette application (CSS-in-JS, Zeit Now, Built in Sass support, ESLINT et React-axe pour l'accessibilité etc.) et explique cette situation étrange.

# Touche final de pure confort

Le site charge une lib `instant.page` dans `./pages/_document.js`

Cette lib précharge les pages au moment ou le bouton de la souris est enfoncé, ce qui économise quelques 100ms et donne l'impression, aux utilisateurs disposant d'une bonne connexion, d'un chargement quasi instantanné. Ceci est rendu possible par la grande légereté des pages.

# Recherche en vanilla JS

Pour s'assurer du support des navigateurs les plus anciens, la recherche est un simple script vanilla js.
Cette partie mérite des tests plus poussés et l'ajout de mot-clefs de recharche cote Airtable afin de parvenir à une recherche de qualité.

# Accessiblité

Le site a été audité par l'équipe de Koena et a obtenu un score de 70%.

# Tests de performance :

Les tests de performances ont été conduit avec :

- Lightouse

Les checks d'accessibilité ont été conduit avec

- axe-cli
- eslint-plugin-jsx-a11y
