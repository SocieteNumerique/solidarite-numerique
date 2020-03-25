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
          Adresse contact : contact@lamednum.coop
          N° RCS : 831 673 892 R.C.S Bobigny
          Capital social : 62,900 euros
        </p>
        <h2>Directeur de la publication</h2>
        <p>Emmanuel Vandamme, Président de la SCIC La MedNum</p>
        <h2> Hébergeur <h2>
        <h2>Illustrations</h2>
        <p>
          <a href="https://fr.freepik.com/photos-vecteurs-libre/affaires">
            Visuels Freepik - pikisuperstar.
          </a>
        </p>
      </div>
    </Page>
  );
};

export default MentionsLegales;
