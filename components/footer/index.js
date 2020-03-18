import React from 'react';

const Footer = () => {
  return (
    <>
      <footer id="footer">
        <div className="footer__social">
          <div>N'hésitez pas à partager ce site les réseaux sociaux</div>
          <div className="separator">➞</div>
          <div>
            <a
              href="https://twitter.com/intent/tweet?text=https://solidarite-numerique.fr/"
              title="Twitter"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/social/twitter.svg"
                alt="Twitter"
                className="icon icon-twitter"
              />
            </a>
          </div>
          <div>
            <a
              href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%solidarite-numerique.fr%2F"
              title="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/social/facebook.svg"
                alt="Facebook"
                className="icon icon-facebook"
              />
            </a>
          </div>
          <div>
            <a
              href="mailto:exemple@adresse-mail.com?subject=Solidarite-numerique&body=https://solidarite-numerique.fr"
              title="Partager par email"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="/images/social/email.svg"
                alt="Email"
                className="icon icon-mail"
              />
            </a>
          </div>
        </div>
        <div className="container content-container">
          <div className="partenaire layout-center">
            <a
              href="https://gouvernement.fr/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                className="logo"
                src="/images/logo/bloc-marque.svg"
                alt="En partenariat avec le gouvernement"
              />
            </a>
            <a
              href="https://www.lamednum.coop/"
              rel="noopener noreferrer"
              target="_blank"
            >
              <img
                src="/images/logo/logo_mednum.svg"
                alt="Une initiative de la MedNum"
              />
            </a>
          </div>
          <ul className="footer__links">
            <li>
              <a href="/mentions-legales">Mentions Légales</a>
            </li>
          </ul>
        </div>
      </footer>
      <style jsx>{`
        #footer {
          background: #fff;
          color: #272c32;
          font-size: 0.9rem;
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
        }

        ul {
          list-style-type: none;
          padding: 0;
        }

        .footer__links {
          display: flex;
          width: 100%;
          flex-direction:column;
          justify-content: center;
          margin: 0;
          line-height: 2em;
          flex-grow:0;
          align-items: flex-end;
        }
        .footer__links li {
          margin: 0 20px;
        }

        .footer__social {
          height: auto;
          margin: 5px auto 30px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          font-style: italic;
        }

        .footer__social .separator {
          margin: 0 20px;
        }

        .footer__social img {
          width: 20px;
          padding-left: 10px;
        }
        .footer__social a:hover {
          background: none;
        }

        .partenaire a {
          opacity: 1;
          margin:0 20px;
        }
        .partenaire {
          margin: auto;
          margin 20px 0;
        }

        .partenaire img {
          width: auto;
          max-width: 152px;
          height: 82px;
          margin:3px;
        }

        .container {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
          padding: 0 20px;
          display: flex;
          flex-flow: row;
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
