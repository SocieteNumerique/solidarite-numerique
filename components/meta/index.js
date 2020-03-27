import React from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { truncate } from 'lodash';

const SITE_URL = 'https://solidarite-numerique.fr';
const SITE_NAME = 'Solidarité Numérique';
const SITE_DESCRIPTION =
  'Pendant le confinement, mes habitudes changent. Le centre d’aide et de ressources Solidarité Numérique m’accompagne pour rendre mon quotidien plus facile.';

const Meta = ({ title, description }) => {
  description = truncate(description, { length: 160, omission: ' [...]' });

  return (
    <>
      <NextSeo
        title={(title || SITE_NAME) + ' - 📞 01 70 772 372 (appel non surtaxé)'}
        description={description || SITE_DESCRIPTION}
        canonical={SITE_URL}
        openGraph={{
          url: SITE_URL,
          locale: 'fr_FR',
          title:
            (title || SITE_NAME) + ' - 📞 01 70 772 372 (appel non surtaxé)',
          description: description || SITE_DESCRIPTION,
          images: [
            {
              url: SITE_URL + '/images/open_graph.png',
              width: 1200,
              height: 627,
              alt: 'solidarité numérique',
            },
          ],
          site_name: SITE_NAME,
        }}
      />
      <Head>
        <title>
          {title ? title + ' - ' : ''}
          {SITE_NAME}
        </title>

        {/* Search Engine */}
        <meta name="description" content={description || SITE_DESCRIPTION} />

        {/* Schema.org for Google */}
        <meta
          itemProp="name"
          content={
            (title || SITE_NAME) + ' - 📞 01 70 772 372 (appel non surtaxé)'
          }
        />
        <meta
          itemProp="description"
          content={description || SITE_DESCRIPTION}
        />
      </Head>
    </>
  );
};

Meta.defaultProps = {
  title: null,
  description: null,
};

export default Meta;
