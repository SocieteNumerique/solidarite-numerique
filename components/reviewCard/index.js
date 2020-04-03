import React from 'react';

import constants from '../../constants';

const ReviewCard = () => (
  <div id="review-card">
    <div id="review-card-question">
      <h3>Tout s’est bien passé&nbsp;?</h3>
      <div>
        <button onClick={() => window.review(true)}>Oui,</button> j’ai trouvé ce
        que je cherchais
      </div>
      <div>
        <button onClick={() => window.review(false)}>Non,</button> pas vraiment
      </div>
    </div>
    <div id="review-card-apres-question">
      <h3>Merci pour votre réponse !</h3>
      <div>
        Aidez-nous à améliorer cette page en{' '}
        <a href="/votre-avis">remplissant ce rapide questionnaire.</a>
      </div>
    </div>
    <style jsx>{`
      #review-card {
        background-color: #fff9e6;
        border: 3px solid ${constants.colors.grey};
        border-radius: 8px;
        padding: 20px;
      }

      button {
        background: none;
        border: none;
        font-size: 1rem;
        text-decoration: underline;
        cursor: pointer;
        margin: 0;
        padding: 0;
        color: ${constants.colors.blue};
      }

      button:hover {
        color: ${constants.colors.vividBlue};
      }

      h3 {
        margin-top: 0px;
      }
      #review-card-question > div {
        margin-top: 10px;
      }
      #review-card-apres-question {
        display: none;
      }
    `}</style>
    <script
      type="text/javascript"
      dangerouslySetInnerHTML={{
        __html: `
        window.review = function(isPositive) {
          var reviewCardQuestion = document.getElementById('review-card-question');
          reviewCardQuestion.style.display= 'none';
          var reviewCardApresQuestion = document.getElementById('review-card-apres-question');
          reviewCardApresQuestion.style.display= 'block';

          if (window._paq) {
            window._paq.push(['trackEvent', 'RetourUtilisateur', 'Tout-s-est-bien-passe ', isPositive ? 'oui' : 'non']);
          }
        }
        `,
      }}
    ></script>
  </div>
);
export default ReviewCard;
