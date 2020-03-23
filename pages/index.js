import React from 'react';

import { Page } from '../layouts';

import constants from '../constants';
import { ButtonLink } from '../uiComponents';

const BandeauMediateur = () => (
  <>
    <div className="bandeau-mediateur">
      <div className="container content-container">
        <div>
          <h3>Vous êtes un médiateur numérique&nbsp;?</h3>
          <p>
            Nous avons besoin de vous pour conseiller les usagers et produire
            des ressources
          </p>
        </div>
        <div>
          <ButtonLink href="/rejoignez-nous" alt large>
            Je veux aider&nbsp;➞
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

const tripletData = [
  {
    alt: 'Une aide pendant le confinement',
    src: '/images/illus/illu_1.svg',
    txt:
      'Besoin d’aide avec vos démarches numériques pendant le confinement&nbsp;?',
  },
  {
    alt: 'Des ressources à votre disposition',
    src: '/images/illus/illu_2.svg',
    txt: 'Accédez à des ressources pour vous guider',
    linkTo: '/ressources',
  },
  {
    alt: 'Des conseillers à votre écoute',
    src: '/images/illus/illu_3.svg',
    txt:
      'Des conseillers mobilisés pour vous accompagner par téléphone et à distance',
  },
];

const Triplet = () => (
  <>
    <div className="content-container triplet-illu">
      {tripletData.map(data => (
        <React.Fragment key={data.src}>
          {data.linkTo ? (
            <a href={data.linkTo} key={data.src}>
              <img src={data.src} alt={data.alt} />
              <p dangerouslySetInnerHTML={{ __html: data.txt }} />
            </a>
          ) : (
            <div key={data.src}>
              <img src={data.src} alt={data.alt} />
              <p dangerouslySetInnerHTML={{ __html: data.txt }} />
            </div>
          )}
        </React.Fragment>
      ))}
    </div>
    <style jsx>{`
      .triplet-illu {
        display: flex;
        flex-direction: row;
        justify-content: center;
        margin-bottom: 60px;
      }
      .triplet-illu > div,
      .triplet-illu > a {
        border: 3px solid ${constants.colors.grey};
        transition: border 200ms ease-in-out;
        border-radius: 8px;
        background-color: #fff;
        width: 25%;
        position: relative;
        padding: 15px;
      }
      .triplet-illu > div {
        background-color: #fefefe;
        border-color: #e6e6e6;
      }

      .triplet-illu > a :hover {
        border-color: ${constants.colors.blue};
      }

      .triplet-illu > div,
      .triplet-illu > a {
        margin: 0 10px 30px;
      }
      img {
        width: 100%;
        height: 250px;
      }

      p {
        text-align: center;
        font-size: 1rem;
        line-height: 1.4rem;
      }

      @media only screen and (min-width: 1px) and (max-width: 800px) {
        .triplet-illu {
          flex-direction: column;
        }
        .triplet-illu > div,
        .triplet-illu > a {
          width: 80%;
        }
      }
    `}</style>
  </>
);

const HomePage = () => {
  return (
    <Page title="Solidarité numérique">
      <div className="baseline layout-center content-container">
        <h1>Centre d’aide pour les démarches en ligne essentielles</h1>
        <h2>
          Les acteurs de la médiation numérique se mobilisent pour vous
          accompagner pendant la crise du covid-19
        </h2>
      </div>
      <Triplet />
      <BandeauMediateur />

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
          margin: 30px auto 10px;
        }
        h2 {
          font-size: 1.2rem;
        }

        @media only screen and (min-width: 1px) and (max-width: 800px) {
          h1 {
            margin: 20px auto;
            text-align: left;
            font-size: 1.4rem;
            line-height: 1.8rem;
          }
          h2 {
            display: none;
          }
        }
      `}</style>
    </Page>
  );
};

export default HomePage;
