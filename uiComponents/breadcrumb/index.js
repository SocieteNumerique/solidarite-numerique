import React from 'react';

import constants from '../../constants';

/**
 * this is a 1-depth breadcrumb? Basic but deadly effective
 */
const Breadcrumb = ({ name }) => (
  <>
    <div className="breadcrumb-wrapper">
      <a href="/">
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
          <circle
            cx="12"
            cy="12"
            r="2"
            fill={`${constants.colors.fontColor}`}
          />
          <circle
            cx="20"
            cy="12"
            r="2"
            fill={`${constants.colors.fontColor}`}
          />
          <circle cx="4" cy="20" r="2" fill={`${constants.colors.fontColor}`} />
          <circle
            cx="12"
            cy="20"
            r="2"
            fill={`${constants.colors.fontColor}`}
          />
          <circle
            cx="20"
            cy="20"
            r="2"
            fill={`${constants.colors.fontColor}`}
          />
        </svg>{' '}
        Toutes les ressources
      </a>
      <span>›</span>
      <span>{name}</span>
    </div>
    <style jsx>{`
      .breadcrumb-wrapper {
        font-size: 0.9rem;
        display: flex;
        align-items: center;
        margin: 7px 0;
      }
      .breadcrumb-wrapper a {
        color: ${constants.colors.fontColor};
        display: flex;
        align-items: center;
        padding: 10px 15px 10px 10px;
      }
      .breadcrumb-wrapper a > svg {
        margin-right: 10px;
      }
      .breadcrumb-wrapper span:first-of-type {
        margin-left: 5px;
        margin-right: 15px;
      }
    `}</style>
  </>
);

export default Breadcrumb;
