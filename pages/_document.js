import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';

class CustomHead extends Head {
  render() {
    const res = super.render();

    function transform(node) {
      // remove all link preloads
      if (
        node &&
        node.type === 'link' &&
        node.props &&
        node.props.rel === 'preload'
      ) {
        return null;
      }
      if (node && node.props && node.props.children) {
        return {
          ...node,
          props: {
            ...node.props,
            children: node.props.children.map(transform),
          },
        };
      }
      if (Array.isArray(node)) {
        return node.map(transform);
      }

      return node;
    }

    return transform(res);
  }
}

class DevDocument extends Document {
  render() {
    return (
      <html lang="fr">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

class StaticDocument extends Document {
  render() {
    return (
      <html lang="fr">
        <CustomHead />
        <body>
          <Main />
          {process.env.MATOMO_SITE_ID && process.env.MATOMO_URL && (
            <script defer async src={`${process.env.MATOMO_URL}/piwik.js`} />
          )}
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `var _paq = window._paq || [];
  (function() {
    var u = "//$yourPiwikDomain/";
    _paq.push(['setTrackerUrl', u+'piwik.php']);
    _paq.push(['setSiteId', 'X']);
  })();'}}>`,
            }}
          />
        </body>
      </html>
    );
  }
}

export default process.env.NODE_ENV === 'production'
  ? StaticDocument
  : DevDocument;
