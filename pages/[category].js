import React from 'react';
import Airtable from 'airtable';

import categories from '../_ressources/categories.json';
import { Page } from '../layouts';
import { Breadcrumb, CallCTA } from '../uiComponents';

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
      <div className="picto">
        <img src={category.picto} alt={category.title} />
      </div>
      <div>
        <h1>
          <img
            className="mobile-picto"
            src={category.picto}
            alt={category.title}
          />
          {`J’ai besoin d’aide pour ${category.title.toLowerCase()}`}
        </h1>
        <h2>{category.subTitle}</h2>
      </div>
    </div>
    <style jsx>{`
      div.wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      .picto img {
        height: 80px;
        width: 80px;
        margin-right: 15px;
        display: block;
      }

      h1 {
        color: ${constants.colors.solidNumPurple};
        font-size: 1.8rem;
        line-height: 2.2rem;
        margin: 30px auto 10px;
      }

      h1 .mobile-picto {
        display: none;
      }
      h2 {
        color: ${constants.colors.solidNumPurple};
        font-size: 1.1rem;
        line-height: 1.5rem;
        margin: 0px auto 30px;
      }
      @media only screen and (min-width: 1px) and (max-width: 800px) {
        .picto {
          display: none;
        }

        h1 {
          font-size: 1.3rem;
          line-height: 1.8rem;
          margin: 30px auto 10px;
          display: flex;

          align-items: center;
        }
        h1 .mobile-picto {
          height: 50px;
          width: 50px;
          margin-right: 10px;
          display: block;
        }
        h2 {
          font-size: 1rem;
          line-height: 1.3rem;
          margin: 20px auto 30px;
        }
      }
    `}</style>
  </>
);

const TypeLabel = ({ type }) => {
  const iconMatcher = {
    article: { path: 'icon_article.svg', label: 'article' },
    video: { path: 'icon_video.svg', label: 'video' },
    'site web': { path: 'icon_site.svg', label: 'site internet' },
    tutoriel: { path: 'icon_pasapas.svg', label: 'pas à pas' },
    webinaire: { path: 'icon_webinar.svg', label: 'webinaire' },
    'document à télécharger': {
      path: 'icon_document.svg',
      label: 'document',
    },
  };
  const icon = iconMatcher[type];

  return (
    <>
      <div>
        {icon && <img src={'/images/icon/' + icon.path} alt={type} />}
        {type}
      </div>
      <style jsx>{`
        div {
          background-color: #ecedf3;
          color: #53657d;
          display: flex;
          align-items: center;
          padding: 3px;
          border-radius: 4px;
          margin: 0 0 20px 20px;
        }
        div > img {
          width: 20px;
          height: 20px;
          padding: 4px;
        }
      `}</style>
    </>
  );
};

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
            <div>
              <TypeLabel type={resource['Type de ressource']} />
            </div>
          </a>
        ))}
      </div>
      {/* <div className="phone">
        <h2>J’ai besoin d’aide</h2>
        <p>
          J’appelle le centre d’aide au <CallCTA />
        </p>
        <p>Appel non surtaxé, du lundi au vendredi, de 8h à 18h</p>
      </div> */}
    </div>
    <style jsx>{`
      .page-head-wrapper {
        background-color: #fff;
      }
      .ressource-wrapper {
        margin-top: 35px;
        margin-bottom: 70px;
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
      }
      .container {
        width: 100%;
        display: grid;
        grid-template-columns: 32% 32% 32%;
        grid-gap: 20px 20px;
      }
      .phone {
        width: calc(33% - 40px);
        padding: 20px;
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
          display: grid;
          grid-template-columns: 49% 49%;
          grid-gap: 20px 20px;
          margin-bottom: 50px;
        }
        .phone {
          display: none;
        }
      }
      @media only screen and (min-width: 1px) and (max-width: 600px) {
        .container {
          width: 100%;
          display: grid;
          grid-template-columns: 100%;
        }
        .phone {
          display: none;
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
