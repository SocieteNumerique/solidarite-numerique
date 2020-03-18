import React from 'react';

import constants from '../../constants';

const LinkAsAButton = ({
  href,
  alt,
  rel,
  target,
  disabled,
  children,
  large,
}) => (
  <a
    rel={rel}
    target={target}
    className={`dont-apply-link-style button-link ${alt ? 'alt' : 'default'} ${
      disabled ? 'disabled' : ''
    }
  ${large ? 'large' : 'small'}
  `}
    href={href}
  >
    <div className="content-wrapper">{children}</div>
  </a>
);

const ClassicButton = ({ type, onClick, alt, large, disabled, children }) => (
  <button
    onClick={onClick}
    type={type}
    className={`dont-apply-link-style button-link ${alt ? 'alt' : 'default'} ${
      disabled ? 'disabled' : ''
    }
  ${large ? 'large' : 'small'}
  `}
  >
    <div className="content-wrapper">{children}</div>
  </button>
);

const ButtonLink = ({
  href,
  alt,
  rel,
  target,
  disabled,
  children,
  large,
  type,
  onClick,
}) => {
  if (!(onClick || type) && !href) {
    throw new Error('Invalid props');
  }
  return (
    <>
      {href ? (
        <LinkAsAButton
          href={href}
          rel={rel}
          target={target}
          alt={alt}
          disabled={disabled}
          children={children}
          large={large}
        />
      ) : (
        <ClassicButton
          onClick={onClick}
          type={type}
          target={target}
          alt={alt}
          disabled={disabled}
          children={children}
          large={large}
        />
      )}
      <style global jsx>{`
        a.button-link,
        button.button-link {
          display: inline-block;
          text-decoration: none;
          background: none;
          border: none;
          padding: 0;
          margin: 0;
        }
        .content-wrapper {
          font-size: 1rem;
          padding: 8px 15px;
          background-color: ${constants.colors.blue};
          border: 1px solid ${constants.colors.blue};

          color: #fff;
          box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
          border-radius: 4px;
          vertical-align: baseline;
          user-select: none;
          transition: transform 100ms ease-in-out, box-shadow 100ms ease-in-out;
        }

        .button-link.alt > .content-wrapper {
          color: ${constants.colors.blue};
          background-color: #fff;
          border: 1px solid #fff;
        }

        .button-link.large > .content-wrapper {
          padding: 12px 20px;
          font-size: 1.15rem;
        }

        .button-link:hover > .content-wrapper {
          transform: translateY(-2px);
          box-shadow: 0px 6px 7px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </>
  );
};

export default ButtonLink;
