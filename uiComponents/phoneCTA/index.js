import React from 'react';

import constants from '../../constants';

const CallCTA = ({ inHeader }) => (
  <>
    <a
      href="tel:0176350378"
      title="Numéro de téléphone Solidarité numériqeu"
      className="dont-apply-link-style"
    >
      <div>01 70 77 23 72</div>
    </a>
    <style jsx>{`
      a {
        text-decoration: none;
        padding: 0px 10px;
        color: ${constants.colors.fontColor};
        height: 35px;
        font-size: 1.2rem;
        background-color: ${constants.colors.solidNumYellow};
        font-weight: bold;
        position: relative;
        display: inline-block;
        margin: 2px auto 20px;
        align-items: center;
        justify-content: center;
      }
      a:after {
        content: '(appel gratuit)';
        display: ${inHeader ? 'block' : 'none'};
        position: absolute;
        right: -100px;
        top: 5px;
        font-size: 0.7rem;
        font-weight: bold;
      }
      a > div {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      @media (max-width: 800px) {
        a {
          display: ${inHeader ? 'none' : 'inline-block'};
        }
      }
    `}</style>
  </>
);

export { CallCTA };