import React, { ReactElement, ReactNode } from 'react';
import { NextPageContext } from 'next';
import { FormattedMessage } from 'react-intl';
import Head from 'next/head';
import Index from '../../src/containers/home';
import MainLayout from '../../src/layout';
import { getDefaultLocaleFromClient, getDefaultLocaleFromRequest } from '../../src/utils/locale';
import { getSystem } from '../../src/utils/env';
import { getCookies, setCookies } from '../../src/utils/cookies';
import { LOCALE_COOKIES } from '../../src/configs/project';

type Props = {
  readonly defaultLocale: Locale;
  readonly platform: System;
};

type State = {
  readonly locale: Locale;
  readonly platform: System;
};

class MainPage extends React.PureComponent<Props, State> {
  static getInitialProps({ req }: NextPageContext): {defaultLocale: Locale; platform: System} {
    let defaultLocale: Locale = 'zh';
    if (req) {
      defaultLocale = getDefaultLocaleFromRequest(req);
    } else {
      defaultLocale = getCookies(LOCALE_COOKIES) as Locale || getDefaultLocaleFromClient(navigator);
    }

    const platform = req ? getSystem('server', req.headers['user-agent']) : getSystem('client', navigator.userAgent);
    return { platform, defaultLocale };
  }

  constructor(props: Props) {
    super(props);
    const { defaultLocale, platform } = this.props;
    this.state = {
      locale: defaultLocale,
      platform,
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
    const { locale, platform } = this.state;
    return (
      <MainLayout headless={false} footerless={false} headStyle="default" current="main" locale={locale} onLocaleChange={this.onLocaleChange}>
        <>
          <FormattedMessage id="MENU_01000" description="首页">
            {(txt: string): ReactNode => (
              <Head>
                <title>{txt}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
              </Head>
            )}
          </FormattedMessage>
          <Index defaultLocale={locale} platform={platform} />
        </>
      </MainLayout>
    );
  }
}

export default MainPage;
