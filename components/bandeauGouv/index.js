import React from 'react';

const BandeauGouv = () => (
  <>
    <div className="bandeau-gouvernement">
      <div className="content-container">
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
          <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2"></polygon>
          <line x1="12" y1="8" x2="12" y2="12"></line>
          <line x1="12" y1="16" x2="12.01" y2="16"></line>
        </svg>
        <div>
          <div>
            {' '}
            Les déplacements sont interdits depuis le 17 mars, restez chez vous.
          </div>
          <div>
            Pour toutes vos questions sur le coronavirus :{' '}
            <a
              href="https://www.gouvernement.fr/info-coronavirus"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.gouvernement.fr/info-coronavirus
            </a>
          </div>
        </div>
      </div>
    </div>
    <style jsx>{`
      .bandeau-gouvernement {
        background-color: #fff9e7;
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1);
        z-index: 2;
      }
      .bandeau-gouvernement > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        font-size: 0.9rem;
      }
      .bandeau-gouvernement > div > svg {
        width: 25px;
      }
      .bandeau-gouvernement > div > div:last-of-type {
        margin: 15px 0 15px 15px;
      }
      @media only screen and (min-width: 1px) and (max-width: 600px) {
        .bandeau-gouvernement > div > svg {
          display: none;
        }
        .bandeau-gouvernement > div > div:last-of-type {
          margin-left: 0;
        }
      }
    `}</style>
  </>
);

export default BandeauGouv;
