import React from 'react';

import ressources from '../../_ressources/ressources.json';

import { Page } from '../../layouts';

const Resource = ({ ressource }) => (
  <Page>
    <div className="content-container">
      <h1>{ressource.title}</h1>
      <div>{ressource.content}</div>
    </div>
  </Page>
);

Resource.getInitialProps = async ({ query }) => {
  const ressource = ressources[query.id];
  return { ressource };
};

export default Resource;
