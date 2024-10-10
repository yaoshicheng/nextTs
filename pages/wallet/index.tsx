import React, { ReactNode } from 'react';
import { NextPageContext } from 'next';
import { FormattedMessage } from 'react-intl';
import Head from 'next/head';
import MainLayout from '../../src/layout';
import WalletContainers from '../../src/containers/wallet';
import { setCookies, getCookies } from '../../src/utils/cookies';
import { LOCALE_COOKIES } from '../../src/configs/project';
import { getDefaultLocaleFromRequest, getDefaultLocaleFromClient } from '../../src/utils/locale';

type Props = {
  readonly defaultLocale: Locale;
};

type State = {
  readonly locale: Locale;
};

class WalletPage extends React.PureComponent<Props, State> {
  static getInitialProps({ req }: NextPageContext): {defaultLocale: Locale} {
    // 如果通过<Link>组件跳转，则会执行getInitialProps函数。需要判断是否有req来确定当时的渲染环境是服务器还是客户端
    // 如果是服务端，通过req获取。如果是浏览器，先判断是否有存储的语言参数，如果没有，则通过navigator获取默认
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

  render(): React.ReactNode {
    const { locale } = this.state;
    return (
      <MainLayout
        headless={false}
        footerless={false}
        headStyle="fixed"
        current="wallet"
        locale={locale}
        onLocaleChange={this.onLocaleChange}
      >
        <>
          <FormattedMessage id="MENU_01003" description="首页">
            {(txt: string): ReactNode => (
              <Head>
                <title>{txt}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
              </Head>
            )}
          </FormattedMessage>
          <WalletContainers locale={locale} />
        </>
      </MainLayout>
    );
  }
}

export default WalletPage;
