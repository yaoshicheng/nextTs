import React, { ReactElement, ReactNode } from 'react';
import { NextPageContext } from 'next';
import { FormattedMessage } from 'react-intl';
import Head from 'next/head';
import DownloadOverseas from '../../src/containers/download/overseas';
import MainLayout from '../../src/layout';
import getAccountList from '../../src/containers/download/overseas/service';
import { getDefaultLocaleFromClient, getDefaultLocaleFromRequest } from '../../src/utils/locale';
import { getCookies, setCookies } from '../../src/utils/cookies';
import { LOCALE_COOKIES } from '../../src/configs/project';

type Account = {
  readonly account: string;
  readonly password: string;
};

type Props = {
  readonly defaultLocale: Locale;
  accountList: Array<Account>;
};

type State = {
  readonly locale: Locale;
};

class MainPage extends React.PureComponent<Props, State> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  static async getInitialProps({ req }: NextPageContext): Promise<Props> {
    let defaultLocale: Locale = 'zh';
    if (req) {
      defaultLocale = getDefaultLocaleFromRequest(req);
    } else {
      defaultLocale = getCookies(LOCALE_COOKIES) as Locale || getDefaultLocaleFromClient(navigator);
    }
    const [err, , data] = await getAccountList();
    if (!err) {
      return { accountList: data, defaultLocale };
    }
    return { accountList: [], defaultLocale };
  }

  constructor(props: Props) {
    super(props);
    const { defaultLocale } = props;
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
    const { accountList } = this.props;
    return (
      <MainLayout headless footerless headStyle="default" current="main" locale={locale} onLocaleChange={this.onLocaleChange}>
        <>
          <FormattedMessage id="DOWNLOAD_OVERSEAS_01011" description="下载海外版本">
            {(txt: string): ReactNode => (
              <Head>
                <title>{txt}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
              </Head>
            )}
          </FormattedMessage>
          <div className="main_page">
            <DownloadOverseas defaultLocale={locale} accountList={accountList} />
          </div>
        </>
      </MainLayout>
    );
  }
}

export default MainPage;
