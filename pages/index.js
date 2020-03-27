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
                <h3>
                  <img src={category.picto} alt={category.title} />
                  {category.title}
                </h3>
                {category.description.map(desc => (
                  <p key={desc}>{desc}</p>
                ))}
              </div>
            </a>
          );
        })}
      </div>
    </div>
    <style jsx>{`
      #toutes-les-ressources {
        margin-top: 40px;
      }
      .categorie-container {
        display: grid;
        grid-template-columns: 32% 32% 32%;
        justify-content: space-between;
        grid-gap: 30px 30px;
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
        margin-bottom: 30px;
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: bold;
        text-decoration: underline;
        display: flex;
        align-items: center;
      }

      a.resource h3 > img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }
      a.resource p {
        color: ${constants.colors.fontColor};
        font-size: 1rem;
        padding: 0;
        line-height: 1.3rem;
        margin-bottom: 5px;
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
      <div className="baseline">
        <div className="content-container ">
          <div className="hero-img">
            <img
              src="/images/illus/illu_solidnum.png"
              alt="Solidarite numerique, le centre d’aide pour les démarche en ligne"
            />
          </div>
          <div className="hero-text">
            <h1>Centre d’aide pour les démarches en ligne essentielles</h1>
            {/* <h2>
              Je trouve des réponses en ligne, ou j’appelle le&nbsp;
              <CallCTA />
            </h2>
            <p>Appel non surtaxé, du lundi au vendredi, de 8h à 18h</p> */}
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
