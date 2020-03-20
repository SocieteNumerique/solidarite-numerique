import React from 'react';

import { Page } from '../layouts';

const NotFound = () => {
  return (
    <Page
      title="Page introuvable"
      description="La page que vous avez demandé n'existe pas"
    >
      <div className="text-container">
        <h1>Cette page est introuvable</h1>
        <img src="/images/illus/404.svg" alt="Cette page est introuvable" />
        <p>
          Bizarre... la page que vous avez demandé n’existe pas. Avez-vous
          recopié le bon lien ?
        </p>
        <a href="/">Cliquez ici pour revenir à l’écran d’accueil</a>
      </div>
    </Page>
  );
};

export default NotFound;
