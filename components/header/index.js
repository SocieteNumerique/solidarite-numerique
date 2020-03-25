import React from 'react';
import constants from '../../constants';

import { CallCTA } from '../../uiComponents';

const RessourcesIcon = () => (
  <>
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="4" cy="4" r="2" fill={`${constants.colors.fontColor}`} />
      <circle cx="12" cy="4" r="2" fill={`${constants.colors.fontColor}`} />
      <circle cx="20" cy="4" r="2" fill={`${constants.colors.fontColor}`} />
      <circle cx="4" cy="12" r="2" fill={`${constants.colors.fontColor}`} />
      <circle cx="12" cy="12" r="2" fill={`${constants.colors.fontColor}`} />
      <circle cx="20" cy="12" r="2" fill={`${constants.colors.fontColor}`} />
      <circle cx="4" cy="20" r="2" fill={`${constants.colors.fontColor}`} />
      <circle cx="12" cy="20" r="2" fill={`${constants.colors.fontColor}`} />
      <circle cx="20" cy="20" r="2" fill={`${constants.colors.fontColor}`} />
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
      <header role="navigation">
        <nav className="nav content-container">
          <div className="container">
            <div className="top-left-wrapper">
              <div className="logo layout-center">
                <a href="/" className="dont-apply-link-style">
                  <img
                    src="/images/logo/phoneheart.svg"
                    alt="Logo solidarite-numerique"
                  />
                </a>
              </div>
              <div className="title">
                <a href="/" className="dont-apply-link-style">
                  <div id="site-title">Solidarité numérique</div>
                </a>
                <CallCTA withLabel />
              </div>
            </div>
            <div style={{ flexGrow: 1 }} />
            <div className="ressources-link">
              <a href="/#toutes-les-ressources">
                <RessourcesIcon />
                <span>Toutes les ressources</span>
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
