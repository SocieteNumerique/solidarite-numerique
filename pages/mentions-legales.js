import React from 'react';

import { Page } from '../layouts';

const MentionsLegales = () => {
  return (
    <Page title="Mentions Légales">
      <div className="text-container">
        <h1>Mentions Légales</h1>
        <h2>Editeur</h2>
        <p>
          SCIC La MedNum ICI MONTREUIL - 135 BOULEVARD CHANZY - 93100 MONTREUIL
        </p>
        <h2>Directeur de la publication</h2>
        <p>Emmanuel Vandamme, Président de la SCIC La MedNum</p>
        <h2>Illustrations</h2>
        <p>
          Visuel principal de la page d’accueil : un grand merci à Sarah
          Lepreux.
        </p>
      </div>
    </Page>
  );
};

export default MentionsLegales;
