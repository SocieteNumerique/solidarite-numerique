import React from 'react';

import { ButtonLink } from '../../uiComponents';

import constants from '../../constants';

const BandeauMediateur = () => (
  <>
    <div className="bandeau-mediateur">
      <div className="container content-container">
        <div>
          <h3>Vous aimeriez proposer des contenus&nbsp;?</h3>
          <p>
            Les ressources qui figurent sur ce site permettent d’apporter une
            première aide aux personnes qui n’ont pas l’habitude d’utiliser
            certains services en ligne essentiels. Elles ont été proposées par
            des médiateurs volontaires et par des organisations qui sont
            engagées en faveur de l’inclusion numérique. Ce recensement n'a pas
            de visée promotionnelle ou exhaustive mais vise à proposer en
            urgence des réponses aux questions et besoins des Français.
          </p>
        </div>
        <div>
          <ButtonLink href="/nouvelle-ressource" alt large>
            Proposer une ressource&nbsp;➞
          </ButtonLink>
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
