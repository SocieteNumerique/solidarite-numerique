import React from 'react';

import { Page } from '../layouts';

const MentionsLegales = () => {
  return (
    <Page title="Mentions Légales">
      <div className="text-container">
        <h1>Mentions Légales</h1>
        <h2>Editeur</h2>
        <p>
          La MedNum - 135 BOULEVARD CHANZY - 93100 MONTREUIL
          <br />
          Adresse contact : contact@lamednum.coop
          <br />
          N° RCS : 831 673 892 R.C.S Bobigny
          <br />
          Capital social : 62,900 euros
          <br />
        </p>
        <h2>Directeur de la publication</h2>
        <p>Emmanuel Vandamme, Président de la SCIC La MedNum</p>
        <h2> Hébergeur </h2>
        <p>
          Zeit Now - 340 S Lemon Ave #4133, Walnut CA, 91789
          <br />
          Adresse contact : support@zeit.co
          <br />
        </p>
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
