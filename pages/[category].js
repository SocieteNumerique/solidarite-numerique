import React from 'react';

import categories from '../_ressources/categories.json';
import { Page } from '../layouts';
import { TypeLabel } from '../uiComponents';
import {
  Pagehead,
  BandeauMediateur,
  PhoneCard,
  ReviewCard,
} from '../components';
import fetchResources from '../services/airtable';

import constants from '../constants';

const computeResBySubCateg = ressources =>
  ressources.reduce((ressourcesAcc, res) => {
    const subCateg = res.Sous_domaine || 'Autre';
    if (ressourcesAcc[subCateg] === undefined) {
      ressourcesAcc[subCateg] = [res];
    } else {
      ressourcesAcc[subCateg].push(res);
    }
    return ressourcesAcc;
  }, []);

const Resource = ({ ressources, category }) => {
  const ressourcesBySubCateg = computeResBySubCateg(ressources);
  return (
    <Page title={`Solidarité Numérique - Ressources : ${category.title}`}>
      <div className="content-container retour">
        <a href="/#toutes-les-ressources">← Retour</a>
      </div>
      <div className="page-head-wrapper">
        <Pagehead category={category} />
      </div>
      <div className="content-container table-des-matieres">
        Dans cette page :
        <div>
          {Object.keys(ressourcesBySubCateg).map(subCateg => (
            <div key={`${subCateg}-links`}>
              <a href={`#${subCateg}`}>{subCateg}</a>
            </div>
          ))}
        </div>
      </div>
      <div className="content-container ressource-wrapper">
        <div className="container">
          {Object.keys(ressourcesBySubCateg).map(subCateg => (
            <React.Fragment key={subCateg}>
              <h2 id={subCateg}>{subCateg}</h2>
              <div>
                {ressourcesBySubCateg[subCateg].map(resource => (
                  <a
                    key={resource['Intitulé de la ressource proposée']}
                    title={resource['Intitulé de la ressource proposée']}
                    rel="noopener noreferrer"
                    target="_blank"
                    href={resource['Adresse (URL) de la ressource']}
                    className="resource dont-apply-link-style"
                  >
                    <h3>{resource['Intitulé de la ressource proposée']}</h3>
                    <p>{resource['Descriptif sommaire']}</p>
                    <div>
                      <TypeLabel type={resource['Type de ressource']} />
                    </div>
                  </a>
                ))}
              </div>
            </React.Fragment>
          ))}
        </div>
        <div className="right-column">
          <PhoneCard useMarginTop={true} />
          <div>
            <a href="#header">↑ Revenir en au haut de la page</a>
          </div>
        </div>
      </div>
      <div className="content-container" style={{ marginBottom: '40px' }}>
        <ReviewCard />
      </div>
      <BandeauMediateur />
      <style jsx>{`
        .page-head-wrapper {
          background-color: #fff;
        }
        .retour {
          font-weight: bold;
          font-family: 'Nunito', sans-serif !important;
          font-size: 1rem;
          margin-top: 5px;
          padding: 5px;
          margin-bottom: 5px;
        }
        .ressource-wrapper {
          margin-top: 0px;
          margin-bottom: 70px;
          display: flex;
          align-items: normal;
          justify-content: space-between;
        }
        .table-des-matieres {
          margin-top: 30px;
          margin-bottom: 20px;
        }

        .table-des-matieres > div {
          border-left: 4px solid ${constants.colors.blue};
          padding-left: 20px;
        }
        .table-des-matieres > div > div {
          margin: 10px 0;
        }
        .container {
          width: 71%;
        }
        .container h2 {
          min-height: 60px;
          padding: 0;
          margin: 30px 0 10px;
        }
        .container > div {
          display: grid;
          grid-template-columns: 49% 49%;
          grid-gap: 20px 20px;
        }

        .right-column {
          width: 28%;
          padding: 0;
          margin: 0;
        }
        .right-column > div:last-of-type {
          position: sticky;
          top: 90vh;
          margin-left: 20px;
          z-index: 1;
        }

        a.resource {
          width: 100%;
          text-decoration: none;
          background-color: #fff;
          border: 3px solid ${constants.colors.grey};
          border-radius: 8px;
          transition: border 200ms ease-in-out;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        a.resource:hover {
          border: 3px solid ${constants.colors.blue};
        }
        .resource h3 {
          margin: 20px 20px 10px;
          font-size: 1rem;
          line-height: 1.5rem;
          font-weight: bold;
          text-decoration: underline;
        }
        a.resource > p {
          color: ${constants.colors.fontColor};
          font-size: 1rem;
          margin: 0 20px 20px;
          padding: 0;
          line-height: 1.5rem;
          flex-grow: 1;
        }
        @media only screen and (min-width: 600px) and (max-width: 1000px) {
          .container > div {
            grid-template-columns: 49% 49%;
            margin-bottom: 50px;
          }
        }
        @media only screen and (min-width: 1px) and (max-width: 600px) {
          .container > div {
            grid-template-columns: 100%;
          }
        }
        @media only screen and (min-width: 1px) and (max-width: 1000px) {
          .container {
            width: 100%;
          }
          .right-column {
            display: none;
          }
        }
      `}</style>
    </Page>
  );
};

Resource.getInitialProps = async ({ query }) => {
  const categoryPath = query.category;
  const airTableCategorie = Object.keys(categories).filter(
    k => categories[k].path === categoryPath
  )[0];

  const category = categories[airTableCategorie];

  const ressources = await fetchResources(airTableCategorie);

  return { ressources, category };
};

export default Resource;
