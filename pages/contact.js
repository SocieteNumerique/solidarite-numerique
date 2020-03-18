import React from 'react';
import Link from 'next/link';

import { Page } from '../layouts';

const Contact = () => {
  return (
    <Page
      title="Contactez-nous"
      description="Comment contacter l'équipe de solidarité numérique"
    >
      <div className="text-container">
        <h1>Nous contacter</h1>
        <p>
          Pour toute(s) question(s) concernant le projet solidarite-numerique,
          vous pouvez nous envoyer un mail à l’adresse suivante :
          <a href="mailto:contact@solidarite-numerique.fr">
            contact@solidarite-numerique.fr
          </a>
          .
        </p>
        <p>
          Vous êtes un médiateur numérique et vous souhaitez accompagner des
          usagers ou produire des ressources ?{' '}
          <a href="/rejoignez-nous">Remplissez ce formulaire.</a>
        </p>
      </div>
    </Page>
  );
};

export default Contact;
