import React from 'react';
import App from 'next/app';

import { initMatomo } from '../services/matomo';

import '../constants/reset.scss';
import '../constants/global.scss';

class MyApp extends App {
  componentDidMount() {
    if (!process.env.MATOMO_SITE_ID || !process.env.MATOMO_URL) {
      console.log('missing env');
      return;
    }

    initMatomo({
      siteId: process.env.MATOMO_SITE_ID,
      piwikUrl: process.env.MATOMO_URL,
    });
  }

  render() {
    const { Component, pageProps } = this.props;

    return <Component {...pageProps} />;
  }
}

export default MyApp;
