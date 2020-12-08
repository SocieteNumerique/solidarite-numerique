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
        <p>
          Les informations que vous nous confiez sont enregistrées dans un fichier informatisé par L&apos;Agence Nationale de Cohésion des Territoires, 20, avenue de Ségur TSA 10717, 75 334 Paris Cedex 07<br />
          La base légale du traitement de vos données est l’article 5.6 de la Loi n° 78-17 du 6 janvier 1978 relative à l’informatique, aux fichiers et aux libertés.<br />
          Nous recueillons vos données dans la poursuite de notre intérêt légitime: l’amélioration du service que nous vous proposons pour répondre à vos besoins en accompagnement numérique.<br />
          Ainsi, nous recueillons votre numéro de téléphone portable, afin de retrouver votre requête précédente dans le cas où vous nous rappeleriez, et de répondre au mieux à vos besoins. Ce recueil nous permet également de vous envoyer des ressources par SMS, si vous acceptez d’en recevoir.<br />
          Nous collectons également, si vous acceptez de nous les confier:<br />
          <b>

            <li>Votre code postal, qui nous permettra d’identifier, par le biais d’une enquête statistique anonymisée, les besoins spécifiques en accompagnement numérique de chaque territoire;</li>
            <li>Vos nom et prénom, afin de personnaliser le service que nous vous apportons;</li>
            <li>Votre adresse mail, si vous souhaitez que nous vous envoyons des ressources.</li>

          </b>
Nous conservons vos données pour une durée de trois ans suite à votre dernier appel.<br />
Vos données sont accessibles par:<br />
        </p>
      </div>
    </Page>
  );
};

export default MentionsLegales;
