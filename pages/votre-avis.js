import React from 'react';

import { Page } from '../layouts';

const Review = () => (
  <Page useFooter={false} title="Donnez-nous votre avis">
    <div
      className="typeform-widget"
      data-url="https://solidarite-numerique.typeform.com/to/M8fjC9"
      data-transparency="100"
      data-hide-headers="true"
      data-hide-footer="true"
      style={{ width: '100%', height: '500px' }}
    ></div>
    <div
      style={{
        fontSize: '12px',
        color: '#333',
        opacity: 0.5,
        paddingTop: '5px',
        textAlign: 'right',
      }}
    >
      {' '}
      powered by{' '}
      <a
        href="https://admin.typeform.com/signup?utm_campaign=JFkqkU&utm_source=typeform.com-01E3Q3A23CRDWF3T14HMDZB144-professional&utm_medium=typeform&utm_content=typeform-embedded-poweredbytypeform&utm_term=FR"
        style={{ color: '#333' }}
        target="_blank"
        rel="noopener noreferrer"
      >
        Typeform
      </a>{' '}
    </div>
    <div className="no-typeform layout-center">
      Cliquez sur "Je propose une ressource" pour commencer le questionnaire. Si
      le questionnaire ne s'affiche pas,
      <a
        href="https://solidarite-numerique.typeform.com/to/M8fjC9"
        target="_blank"
        rel="noopener noreferrer"
      >
        ➞ c'est par ici
      </a>
    </div>
    <script id="typef_orm" src="https://embed.typeform.com/embed.js"></script>
    <style jsx>{`
      .no-typeform {
        margin: 20px;
        font-size: 0.9rem;
        color: #666;
      }
      .no-typeform a {
        margin-left: 5px;
      }
    `}</style>
  </Page>
);

export default Review;
