# Architecture

## Choix technologiques

### JS

Le site est généré avec Next JS.

### Style

Le style utilise la solution de CSS-in-JS conseillée par NextJs (`style jsx`) en conséquence, la majorité du style est inliné dans le code javascript. Ce style est scopé (CSS modules).

Le reste du style, est écrit dans des fichiers SASS `constants/global.scss`et `constants/reset.scss`. Le style de ces deux fichiers est global.

Les données dynamiques (les ressources) sont hebergées sur Airtable, dans une seule table appelée ressource.

Les données statiques (les données de la page d'accueil : noms des categories et descriptions, etc.) sont stockées dans un fichier JSON situé dans `\_ressources/categories.json`

NB: Les choix techniques sont lourdements influencés par les contraintes de public et le souhait de construire le site le plus inclusif possible. Pour en savoir plus vous pouvez [lire cette page](/documentation/optimisations.md)

## Hébergement & CDN

Le site est hebergé sur Now, le service d'hébergement de Zeit, l'éditeur du framework Next.js. Le site peut être hebergé sur n'importe quel hebergeur porposant une solution d'hébergement de site statique (Github pages, Zeit Now, AWS S3, Netlify).

Zeit utilise automatiquement sont CDN `smart CDN`

## Génération du site

Lors de la phase de build du site, toutes les données sont téléchargées d'Airtable, et integrées à l'ensemble du site qui est ensuite exporté sous forme de fichiers HTML & CSS.

Cette étape permet d'optimiser le nombre d'appels à Airtable, qui est limité dans la version gratuite a 5 appels/sec.

Le build est déclenché toutes les demi heure par un Cron sur Google Cloud Scheduler.

L'export statique vers des fichiers HTML & CSS est une des fonctionnalités du framework Next.

Les pages qui sont exportées sont paramétrées dans le fichier de config : `next.config.js`. La fonction `exportPathMap` sert à Next a connaitre la liste des urls a générer, y compris les urls dynamiques comme les categories de ressources.

## Analytics

Les analytics utilisent Matomo.

Comme pour beaucoup d'autres produit beta.gouv, Matomo a été choisi en sa qualité de bon élève des analytics (officiellement adoubé par la CNIL), qui permet de se passer d'un bandeau de cookies. Voir [la page vie privée](https://solidarite-numerique.fr/vie-privee)

Pour plus de détails sur comment utiliser les données de Matomo [c'est ici](/documentation/analytics.md)

## Sitemap & urls

Lors de la phase de build est exporté une sitemap pour le référencement naturel, ainsi qu'une liste de tous les urls généré (voir `public/sitemap.xml`et `public/url-list.txt`). Cette liste d'url est très utile pour des tests.

## Tests et Accessibilité (A11y)

Le site étant essentiellement un site statique (HTML & CSS) il n'y a peu ou pas de choses a tester si ce n'est :

### Les liens cassés (404)

Pour tester les liens cassés on utilise la lib `broken-link-checker` :

`npx blc http://localhost:3000 -ro`

### L'accessibilité

Pour tester les liens cassés on utilise la lib `react-axe` :

`node ./scripts/check-a11y.js`

### Partie non testées

- La page de recherche :
  La page de recherche utilise un script assez lourd de vanilla javascript qui n'est pas testé mais qui devrait l'être.

- Le carte de retour utilisateur :
  La petite carte de retour utilisateur "avez-vous trouvez cette page utile" utilise un script de vanilla javascript qui n'est pas testé mais qui devrait l'être.
