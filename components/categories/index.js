import React from 'react';

import categories from '../../_ressources/categories.json';
import constants from '../../constants';

const Categories = () => (
  <>
    <div id="toutes-les-ressources" className="content-container">
      <h2>J’ai besoin d’aide pour :</h2>
      <div className="categorie-container">
        {Object.keys(categories).map(categoryKey => {
          const category = categories[categoryKey];
          console.log('href=',category.path);
          return (
            <a
              key={category.path}
              href={category.path}
              className="resource dont-apply-link-style"
              title={category.title}
            >
              <div>
                <h3>
                  <img src={category.picto} alt="" />
                  {category.title}
                </h3>
                {category.description.map(desc => (
                  <p key={desc}>{desc}</p>
                ))}
              </div>
            </a>
          );
        })}
      </div>
    </div>
    <style jsx>{`
      #toutes-les-ressources {
        margin-top: 40px;
      }
      .categorie-container {
        display: grid;
        grid-template-columns: 32% 32% 32%;
        justify-content: space-between;
        grid-gap: 30px 30px;
        margin-bottom: 50px;
      }
      a.resource {
        width: 100%;
        text-decoration: none;
        background-color: #fff;
        border: 3px solid ${constants.colors.grey};
        border-radius: 8px;
        transition: border 200ms ease-in-out;
      }
      a.resource:hover {
        border: 3px solid ${constants.colors.blue};
      }

      a.resource > div {
        margin: 20px;
      }
      a.resource h3 {
        margin-bottom: 30px;
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: bold;
        text-decoration: underline;
        display: flex;
        align-items: center;
      }

      a.resource h3 > img {
        width: 50px;
        height: 50px;
        margin-right: 10px;
      }
      a.resource p {
        color: ${constants.colors.fontColor};
        font-size: 1rem;
        padding: 0;
        line-height: 1.3rem;
        margin-bottom: 5px;
      }
      @media only screen and (min-width: 600px) and (max-width: 1000px) {
        .categorie-container {
          display: grid;
          grid-template-columns: 48% 48%;
          justify-content: space-between;
          grid-gap: 20px 20px;
          margin-bottom: 50px;
        }
      }
      @media only screen and (min-width: 1px) and (max-width: 600px) {
        .categorie-container {
          display: grid;
          grid-template-columns: 100%;
          justify-content: space-between;
        }
      }
    `}</style>
  </>
);

export default Categories;
