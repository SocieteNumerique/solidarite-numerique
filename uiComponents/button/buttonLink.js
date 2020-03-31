import React from 'react';

import constants from '../../constants';

const LinkAsAButton = ({
  href,
  alt,
  rel,
  target,
  disabled,
  phone,
  children,
  large,
}) => (
  <a
    rel={rel}
    target={target}
    className={`dont-apply-link-style button-link ${
      phone ? 'phone' : 'default'
    } ${alt ? 'alt' : 'default'} ${disabled ? 'disabled' : ''}
  ${large ? 'large' : 'small'}
  `}
    href={href}
  >
    <div className="content-wrapper">
      {' '}
      {phone && (
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
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
        </svg>
      )}
      {children}
    </div>
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
  phone,
  type,
  onClick,
}) => {
  if (!(onClick || type) && !href) {
    throw new Error(
      'Invalid props, to make a link specify href, or to make a button specify onClick or type'
    );
  }
  return (
    <>
      {href ? (
        <LinkAsAButton
          href={href}
          rel={rel}
          target={target}
          alt={alt}
          phone={phone}
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

        .button-link.phone > .content-wrapper {
          color: #fff;
          background-color: ${constants.colors.green};
          border: ${constants.colors.green};
          display: flex;
        }
        .button-link.phone > .content-wrapper > svg {
          margin-right: 10px;
        }
        .button-link.phone > .content-wrapper > b {
          font-weight: bold;
          font-family: 'Nunito', sans-serif !important;
        }
        .button-link.phone > .content-wrapper > small {
          margin-left: 10px;
          font-size: 0.9rem;
        }

        .button-link.large > .content-wrapper {
          padding: 12px 20px;
          font-size: 1rem;
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
