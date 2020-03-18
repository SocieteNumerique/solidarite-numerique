import React from 'react';
import Head from 'next/head';
import { NextSeo } from 'next-seo';
import { truncate } from 'lodash';

const SITE_URL = '';
const SITE_NAME = '';
const SITE_DESCRIPTION = '';

const Meta = ({ title, description }) => {
  description = truncate(description, { length: 160, omission: ' [...]' });

  return (
    <>
      <NextSeo
        title={title || SITE_NAME}
        description={description || SITE_DESCRIPTION}
        canonical={SITE_URL}
        openGraph={{
          url: SITE_URL,
          locale: 'fr_FR',
          title: title || SITE_NAME,
          description: description || SITE_DESCRIPTION,
          images: [
            {
              url: '/images/linkedin.jpg',
              width: 1200,
              height: 627,
              alt: 'api.gouv.fr',
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
        <meta name="image" content="/images/api.gouv.fr.svg" />

        {/* Schema.org for Google */}
        <meta itemProp="name" content={title || SITE_NAME} />
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
