import React from 'react';

import constants from '../../constants';

const ReviewCard = () => (
  <div className="review">
    <h3>Tout s’est bien passé&nbsp;?</h3>
    <div>
      <a href="/votre-avis">Oui,</a> j’ai trouvé ce que je cherchais
    </div>
    <div>
      <a href="/votre-avis">Non,</a> pas vraiment
    </div>
    <style jsx>{`
      .review {
        background-color: #fff9e6;
        border: 3px solid ${constants.colors.grey};
        border-radius: 8px;
        padding: 20px;
      }
      h3 {
        margin-top: 0px;
      }
      .review > div {
        margin-top: 10px;
      }
    `}</style>
  </div>
);
export default ReviewCard;
