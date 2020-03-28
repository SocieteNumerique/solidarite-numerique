import React from 'react';

import categories from '../_ressources/categories.json';
import { Page } from '../layouts';
import { CallCTA, TypeLabel } from '../uiComponents';
import { Pagehead } from '../components';
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
    <Page>
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
        {/* <div className="phone">
          <h2>J’ai besoin d’aide</h2>
          <p>
            J’appelle le centre d’aide au <CallCTA />
          </p>
          <p>Appel non surtaxé, du lundi au vendredi, de 9h à 18h</p>
        </div> */}
      </div>
      <style jsx>{`
        .page-head-wrapper {
          background-color: #fff;
        }
        .retour {
          font-weight: bold;
          font-size: 1rem;
          margin-top: 5px;
          padding: 5px;
          margin-bottom: 5px;
        }
        .ressource-wrapper {
          margin-top: 0px;
          margin-bottom: 70px;
          display: flex;
          align-items: flex-start;
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
        .phone {
          width: calc(28% - 60px);
          padding: 20px;
          margin-top: 100px;
          display: block;
          position: sticky;
          background-color: #ecedf3;
          border-radius: 8px;
          border: 3px solid ${constants.colors.grey};
          top: 20px;
          font-size: 0.9rem;
        }

        .phone h2 {
          margin: 0;
          padding: 0;
          font-size: 1.4rem;
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
          .container {
            width: 100%;
          }
          .container > div {
            grid-template-columns: 49% 49%;
            margin-bottom: 50px;
          }
          .phone {
            display: none;
          }
        }
        @media only screen and (min-width: 1px) and (max-width: 600px) {
          .container {
            width: 100%;
          }
          .container > div {
            grid-template-columns: 100%;
          }
          .phone {
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
