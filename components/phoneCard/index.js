import React from 'react';

import { CallCTA } from '../../uiComponents';
import constants from '../../constants';

const PhoneCard = ({ useMarginTop = false }) => (
  <>
    <div className="phone">
      <h2>J’ai besoin d’aide</h2>
      <img
        src="/images/illus/teleoperatrice.svg"
        alt="Besoin d’aide ? Un.e téléopérateur.rice vous répond !"
      />
      <p>
        J’appelle le centre d’aide au <CallCTA />
      </p>
      <p>Appel non surtaxé, du lundi au vendredi, de 9h à 18h</p>
    </div>
    <style jsx>{`
      .phone {
        width: calc(100% - 60px);
        padding: 20px;
        margin: 0;
        margin-left: 10px;
        margin-top: ${useMarginTop ? '100px' : '0'};
        display: block;
        position: sticky;
        top: 50px;
        background-color: #ecedf3;
        border-radius: 8px;
        border: 3px solid ${constants.colors.grey};
        font-size: 0.9rem;
        z-index: 2;
      }

      .phone h2 {
        margin: 0;
        padding: 0;
        font-size: 1.4rem;
        margin-top: 20px;
      }

      .phone img {
        position: absolute;
        width: 80px;
        height: 80px;
        top: -20%;
        border-radius: 100px;
        overflow: hidden;
        border: 3px solid #ccc;
        left: calc(50% - 40px);
      }
    `}</style>
  </>
);

export default PhoneCard;
