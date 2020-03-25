import React from 'react';

import { Page } from '../layouts';
import categories from '../_ressources/categories.json';
import { BandeauMediateur } from '../components';

import constants from '../constants';
import { CallCTA } from '../uiComponents';

const Categories = () => (
  <>
    <div id="toutes-les-ressources" className="content-container">
      <h2>J’ai besoin d’aide pour :</h2>
      <div className="categorie-container">
        {Object.keys(categories).map(categoryKey => {
          const category = categories[categoryKey];
          return (
            <a
              key={category.path}
              href={category.path}
              className="resource dont-apply-link-style"
            >
              <div>
                <h3>{category.title}</h3>
                {category.description.map(desc => (
                  <p>{desc}</p>
                ))}
              </div>
            </a>
          );
        })}
      </div>
    </div>
    <style jsx>{`
      .categorie-container {
        display: grid;
        grid-template-columns: 30% 30% 30%;
        justify-content: space-between;
        grid-gap: 40px 40px;
        margin-bottom: 50px;
      }
      a.resource {
        width: 100%;
        text-decoration: none;
        background-color: #fff;
        border: 3px solid ${constants.colors.grey};
        border-radius: 8px;
        transition: border 200ms ease-in-out;
      }
      a.resource:hover {
        border: 3px solid ${constants.colors.blue};
      }

      a.resource > div {
        margin: 20px;
      }
      a.resource h3 {
        margin-bottom: 10px;
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: bold;
        text-decoration: underline;
      }
      a.resource p {
        color: ${constants.colors.fontColor};
        font-size: 1rem;
        padding: 0;
        line-height: 1.3rem;
        margin-bottom: 10px;
      }
      @media only screen and (min-width: 600px) and (max-width: 1000px) {
        .categorie-container {
          display: grid;
          grid-template-columns: 48% 48%;
          justify-content: space-between;
          grid-gap: 20px 20px;
          margin-bottom: 50px;
        }
      }
      @media only screen and (min-width: 1px) and (max-width: 600px) {
        .categorie-container {
          display: grid;
          grid-template-columns: 100%;
          justify-content: space-between;
        }
      }
    `}</style>
  </>
);

const HomePage = () => {
  return (
    <Page title="Solidarité numérique">
      <div className="baseline layout-center content-container">
        <div className="hero-img">
          <img
            src="/images/illus/illu_solidnum.png"
            alt="Solidarite numerique, le centre d’aide pour les démarche en ligne"
          />
        </div>
        <div className="hero-text">
          <h1>Centre d’aide pour les démarches en ligne essentielles</h1>
          <h2>
            Je trouve des réponses en ligne, ou j’appelle le&nbsp;
            <CallCTA />
          </h2>
          <p>Appel gratuit, du lundi au vendredi, de 8h à 18h</p>
        </div>
      </div>
      <Categories />
      <BandeauMediateur />

      <style jsx>{`
        .baseline {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          text-align: center;
          margin: 50px auto;
        }
        h1 {
          font-size: 1.6rem;
          line-height: 2.4rem;
          margin: 30px auto 10px;
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
          width: calc(100% - 550px);
        }
        .hero-img img {
          min-width: 200px;
          width: 100%;
          min-height: 20px;
        }

        .hero-text {
          width: 450px;
          text-align: left;
        }

        @media only screen and (min-width: 1px) and (max-width: 1000px) {
          .baseline {
            display: flex;
            flex-direction: column-reverse;
            text-align: center;
            margin: 50px auto;
          }
          .hero-text,
          .hero-img {
            width: 100%;
            max-width: 570px;
          }
          .hero-text {
            margin-bottom: 50px;
          }
          h1 {
            margin: 20px auto;
            text-align: left;
            font-size: 1.4rem;
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
