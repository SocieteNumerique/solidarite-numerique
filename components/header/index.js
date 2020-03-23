import React from 'react';

import constants from '../../constants';

const CallCTA = () => (
  <>
    <a href="tel:0176350378" className="dont-apply-link-style">
      <div>01 76 35 03 78</div>
    </a>
    <style jsx>{`
      a {
        text-decoration: none;
        padding: 0px 10px;
        color: ${constants.colors.fontColor};
        height: 35px;
        font-size: 1.3rem;
        background-color: #7de4b3;
        position: relative;
        display: inline-block;
        margin: 10px auto 30px;
        align-items: center;
        justify-content: center;
      }
      a:after {
        content: '(appel gratuit)';
        position: absolute;
        right: 2px;
        bottom: -25px;
        font-size: 0.8rem;
        font-weight: bold;
      }
      a > div {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
    `}</style>
  </>
);

const Header = ({ headerKey = 'home' }) => {
  return (
    <>
      <header role="navigation">
        <nav className="nav content-container">
          <div className="container">
            <div className="top-left-wrapper">
              <div className="logo layout-center">
                <img
                  src="/images/logo/phoneheart.svg"
                  alt="Logo solidarite-numerique"
                />
              </div>
              <div className="title">
                <a href="/" className="dont-apply-link-style">
                  <div id="site-title">Solidarité numérique</div>
                </a>
                <CallCTA />
              </div>
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
          margin: 0 20px;
        }
        .top-left-wrapper > .logo img {
          width: 30px;
        }
        .top-left-wrapper > .title a {
          display: inherit;
          font-size: 1.2rem;
          text-decoration: none;
          font-weight: bold;
          color: #000;
        }
        .top-left-wrapper > .title a:hover {
          text-decoration: underline;
        }

        @media (max-width: 1024px) {
        }
      `}</style>
    </>
  );
};

export default Header;
