import React from 'react';

import { ButtonLink } from '../../uiComponents';

import constants from '../../constants';

const BandeauMediateur = () => (
  <>
    <div className="map" width = "80%" height = "520" > 
      <h3>J’accède aux services publics près de chez moi</h3>
      <iframe src="https://cget-carto.github.io/France-services/" title="France services" width = "80%" height = "520"></iframe>
    </div>
  
    <div className="bandeau-mediateur">
      <div className="container content-container">
        <div>
          <a
              href="https://www.conseiller-numerique.gouv.fr/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img className="fs1-align"
                src="/images/logo/LCN.png"
                alt="Conseiller Numérique "
              />
              <p>abc Vous aimez le contact humain, cherchez un métier qui a du sens dans un secteur d’avenir ? Rejoignez le mouvement national des conseillers numériques !</p>
            </a>  
        </div>
      </div>
    </div>


    <style jsx>{`
      .map {
        margin:0 auto;
        text-align: center;
      }
      .bandeau-mediateur {
        color: #fff;
        background-color: ${constants.colors.blue};
        padding: 30px 0;
        max-height: 350px;
      }
      h3 {
        color: #0048b3;
        margin-top: 0;
        padding: 20px 0px 0px 0px;
      }
      p {
        color: #fff;
        margin: 0;
        padding: 0;
      }

      .container {
        display: flex;
        align-items: center;
      }
  
      .fs-align{
        vertical-align: middle;
        padding: 10px 20px 0px 20px;
        height: 100px;
        float: right;
      }
  
      .fs1-align{
        vertical-align: middle;
        padding: 0px 20px 0px 10px;
        height: 80px;
        float: left;
      }
  
      .container > div:first-of-type {
        flex-grow: 1;
        margin-right: 10px;
        width: inherit;
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
