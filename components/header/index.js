import React from 'react';

const CallCTA = () => (
  <>
    <a href="tel:0176350378" className="dont-apply-link-style">
      <div>01 76 35 03 78</div>
    </a>
    <style jsx>{`
      a {
        text-decoration: none;
        padding: 0px 10px;
        color: #000;
        height: 35px;
        font-size: 1.2rem;
        background-color: #ffc107;
        border: 1px solid #000;
        font-weight: bold;
        position: relative;
        display: inline-block;
        margin: 2px auto 25px;
        align-items: center;
        justify-content: center;
      }
      a:after {
        content: '(appel gratuit)';
        position: absolute;
        right: 2px;
        bottom: -20px;
        font-size: 0.7rem;
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
