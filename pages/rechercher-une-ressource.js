import React from 'react';

import { Page } from '../layouts';
import fetchResources from '../services/airtable';
import constants from '../constants';
import { Loader } from '../uiComponents';
import searchVanilla from '../services/searchVanilla';
import { BandeauMediateur, PhoneCard, ReviewCard } from '../components';

const SearchIcon = () => (
  <>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8"></circle>
      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
    </svg>
    <style jsx>{`
      svg {
        margin: 10px;
      }
    `}</style>
  </>
);

const SearchPage = ({ allRessources }) => {
  return (
    <Page title="Solidarité numérique">
      <div className="content-container retour">
        <a href="/#toutes-les-ressources">← Retour</a>
      </div>
      <div className="search-page-header">
        <div className="content-container ">
          <h1>J’ai besoin d’aide pour utiliser internet pour&nbsp;:</h1>
          <div className="search">
            <input
              id="search-input"
              type="text"
              placeholder="rechercher une ressource"
            ></input>
            <button onClick={() => window.searchInRessources()}>
              <SearchIcon />
              Rechercher
            </button>
          </div>
        </div>
      </div>
      <div className="content-container">
        <div id="results-wrapper" className="empty-search">
          <div id="loading">
            <Loader />
          </div>
          <div id="results" className="container" />
          <div id="no-results">
            <p>
              Mmh, il n’y a aucun résultat pour cette recherche. <br />
              Si j’essayais avec un autre mot ? <br />
              Par exemple, si j’ai cherché “santé”, je cherche “médecin” ou
              “docteur”
            </p>
          </div>
          <div id="empty-search">
            <p>
              Pour rechercher une ressource, tapez le mot-clef dans le champ de
              recherche ci-dessus.
            </p>
          </div>
        </div>
      </div>
      <div className="bottom-cards">
        <div className="bottom-cards-wrapper">
          <PhoneCard />
        </div>
        <div className="bottom-cards-wrapper">
          <ReviewCard />
        </div>
      </div>
      <BandeauMediateur />
      <script
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: searchVanilla(JSON.stringify(allRessources)),
        }}
      ></script>
      <style jsx>{`
        .retour {
          font-weight: bold;
          font-family: 'Nunito', sans-serif !important;
          font-size: 1rem;
          margin-top: 5px;
          padding: 5px;
          margin-bottom: 5px;
        }

        .search-page-header {
          background-color: #fff;
          padding: 20px 0;
        }
        .search-page-header h1 {
          color: ${constants.colors.solidNumPurple};
          font-size: 1.6rem;
          line-height: 2rem;
          margin: 0;
          padding: 0;
        }

        .search {
          width: 100%;
          display: flex;
          margin: 10px 0;
        }

        .search input[type='text'] {
          font-size: 1.1rem;
          line-height: 1.8rem;
          padding: 7px 15px;
          flex-grow: 1;
          border: none;
          background-color: #fff;
          border: 2px solid #ccc;
          border-radius: 8px;
        }
        .search input[type='text']:focus {
          border-color: ${constants.colors.blue};
        }

        .search button {
          flex-shrink: 0;
          font-size: 1.1rem;
          line-height: 1.8rem;
          background-color: #c9d3df;
          cursor: pointer;
          margin-left: 10px;
          border-radius: 8px;
          display: flex;
          border: none;
          align-items: center;
          padding: 0 15px;
        }
        .search button:hover {
          background-color: #afbed0;
        }
        .search button:active {
          background-color: #98a9bd;
        }

        .container {
          width: 100%;
          display: grid;
          grid-template-columns: 32% 32% 32%;
          grid-gap: 20px 20px;
        }

        .bottom-cards {
          display: flex;
          justify-content: center;
          align-items: stretch;
          margin-bottom: 70px;
        }
        .bottom-cards-wrapper {
          max-width: 300px;
          margin: 10px;
        }
        @media only screen and (min-width: 1px) and (max-width: 1000px) {
          .search-page-header h1 {
            font-size: 1.3rem;
            line-height: 1.8rem;
          }
        }

        @media only screen and (min-width: 600px) and (max-width: 1000px) {
          .container {
            width: 100%;
            grid-template-columns: 49% 49%;
            margin-bottom: 50px;
          }
        }
        @media only screen and (min-width: 1px) and (max-width: 600px) {
          .container {
            width: 100%;
            grid-template-columns: 100%;
          }
          .search {
            flex-direction: column;
          }
          .search button {
            margin: 10px 0 0;
          }
          .bottom-cards > div:first-of-type {
            display: none;
          }
        }
      `}</style>
    </Page>
  );
};

SearchPage.getInitialProps = async () => {
  const allRessources = await fetchResources();

  const ressourcesAsArray = Object.keys(allRessources).map(key => {
    return {
      title: allRessources[key]['Descriptif sommaire'],
      url: allRessources[key]['Adresse (URL) de la ressource'],
      desc: allRessources[key]['Intitulé de la ressource proposée'],
    };
  });

  return {
    allRessources: ressourcesAsArray,
  };
};

export default SearchPage;
