import React from 'react';

import { ButtonLink } from '../../uiComponents';

import constants from '../../constants';

const BandeauMediateur = () => (
  <>
    <div className="bandeau-mediateur">
      <div className="container content-container">
        <div>
          <h3>J’accède aux services publics près de chez moi</h3>
          <a
              href="https://www.cohesion-territoires.gouv.fr/france-services#e0"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src="/images/logo/FS.png"
                alt="France Services"
              />
            </a>   
        </div>
      </div>
      <div className="container content-container">
        <div>
          <p>Vous aimez le contact humain, cherchez un métier qui a du sens dans un secteur d’avenir ?<br>Rejoignez le mouvement national des conseillers numériques</p>
          <a
              href="https://www.conseiller-numerique.gouv.fr/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src="/images/logo/CN.png"
                alt="Conseiller Numérique "
              />
            </a>  
        </div>
      </div>
    </div>

    <style jsx>{`
      .bandeau-mediateur {
        color: #fff;
        background-color: ${constants.colors.blue};
        padding: 30px 0;
      }
      h3 {
        color: #fff;
        margin-top: 0;
      }
      p {
        margin: 0;
        padding: 0;
      }

      .container {
        display: flex;
        align-items: center;
      }

      .container > div:first-of-type {
        flex-grow: 1;
        margin-right: 10px;
      }
      .container > div:last-of-type {
        flex-shrink: 0;
      }

      @media only screen and (min-width: 1px) and (max-width: 600px) {
        .container {
          flex-direction: column;
        }
        .container > div:first-of-type {
          margin-right: 0;
        }

        .container > div:last-of-type {
          margin-top: 20px;
        }
      }
    `}</style>
  </>
);
export default BandeauMediateur;
