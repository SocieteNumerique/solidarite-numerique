import React from 'react';

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="container content-container">
          <ul className="footer__links">
            <li>
              <a
                href="https://beta.gouv.fr/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Une réalisation de beta.gouv.fr
              </a>
            </li>
            <li>
              <a
                href="https://etatplateforme.modernisation.gouv.fr/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Un site de l'État plateforme
              </a>
            </li>
            <li>
              <a href="/mentions-legales">Mentions Légales</a>
            </li>
            <li>
              <a href="/vie-privee">Suivi d'audience & vie privée</a>
            </li>
          </ul>
        </div>
        <ul className="footer__social">
          <li>
            <a href="https://twitter.com/BetaGouv" title="Twitter">
              <img
                src="/images/social/twitter.svg"
                alt="Twitter"
                className="icon icon-twitter"
              />
            </a>
          </li>
          <li>
            <a href="https://github.com/betagouv/api.gouv.fr" title="Github">
              <img
                src="/images/social/github.svg"
                alt="Github"
                className="icon icon-github"
              />
            </a>
          </li>
          <li>
            <a href="/contact" title="Nous contacter">
              <img
                src="/images/social/email.svg"
                alt="Email"
                className="icon icon-mail"
              />
            </a>
          </li>
        </ul>
      </footer>
      <style jsx>{`
        #footer {
          background: #fff;
          color: #272c32;
          padding: 2em 0;
        }

        a {
          opacity: 0.7;
          text-decoration: none;
          color: #272c32;
        }
        a:hover,
        a:focus {
          opacity: 1;
          color: #272c32;
          background-color: transparent;
          text-decoration: underline;
        }

        ul {
          list-style-type: none;
          padding: 0;
        }

        .footer__links {
          display: flex;
          width: 100%;
          justify-content: space-between;
          margin: 0;
          line-height: 2em;
        }

        .footer__social {
          height: auto;
          margin: 10px auto;
          display: flex;
          flex-direction: row;
          justify-content: center;
        }

        .footer__social img {
          width: 25px;
          padding: 10px;
        }

        .container {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          flex-flow: row wrap;
          justify-content: space-between;
        }
        .container h1:first-of-type {
          margin-top: 0;
        }
      `}</style>
    </>
  );
};

export default Footer;
