import React from 'react';

import constants from '../../constants';

const Pagehead = ({ category }) => (
  <>
    <div className="wrapper content-container">
      <div className="picto">
        <img src={category.picto} alt="" />
      </div>
      <h1>{`J’ai besoin d’aide pour ${category.title.toLowerCase()}`}</h1>
    </div>
    <style jsx>{`
      div.wrapper {
        display: flex;
        flex-direction: row;
        align-items: center;
      }

      .picto img {
        height: 80px;
        width: 80px;
        margin: 15px 25px 15px 0;
        display: block;
      }

      h1 {
        color: ${constants.colors.solidNumPurple};
        font-size: 1.6rem;
        line-height: 2rem;
        margin: 20px 0;
      }
      @media only screen and (min-width: 1px) and (max-width: 800px) {
        .picto img {
          height: 50px;
          width: 50px;
          margin: 10px 20px 10px 0;
        }

        h1 {
          font-size: 1.3rem;
          line-height: 1.8rem;
        }
      }
    `}</style>
  </>
);

export default Pagehead;
