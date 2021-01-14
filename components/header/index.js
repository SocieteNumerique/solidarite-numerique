import React from 'react';
import constants from '../../constants';

import { BandeauGouv } from '../../components';
import { CallCTA } from '../../uiComponents';

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

const Header = () => {
  return (
    <>
      <header id="header">
        <BandeauGouv />
        <nav className="nav content-container">
          <div className="container">
            <div className="top-left-wrapper">
              <div className="logo layout-center">
                <a href="/" className="dont-apply-link-style">
                  <img
                    src="/images/logo/snum.svg"
                    alt="Logo solidarite-numerique"
                  />
                </a>
              </div>
              <div className="title">
                <a
                  href="/"
                  className="dont-apply-link-style"
                  title="lien vers la page d'accueil"
                >
                  <div id="site-title">Solidarité numérique</div>
                </a>
                <CallCTA inHeader />
              </div>
            </div>
            <div style={{ flexGrow: 1 }} />
            <div className="ressources-link">
              <a
                href="/rechercher-une-ressource"
                title="Rechercher une ressource dans le site"
              >
                <SearchIcon />
                <span>Rechercher une ressource</span>
              </a>
            </div>
          </div>
        </nav>
      </header>
      <style jsx>{`
        header {
          top: 0;
          z-index: 1000;
          width: 100%;
          background: #fff;
          position: relative;
        }

        .nav {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          margin: auto;
          height: 100%;
          z-index: 100;
        }

        .nav .container {
          display: flex;
          flex-direction: row;
          flex: 1;
          justify-content: space-between;
          flex-wrap: wrap;
          align-items: center;
        }

        .top-left-wrapper {
          display: flex;
          flex-direction: row;
        }
        .top-left-wrapper > .logo {
          margin: 0 20px 0 0;
        }
        .top-left-wrapper > .logo img {
          width: 60px;
        }
        .top-left-wrapper > .title a {
          margin-top: 15px;
          display: inherit;
          font-size: 1.1rem;
          text-decoration: none;
          font-weight: bold;
          font-family: 'Nunito', sans-serif !important;

          color: ${constants.colors.solidNumPurple};
        }
        .top-left-wrapper > .title a:hover {
          text-decoration: underline;
        }
        .ressources-link > a {
          display: flex;
          justify-content: flex-end;
          align-items: center;
          text-decoration: none;
          color: ${constants.colors.fontColor};
          padding-right: 10px;
        }
        .ressources-link > a :hover {
          text-decoration: underline;
        }
        @media (max-width: 800px) {
          .ressources-link > a > span {
            display: none;
          }
          .ressources-link > a {
            padding-right: 0;
          }
          .top-left-wrapper > .title a,
          .top-left-wrapper > .logo {
            margin: 0;
          }
          .title {
            display: flex;
            align-items: center;
            margin: 10px 0;
          }
          .top-left-wrapper {
            max-width: calc(100% - 70px);
          }
          .logo { align-items: center; }
          .logo img {
            margin: 5px 0;
            height: 40px;
          }
        }
      `}</style>
    </>
  );
};

export default Header;
