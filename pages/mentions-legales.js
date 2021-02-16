import React from 'react';

import { Page } from '../layouts';

const MentionsLegales = () => {
  return (
    <Page title="Mentions Légales">
      <div className="text-container">
        <h1>Mentions Légales</h1>
        <h2>Editeur</h2>
          <p><br>
            Ci-après dénomé « l’ANCT » <br>
            Le délégué à la protection des données, ANCT 20 avenue de Ségur – TSA 10717 – 75334 PARIS CEDEX 07 <a href="mailto:dpo@anct.gouv.fr">dpo@anct.gouv.fr</a></p>
        <h2>Directeur de la publication</h2> 
          <p>Pierre-Louis ROLLE, Directeur Programmes « Société Numérique » et « Nouveaux Lieux Nouveaux Liens » à l’Agence Nationale de Cohésion des Territoires « ANCT »</p>
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
