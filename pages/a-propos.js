import React from 'react';

import { Page } from '../layouts';

const About = () => {
  return (
    <Page
      title="Qui sommes-nous ?"
      description="Qui est l'équipe derrière Solidarité numérique ?"
    >
      <div className="text-container">
        <h1>Qui sommes-nous ?</h1>
        <p>
          Pendant cette période de confinement liée à l’épidémie du Coronavirus
          COVID-19, les médiateurs numériques s’organisent, avec le soutien du
          Secrétaire d’Etat chargé du Numérique pour accompagner les Français
          dans leurs démarches numériques quotidiennes.
        </p>
        <p>
          Vous trouverez sur ce site :
          <ul>
            <li>
              Des conseils, ressources et tutoriels pour vos démarches
              numériques essentielles. Par exemple : mieux communiquer avec vos
              proches, télétravailler, suivre vos cours à distance, effectuer
              vos démarches en ligne, effectuer vos consultations médicales à
              distance, faire vos courses en ligne, …
            </li>
            <li>
              Un numéro vert pour être accompagné par un conseiller dans toutes
              vos démarches du quotidien en ligne
            </li>
          </ul>
        </p>
        <p>
          La{' '}
          <a href="https://lamednum.coop" rel="noopener noreferrer">
            MedNum
          </a>
          , coopérative des acteurs de l’inclusion numérique, coordonne l’action
          des médiateurs numériques - professionnels comme bénévoles - qui
          souhaitent mettre leurs compétences à disposition des citoyen.ne.s.
        </p>
      </div>
    </Page>
  );
};

export default About;
