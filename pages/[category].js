import React from 'react';
import Airtable from 'airtable';

import categories from '../_ressources/categories.json';
import { Page } from '../layouts';
import { Breadcrumb } from '../uiComponents';

import constants from '../constants';

const fetchResources = airTableCategory => {
  return new Promise((resolve, reject) => {
    const DB = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
      process.env.AIRTABLE_APP
    );
    let results = [];
    DB('ressources')
      .select({
        view: 'Grid view',
        filterByFormula: `AND({Statut} = 'publié', FIND("${airTableCategory}", {Domaines}) > 0)`,
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
            reject([500]);
          }
        }
      );
  });
};

const Pagehead = ({ category }) => (
  <>
    <div className="wrapper content-container">
      <div className="picto">Picto</div>
      <div>
        <h1>{`J’ai besoin d’aide pour ${category.title.toLowerCase()}`}</h1>
        <h2>{category.subTitle}</h2>
      </div>
    </div>
    <style jsx>{`
      div.wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      .picto {
        height: 80px;
        width: 80px;
      }

      h1 {
        color: ${constants.colors.solidNumPurple};
        font-size: 1.8rem;
        line-height: 2.2rem;
        margin: 30px auto 10px;
      }
      h2 {
        color: ${constants.colors.solidNumPurple};
        font-size: 1.2rem;
        line-height: 1.6rem;
        margin: 0px auto 30px;
      }
    `}</style>
  </>
);

const Resource = ({ ressources, category }) => (
  <Page>
    <div className="content-container">
      <Breadcrumb name={category.title} />
    </div>
    <div className="page-head-wrapper">
      <Pagehead category={category} />
    </div>
    <div className="content-container ressource-wrapper">
      <div className="container">
        {ressources.map(resource => (
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
    </div>
    <style jsx>{`
      .page-head-wrapper {
        background-color: #fff;
      }
      .ressource-wrapper {
        margin-top: 50px;
        margin-bottom: 70px;
      }
      .container {
        display: grid;
        grid-template-columns: 32% 32% 32%;
        justify-content: space-between;
        grid-gap: 20px 20px;
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
