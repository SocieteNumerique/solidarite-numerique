import React from 'react';
import Airtable from 'airtable';

import { Page } from '../layouts';
import { ButtonLink } from '../uiComponents';

import constants from '../constants';

const ERROR_CODE = -1;

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
const Resources = ({ resources }) => (
  <Page>
    <div className="text-container">
      <h1>Ressources numériques sur le COVID-19</h1>
      <div className="resources-container">
        {resources.map(resource => (
          <>
            {resource === ERROR_CODE ? (
              <div>Erreur</div>
            ) : (
              <div className="resource">
                <h2>{resource['Intitulé de la ressource proposée']}</h2>
                <p>{resource['Descriptif sommaire']}</p>
                <div className="resource-btn-container">
                  <ButtonLink
                    rel="noopener noreferrer"
                    target="_blank"
                    href={resource['Adresse (URL) de la ressource']}
                  >
                    Accéder au {resource['Type de ressource'] || 'site web'}
                  </ButtonLink>
                </div>
              </div>
            )}
          </>
        ))}
      </div>
    </div>
    <style jsx>{`
      .resources-container {
        margin: 40px auto;
      }
      .resource {
        background-color: #fff;
        border: 1px solid ${constants.colors.blue};
        border-radius: 5px;
        padding: 35px;
      }
      .resource h2 {
        margin-top: 0;
      }
      .resource-btn-container {
        width: 100%;
        display: flex;
        align-items: flex-end;
        flex-direction: column;
        margin-top: 20px;
      }
    `}</style>
  </Page>
);

Resources.getInitialProps = async ctx => {
  const resources = await fetchResources();
  return { resources };
};

export default Resources;
