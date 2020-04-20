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
            .embeddedServiceHelpButton .helpButton .uiButton {
                background-color: #005290;
                font-family: "Arial", sans-serif;
            }
            .embeddedServiceHelpButton .helpButton .uiButton:focus {
                outline: 1px solid #005290;
            }

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
          <script
            type="text/javascript"
            src="https://service.force.com/embeddedservice/5.0/esw.min.js"
          ></script>
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `
              var initESW = function(gslbBaseURL) {
                embedded_svc.settings.displayHelpButton = true; //Or false
                embedded_svc.settings.language = 'fr'; //For example, enter 'en' or 'en-US'
            
                embedded_svc.settings.defaultMinimizedText = 'Démarrer une conversation'; //(Defaults to Chat with an Expert)
                embedded_svc.settings.disabledMinimizedText = 'Chat hors ligne'; //(Defaults to Agent Offline)
            
                embedded_svc.settings.loadingText = 'Chargement'; //(Defaults to Loading)
                //embedded_svc.settings.storageDomain = 'yourdomain.com'; //(Sets the domain for your deployment so that visitors can navigate subdomains during a chat session)
            
                // Settings for Chat
                //embedded_svc.settings.directToButtonRouting = function(prechatFormData) {
                  // Dynamically changes the button ID based on what the visitor enters in the pre-chat form.
                  // Returns a valid button ID.
                //};
                //embedded_svc.settings.prepopulatedPrechatFields = {}; //Sets the auto-population of pre-chat form fields
                //embedded_svc.settings.fallbackRouting = []; //An array of button IDs, user IDs, or userId_buttonId
                embedded_svc.settings.offlineSupportMinimizedText = 'Chat hors-ligne'; //(Defaults to Contact Us)
            
                embedded_svc.settings.enabledFeatures = ['LiveAgent'];
                embedded_svc.settings.entryFeature = 'LiveAgent';
            
                embedded_svc.init(
                  'https://solidanum.my.salesforce.com',
                  'https://assistance.solidarite-numerique.fr/',
                  gslbBaseURL,
                  '00D5I000000E0Kz',
                  'Chat_Solidanum',
                  {
                    baseLiveAgentContentURL: 'https://c.la2-c2-cdg.salesforceliveagent.com/content',
                    deploymentId: '5725I000000GpWn',
                    buttonId: '5735I000000L1wa',
                    baseLiveAgentURL: 'https://d.la2-c2-cdg.salesforceliveagent.com/chat',
                    eswLiveAgentDevName: 'EmbeddedServiceLiveAgent_Parent04I5I000000CcLbUAK_1711c329dc2',
                    isOfflineSupportEnabled: false
                  }
                );
              };
            
              if (!window.embedded_svc) {
                var s = document.createElement('script');
                s.setAttribute('src', 'https://solidanum.my.salesforce.com/embeddedservice/5.0/esw.min.js');
                s.onload = function() {
                  initESW(null);
                };
                document.body.appendChild(s);
              } else {
                initESW('https://service.force.com');
              }
`,
            }}
          ></script>
        </body>
      </html>
    );
  }
}

export default process.env.NODE_ENV === 'production'
  ? StaticDocument
  : DevDocument;
