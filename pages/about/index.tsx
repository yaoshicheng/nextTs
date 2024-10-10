import React, { ReactElement, ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';
import { NextPageContext } from 'next';
import Head from 'next/head';
import About from '../../src/containers/about';
import MainLayout from '../../src/layout';
import { getCookies, setCookies } from '../../src/utils/cookies';
import { LOCALE_COOKIES } from '../../src/configs/project';
// import { getSystem } from '../../src/utils/env';
import { getDefaultLocaleFromClient, getDefaultLocaleFromRequest } from '../../src/utils/locale';

type Props = {
  readonly defaultLocale: Locale;
};

type State = {
  readonly locale: Locale;
};

class MainPage extends React.PureComponent<Props, State> {
  static getInitialProps({ req }: NextPageContext): {defaultLocale: Locale} {
    let defaultLocale: Locale = 'zh';
    if (req) {
      defaultLocale = getDefaultLocaleFromRequest(req);
    } else {
      defaultLocale = getCookies(LOCALE_COOKIES) as Locale || getDefaultLocaleFromClient(navigator);
    }
    return { defaultLocale };
  }


  constructor(props: Props) {
    super(props);
    const { defaultLocale } = this.props;
    this.state = {
      locale: defaultLocale,
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
    return (
      <MainLayout headless={false} footerless={false} headStyle="default" current="main" locale={locale} onLocaleChange={this.onLocaleChange}>
        <>
          <FormattedMessage id="ABOUT_US_01001" description="关于我们">
            {(txt: string): ReactNode => (
              <Head>
                <title>{txt}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
              </Head>
            )}
          </FormattedMessage>
          <div className="main_page">
            <About defaultLocale={locale} />
          </div>
        </>
      </MainLayout>
    );
  }
}

export default MainPage;
