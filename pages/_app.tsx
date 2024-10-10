import App from 'next/app';
import Head from 'next/head';
import React, { ReactElement } from 'react';
import 'normalize.css';
import 'intl';

class WebSiteApp extends App {
  render(): ReactElement {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" name="viewport" />
          <link rel="shortcut icon" type="image/x-icon" href="logo.ico" />
        </Head>
        <Component {...pageProps} />
      </>
    );
  }
}

export default WebSiteApp;
