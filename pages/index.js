import React from 'react';

import { Page } from '../layouts';
import { BandeauMediateur, Categories } from '../components';

import { CallCTA } from '../uiComponents';

const HomePage = () => {
  return (
    <Page title="Solidarité numérique">
      <div className="baseline">
        <div className="content-container ">
          <div className="hero-img">
            <img
              src="/images/illus/illu_home.svg"
              alt="Solidarite numerique, le centre d’aide pour les démarche en ligne"
              title="Solidarite numerique, le centre d’aide pour les démarche en ligne"
            />
          </div>
          <div className="hero-text">
            <h1>Centre d’aide pour les démarches en ligne essentielles</h1>
            <h2>
              Je trouve des réponses en ligne, ou j’appelle le&nbsp;
              <CallCTA />
            </h2>
            <p>Appel non surtaxé, du lundi au vendredi, de 9h à 18h</p>
          </div>
        </div>
      </div>
      <Categories />
      <BandeauMediateur />

      <style jsx>{`
        .baseline {
          margin: 0;
          width: 100%;
          background-color: #ecedf3;
        }
        .baseline > div {
          padding: 0;
          margin: 0 auto;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          align-items: flex-end;
          text-align: center;
        }
        h1 {
          font-size: 1.6rem;
          line-height: 2.4rem;
          margin: 10px auto 10px;
        }
        h2 {
          font-size: 1.2rem;
          line-height: 1.6;
          margin: 30px auto 5px;
        }
        p {
          font-size: 0.9rem;
          margin: 0px auto 10px;
        }

        .hero-img {
          width: calc(95% - 450px);
        }
        .hero-img img {
          min-width: 200px;
          width: 100%;
          min-height: 20px;
          display: block;
        }

        .hero-text {
          width: 450px;
          margin: 50px 0;
          text-align: left;
        }

        @media only screen and (min-width: 1px) and (max-width: 1000px) {
          .baseline > div {
            display: flex;
            flex-direction: column-reverse;
            text-align: center;
            align-items: center;
          }
          .hero-text,
          .hero-img {
            width: 100%;
            max-width: 570px;
          }
          .hero-text {
            margin: 30px 0;
          }
          h1 {
            margin: 0 auto 20px;
            text-align: left;
            font-size: 1.5rem;
            line-height: 1.8rem;
          }
          h2 {
            font-size: 1rem;
            line-height: 1.4rem;
          }
        }
      `}</style>
    </Page>
  );
};

export default HomePage;
