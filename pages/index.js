import React from 'react';

import { Page } from '../layouts';

import constants from '../constants';
import { ButtonLink } from '../uiComponents';

const BandeauMediateur = () => (
  <>
    <div className="bandeau-mediateur">
      <div className="container content-container">
        <div>
          <h3>Vous êtes un médiateur numérique ?</h3>
          <p>
            Nous avons besoin de vous pour conseiller les usagers et produire
            des resources
          </p>
        </div>
        <div>
          <ButtonLink href="stuff" alt large>
            Rejoignez-nous ➞
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
        flex-direction: row;
        align-items: center;
      }

      .container > div:first-of-type {
        flex-grow: 1;
      }
    `}</style>
  </>
);

const tripletData = [
  {
    alt: 'Une aide pendant le confinement',
    src: '/images/illu_1.svg',
    txt: 'Besoin d’aide avec vos démarches numériques pendant le confinement ?',
  },
  {
    alt: 'Des resources à votre disposition',
    src: '/images/illu_1.svg',
    txt: 'Des resources pour vous guider pas à pas',
  },
  {
    alt: 'Des conseillers à votre écoute',
    src: '/images/illu_3.svg',
    txt:
      'Des conseillers mobilisés pour vous accompagner par téléphone et à distance',
  },
];

const Triplet = () => (
  <>
    <div className="content-container triplet-illu">
      {tripletData.map(data => (
        <div key={data.src}>
          <img src={data.src} alt={data.alt} />
          <p>{data.txt}</p>
        </div>
      ))}
    </div>
    <style jsx>{`
      .triplet-illu {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-bottom: 30px;
      }
      .triplet-illu > div {
        width: 25%;
        position: relative;
      }

      .triplet-illu > div:not(:last-of-type) {
        margin-right: 3%;
      }
      img {
        width: 100%;
      }
      .triplet-illu > div:not(:last-of-type):after {
        content: url('/images/arrow.svg');
        position: absolute;
        top: 30%;
        right: -10%;
      }
      p {
        text-align: center;
        font-size: 0.9rem;
      }
    `}</style>
  </>
);

const HomePage = () => {
  return (
    <Page>
      <BandeauMediateur />
      <div className="baseline layout-center content-container">
        <h1>Centre d’aide pour les démarches en ligne essentielles</h1>
        <h2>
          Les acteurs de la médiation numérique se mobilisent pour vous
          accompagner pendant la crise du covid-19
        </h2>
      </div>
      <Triplet />
      <style jsx>{`
        .baseline {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          text-align: center;
          margin: 30px auto;
        }
        h1 {
          font-size: 1.6rem;
        }
        h2 {
          font-size: 1.2rem;
        }
      `}</style>
    </Page>
  );
};

export default HomePage;
