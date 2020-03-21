import React, { Fragment } from 'react';
import Airtable from 'airtable';

import { Page } from '../layouts';

import constants from '../constants';

const ERROR_CODE = -1;

const CATEG = {
  '1- Consulter son médecin en ligne et déclarer son arrêt maladie':
    'Se soigner',
  '2- Faire ses courses alimentaires en ligne': 'Acheter en lignes',
  '3- Télétravailler': 'Télétravailler',
  '4- Rester en contact avec ses proches': 'Échanger avec ses proches',
  "5- S'informer et trouver des informations vérifiées": 'S’informer',
  "6- Faire l'école à la maison": 'Faire l’école à la maison',
  '7- Faire ses déclarations pour soi et sa famille':
    'Faire ses déclaration en ligne',
  '8 - Faire ses déclarations pour son travail':
    'Faire ses déclaration en ligne',
  '9 - Faire ses démarches d’entreprises': 'Faire ses déclaration en ligne',
};

const fetchResources = () => {
  return new Promise((resolve, reject) => {
    const DB = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
      process.env.AIRTABLE_APP
    );

    let results = [];
    DB('ressources')
      .select({
        view: 'Grid view',
        filterByFormula: "({Statut} = 'publié')",
      })
      .eachPage(
        function page(records, fetchNextPage) {
          // This function (`page`) will get called for each page of records.
          records.forEach(record => {
            results.push(record.fields);
          });

          // To fetch the next page of records, call `fetchNextPage`.
          // If there are more records, `page` will get called again.
          // If there are no more records, `done` will get called.
          fetchNextPage();
        },
        function done(err) {
          resolve(results);
          if (err) {
            console.error(err);
            reject([ERROR_CODE]);
          }
        }
      );
  });
};
const Resources = ({ resources, categories }) => (
  <Page>
    <div className="content-container">
      <h1>Ressources numériques sur le COVID-19</h1>
      <div className="resources-container">
        {categories.map(categ => (
          <Fragment key={categ}>
            <h2>{categ}</h2>
            <div className="categorie-container">
              {resources
                .filter(
                  a =>
                    (CATEG[a['Domaines']] || a['Domaines']).indexOf(categ) > -1
                )
                .map(resource => (
                  <a
                    key={resource['Votre identifiant de confiance']}
                    rel="noopener noreferrer"
                    target="_blank"
                    href={resource['Adresse (URL) de la ressource']}
                    className="resource dont-apply-link-style"
                  >
                    <h3>{resource['Intitulé de la ressource proposée']}</h3>
                    <p>{resource['Descriptif sommaire']}</p>
                  </a>
                ))}
            </div>
          </Fragment>
        ))}
      </div>
    </div>
    <style jsx>{`
      .resources-container {
        margin: 40px auto;
      }
      .categorie-container {
        display: grid;
        grid-template-columns: 32% 32% 32%;
        justify-content: space-between;
        grid-gap: 20px 20px;
        margin-bottom: 50px;
      }
      a.resource {
        width: 100%;
        text-decoration: none;
        background-color: #fff;
        border: 3px solid ${constants.colors.grey};
        border-radius: 8px;
        transition: border 300ms ease-in-out;
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
      }
      @media only screen and (min-width: 600px) and (max-width: 1000px) {
        .categorie-container {
          display: grid;
          grid-template-columns: 49% 49%;
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
  </Page>
);

Resources.getInitialProps = async ctx => {
  const resources = await fetchResources();

  const categories = resources.reduce((categs, resource) => {
    resource['Domaines'].forEach(domaine => {
      console.log(categs, domaine);
      if (categs.indexOf(CATEG[domaine] || domaine) === -1) {
        categs.push(CATEG[domaine] || domaine);
      }
      console.log(categs, domaine);
    });
    return categs;
  }, []);

  return { resources, categories };
};

export default Resources;
