import React from 'react';

import { Page } from '../layouts';

const MentionsLegales = () => {
  return (
    <Page title="Mentions Légales">
      <div className="text-container">
        <h1>Mentions Légales</h1>
        <h2>Editeur</h2>
          <p>Le responsable de traitement est l’Agence Nationale de la Cohésion des Territoires, « ANCT », établissement public de l’Etat créé par la loi n° 2019-753 du 22 juillet 2019 et en application du décret n° 2019-1190 du 18 novembre 2019, immatriculée sous le numéro SIRENE 130 026 032 dont le siège est 20 avenue de Ségur – TSA 10717 – 75334 PARIS CEDEX 07, représenté par Monsieur Yves LE BRETON, Directeur Général de ladite Agence, nommé par décret du Président de la République en date du 23 décembre 2019 et domicilié en cette qualité audit siège,<br />
          Ci-après dénomé « l’ANCT » <br />
          Le délégué à la protection des données est Mme Anne Gaillard, ANCT 20 avenue de Ségur – TSA 10717 – 75334 PARIS CEDEX 07  <a href = "mailto: dpo@anct.gouv.fr">dpo@anct.gouv.fr</a>
          </p>
        <h2>Directeur de la publication</h2>
          <p>Pierre-Louis ROLLE, Directeur Programmes « Société Numérique » et « Nouveaux Lieux Nouveaux Liens » à l’Agence Nationale de Cohésion des Territoires « ANCT »
          </p>
        <h2>Hébergeur</h2>
          <p>Zeit Now - 340 S Lemon Ave #4133, Walnut CA, 91789<br />
          Adresse contact : <a href = "mailto: support@zeit.co">support@zeit.co</a>
          </p>
        <h2>Illustrations</h2>
          <p>Visuel principal de la page d’accueil : un grand merci à Sarah Lepreux.</p>
        
      </div>
    </Page>
  );
};

export default MentionsLegales;
