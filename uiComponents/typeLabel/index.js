import React from 'react';

const TypeLabel = ({ type }) => {
  const iconMatcher = {
    article: { path: 'icon_article.svg', label: 'article' },
    video: { path: 'icon_video.svg', label: 'video' },
    'site web': { path: 'icon_site.svg', label: 'site internet' },
    tutoriel: { path: 'icon_pasapas.svg', label: 'pas à pas' },
    webinaire: { path: 'icon_webinar.svg', label: 'webinaire' },
    'document à télécharger': {
      path: 'icon_document.svg',
      label: 'document',
    },
  };
  const icon = iconMatcher[type];

  return (
    <>
      <div>
        {icon && (
          <img
            src={'/images/icon/' + icon.path}
            alt={`type de la ressource : ${type}`}
            title={`type de la ressource : ${type}`}
          />
        )}
        {type}
      </div>
      <style jsx>{`
        div {
          background-color: #ecedf3;
          color: #53657d;
          display: flex;
          align-items: center;
          padding: 3px;
          border-radius: 4px;
          margin: 0 0 20px 20px;
        }
        div > img {
          width: 20px;
          height: 20px;
          padding: 4px;
        }
      `}</style>
    </>
  );
};

export default TypeLabel;
