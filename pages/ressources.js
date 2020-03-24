import React, { Fragment } from 'react';
import Airtable from 'airtable';

import { Page } from '../layouts';
import { categMap, categColors } from '../utils';
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
const Resources = ({ allResourcesByCateg, categories }) => (
  <Page>
    <div className="content-container">
      <h1>Ressources numériques</h1>
      <div className="categories-link-wrapper">
        <div>J’ai besoin d’aide pour :</div>
        <div>
          {categories.map(category => (
            <a
              key={encodeURI(category)}
              className="dont-apply-link-style category-link"
              href={`#${encodeURI(category)}`}
            >
              <div
                className="circle"
                style={{ backgroundColor: categColors[category] }}
              />
              {category}
            </a>
          ))}
        </div>
      </div>
      <div className="resources-container">
        {categories.map(categ => (
          <Fragment key={categ}>
            <h2 id={encodeURI(categ)}>
              <div
                className="circle"
                style={{ backgroundColor: categColors[categ] }}
              />
              {categ}
            </h2>
            <div className="categorie-container">
              {allResourcesByCateg[categ].map(resource => (
                <a
                  key={resource['Adresse (URL) de la ressource']}
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

      .categories-link-wrapper {
        background-color: #ebeff3;
        width: 100%;
        margin-bottom: 70px;
        border-radius: 5px;
        padding: 25px 0;
      }
      .categories-link-wrapper > div {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin: 0 20px;
      }

      .category-link {
        border-radius: 0;
        color: ${constants.colors.fontColor};
        text-decoration: none;
        font-size: 1rem;
        text-decoration: underline;
        line-height: 1.8rem;
        padding: 3px 10px;
        margin: 10px 20px 5px 0;
        transition: background 200ms ease-in-out;
        background-color: #fff;
        border-radius: 4px;
        display: flex;
        align-items: center;
      }
      .category-link:hover {
        background-color: #ebf2ff;
        color: ${constants.colors.vividBlue};
      }
      .category-link > .circle {
        border-radius: 50px;
        width: 10px;
        height: 10px;
        display: block;
        margin-right: 10px;
        left: -20px;
        top: 20px;
      }
      .resources-container h2 {
        position: relative;
      }
      .resources-container h2 > .circle {
        border-radius: 50px;
        width: 10px;
        height: 10px;
        display: block;
        position: absolute;
        left: -20px;
        top: 20px;
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
        transition: border 200ms ease-in-out;
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

  const allResourcesByCateg = resources.reduce((resourcesByCateg, resource) => {
    resource['Domaines'].forEach(domaine => {
      const newDomaine = categMap[domaine];
      if (resourcesByCateg[newDomaine] === undefined) {
        resourcesByCateg[newDomaine] = [resource];
      } else {
        resourcesByCateg[newDomaine].push(resource);
      }
    });
    return resourcesByCateg;
  }, {});

  return { allResourcesByCateg, categories: Object.keys(allResourcesByCateg) };
};

export default Resources;
