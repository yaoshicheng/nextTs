import React, { ReactElement, ReactNode } from 'react';
import { NextPageContext } from 'next';
import { FormattedMessage } from 'react-intl';
import Head from 'next/head';
import Download from '../../src/containers/download/official';
import MainLayout from '../../src/layout';
import { getSystem } from '../../src/utils/env';
import { getDefaultLocaleFromClient, getDefaultLocaleFromRequest } from '../../src/utils/locale';
import { getCookies, setCookies } from '../../src/utils/cookies';
import { LOCALE_COOKIES } from '../../src/configs/project';

type Props = {
  readonly defaultLocale: Locale;
  readonly platform: System;
};

type State = {
  readonly locale: Locale;
};

class MainPage extends React.PureComponent<Props, State> {
  static getInitialProps({ req }: NextPageContext): Props {
    const platform = req ? getSystem('server', req.headers['user-agent']) : getSystem('client', navigator.userAgent);

    let defaultLocale: Locale = 'zh';
    if (req) {
      defaultLocale = getDefaultLocaleFromRequest(req);
    } else {
      defaultLocale = getCookies(LOCALE_COOKIES) as Locale || getDefaultLocaleFromClient(navigator);
    }
    return { platform, defaultLocale };
  }

  constructor(props: Props) {
    super(props);
    this.state = {
      locale: 'zh',
    };
    this.initClientLocale = this.initClientLocale.bind(this);
    this.onLocaleChange = this.onLocaleChange.bind(this);
  }

  componentDidMount(): void {
    this.initClientLocale();
  }

  onLocaleChange(locale: Locale): void {
    setCookies(LOCALE_COOKIES, locale);
    return this.setState({ locale });
  }

  initClientLocale(): void{
    const { defaultLocale } = this.props;
    const locale: Locale = getCookies(LOCALE_COOKIES) as Locale || defaultLocale;
    return this.onLocaleChange(locale);
  }

  render(): ReactElement {
    const { locale } = this.state;
    const { platform } = this.props;
    return (
      <MainLayout headless footerless headStyle="default" current="main" locale={locale} onLocaleChange={this.onLocaleChange}>
        <>
          <FormattedMessage id="DOWNLOAD_OVERSEAS_01010" description="下载">
            {(txt: string): ReactNode => (
              <Head>
                <title>{txt}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
              </Head>
            )}
          </FormattedMessage>
          <div className="main_page">
            <Download defaultLocale={locale} platform={platform} />
          </div>
        </>
      </MainLayout>
    );
  }
}

export default MainPage;
