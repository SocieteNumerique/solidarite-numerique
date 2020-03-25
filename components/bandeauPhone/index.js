import React from 'react';

const phoneIcon = (
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
);

const CallCTA = () => (
  <>
    <a href="tel:0176350378" className="dont-apply-link-style">
      <div>
        {phoneIcon}
        <span>01 76 35 03 78</span>
      </div>
    </a>
    <style jsx>{`
      a {
        text-decoration: none;
        padding: 0px 18px;
        color: #000;
        height: 48px;
        font-size: 1.2rem;
        background-color: #ffc107;
        font-weight: bold;
        position: relative;
        display: inline-block;
        margin: 2px auto;
        align-items: center;
        justify-content: center;
        margin-top: 10px;
        box-shadow: 0 0 8px #ccc;
      }
      a > div {
        height: 100%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      a > div > span {
        margin-left: 10px;
      }
    `}</style>
  </>
);

const BandeauPhone = () => (
  <>
    <div className="bandeau-telephone layout-center">
      Être aidé par téléphone (appel gratuit)
      <CallCTA />
    </div>
    <style jsx>{`
      .bandeau-telephone {
        background-color: #fff;
        width: calc(100% - 50px);
        position: fixed;
        bottom: 0;
        z-index: 10;
        flex-direction: column;
        padding: 20px 25px;
        box-shadow: 0 0 3px #ccc;
      }
      @media (min-width: 800px) {
        .bandeau-telephone {
          display: none;
        }
      }
    `}</style>
  </>
);

export default BandeauPhone;
