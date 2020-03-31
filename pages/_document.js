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
        <Head>
          <style
            dangerouslySetInnerHTML={{
              __html: `
            /* nunito-regular - latin */
            @font-face {
              font-family: 'Nunito';
              font-style: normal;
              font-weight: 400;
              font-display: swap;
              src: url('/fonts/nunito-v12-latin-regular.eot'); /* IE9 Compat Modes */
              src: local('Nunito Regular'), local('Nunito-Regular'),
                url('/fonts/nunito-v12-latin-regular.eot?#iefix')
                  format('embedded-opentype'),
                /* IE6-IE8 */ url('/fonts/nunito-v12-latin-regular.woff2') format('woff2'),
                /* Super Modern Browsers */ url('/fonts/nunito-v12-latin-regular.woff')
                  format('woff'),
                /* Modern Browsers */ url('/fonts/nunito-v12-latin-regular.ttf')
                  format('truetype'),
                /* Safari, Android, iOS */ url('/fonts/nunito-v12-latin-regular.svg#Nunito')
                  format('svg'); /* Legacy iOS */
            }
            
            /* nunito-700 - latin */
            @font-face {
              font-family: 'Nunito';
              font-style: normal;
              font-weight: 700;
              font-display: swap;
              src: url('/fonts/nunito-v12-latin-700.eot'); /* IE9 Compat Modes */
              src: local('Nunito Bold'), local('Nunito-Bold'),
                url('/fonts/nunito-v12-latin-700.eot?#iefix') format('embedded-opentype'),
                /* IE6-IE8 */ url('/fonts/nunito-v12-latin-700.woff2') format('woff2'),
                /* Super Modern Browsers */ url('/fonts/nunito-v12-latin-700.woff')
                  format('woff'),
                /* Modern Browsers */ url('/fonts/nunito-v12-latin-700.ttf')
                  format('truetype'),
                /* Safari, Android, iOS */ url('/fonts/nunito-v12-latin-700.svg#Nunito')
                  format('svg'); /* Legacy iOS */
            }
            
            /* source-sans-pro-regular - latin */
            @font-face {
              font-family: 'Source Sans Pro';
              font-style: normal;
              font-weight: 400;
              font-display: swap;
              src: url('/fonts/source-sans-pro-v13-latin-regular.eot');
              src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'),
                url('/fonts/source-sans-pro-v13-latin-regular.eot?#iefix')
                  format('embedded-opentype'),
                url('/fonts/source-sans-pro-v13-latin-regular.woff2') format('woff2'),
                url('/fonts/source-sans-pro-v13-latin-regular.woff') format('woff'),
                url('/fonts/source-sans-pro-v13-latin-regular.ttf') format('truetype'),
                url('/fonts/source-sans-pro-v13-latin-regular.svg#SourceSansPro')
                  format('svg');
            }`,
            }}
          />
        </Head>
        <body>
          <script
            src="//instant.page/3.0.0"
            type="module"
            defer
            integrity="sha384-OeDn4XE77tdHo8pGtE1apMPmAipjoxUQ++eeJa6EtJCfHlvijigWiJpD7VDPWXV1"
          ></script>
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
        <CustomHead>
          <style
            dangerouslySetInnerHTML={{
              __html: `
            /* nunito-regular - latin */
            @font-face {
              font-family: 'Nunito';
              font-style: normal;
              font-weight: 400;
              font-display: swap;
              src: url('/fonts/nunito-v12-latin-regular.eot'); /* IE9 Compat Modes */
              src: local('Nunito Regular'), local('Nunito-Regular'),
                url('/fonts/nunito-v12-latin-regular.eot?#iefix')
                  format('embedded-opentype'),
                /* IE6-IE8 */ url('/fonts/nunito-v12-latin-regular.woff2') format('woff2'),
                /* Super Modern Browsers */ url('/fonts/nunito-v12-latin-regular.woff')
                  format('woff'),
                /* Modern Browsers */ url('/fonts/nunito-v12-latin-regular.ttf')
                  format('truetype'),
                /* Safari, Android, iOS */ url('/fonts/nunito-v12-latin-regular.svg#Nunito')
                  format('svg'); /* Legacy iOS */
            }
            
            /* nunito-700 - latin */
            @font-face {
              font-family: 'Nunito';
              font-style: normal;
              font-weight: 700;
              font-display: swap;
              src: url('/fonts/nunito-v12-latin-700.eot'); /* IE9 Compat Modes */
              src: local('Nunito Bold'), local('Nunito-Bold'),
                url('/fonts/nunito-v12-latin-700.eot?#iefix') format('embedded-opentype'),
                /* IE6-IE8 */ url('/fonts/nunito-v12-latin-700.woff2') format('woff2'),
                /* Super Modern Browsers */ url('/fonts/nunito-v12-latin-700.woff')
                  format('woff'),
                /* Modern Browsers */ url('/fonts/nunito-v12-latin-700.ttf')
                  format('truetype'),
                /* Safari, Android, iOS */ url('/fonts/nunito-v12-latin-700.svg#Nunito')
                  format('svg'); /* Legacy iOS */
            }
            
            /* source-sans-pro-regular - latin */
            @font-face {
              font-family: 'Source Sans Pro';
              font-style: normal;
              font-weight: 400;
              font-display: swap;
              src: url('/fonts/source-sans-pro-v13-latin-regular.eot');
              src: local('Source Sans Pro Regular'), local('SourceSansPro-Regular'),
                url('/fonts/source-sans-pro-v13-latin-regular.eot?#iefix')
                  format('embedded-opentype'),
                url('/fonts/source-sans-pro-v13-latin-regular.woff2') format('woff2'),
                url('/fonts/source-sans-pro-v13-latin-regular.woff') format('woff'),
                url('/fonts/source-sans-pro-v13-latin-regular.ttf') format('truetype'),
                url('/fonts/source-sans-pro-v13-latin-regular.svg#SourceSansPro')
                  format('svg');
            }
            
            /* source-sans-pro-700 - latin */
            @font-face {
              font-family: 'Source Sans Pro';
              font-style: normal;
              font-weight: 700;
              font-display: swap;
              src: url('/fonts/source-sans-pro-v13-latin-700.eot');
              src: local('Source Sans Pro Bold'), local('SourceSansPro-Bold'),
                url('/fonts/source-sans-pro-v13-latin-700.eot?#iefix')
                  format('embedded-opentype'),
                url('/fonts/source-sans-pro-v13-latin-700.woff2') format('woff2'),
                url('/fonts/source-sans-pro-v13-latin-700.woff') format('woff'),
                url('/fonts/source-sans-pro-v13-latin-700.ttf') format('truetype'),
                url('/fonts/source-sans-pro-v13-latin-700.svg#SourceSansPro');
            }`,
            }}
          />
        </CustomHead>
        <script
          src="//instant.page/3.0.0"
          type="module"
          defer
          integrity="sha384-OeDn4XE77tdHo8pGtE1apMPmAipjoxUQ++eeJa6EtJCfHlvijigWiJpD7VDPWXV1"
        ></script>
        <body>
          <Main />
          {process.env.MATOMO_SITE_ID && process.env.MATOMO_URL && (
            <script
              type="text/javascript"
              dangerouslySetInnerHTML={{
                __html: `var _paq = window._paq || [];
            _paq.push(['trackPageView']);
            _paq.push(['enableLinkTracking']);
            (function() {
              var u="${process.env.MATOMO_URL}/";
              _paq.push(['setTrackerUrl', u+'matomo.php']);
              _paq.push(['setSiteId', ${process.env.MATOMO_SITE_ID}]);
              var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
              g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
            })();;`,
              }}
            ></script>
          )}
        </body>
      </html>
    );
  }
}

export default process.env.NODE_ENV === 'production'
  ? StaticDocument
  : DevDocument;
