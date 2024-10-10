import React, { ReactChild } from 'react';
import { IntlProvider } from 'react-intl';
import Header from '../components/header';
import Footer from '../components/footer';
import Menu from '../components/menu';
import LocaleSelector from '../components/localeSelector';
import ChineseMsg from '../locale/ZH.json';
import EnglishMsg from '../locale/EN.json';
import { enableScroll, disableScroll } from '../utils/dom';

type Props = {
  readonly children: ReactChild;
  readonly locale: Locale;
  readonly headless: boolean;
  readonly footerless: boolean;
  readonly headStyle: 'default' | 'fixed';
  readonly current: MenuCurrent;
  readonly onLocaleChange: (locale: Locale) => void;
};

type State = {
  readonly maskVisible: boolean;
};

/**
 *
 * @prop {ReactChild} children --- 包含的页面
 * @prop {boolean} headless --- 无头模式【不需要头部导航栏】
 * @prop {boolean} footerless --- 无脚模式【不需要底部footer】
 * @prop {default | fixed} headStyle --- 头部导航栏的样式。normal为正常透明，滚动吸顶白色。fixed始终未白色吸顶。
 */
class MainLayout extends React.PureComponent<Props, State> {
  public msgMap: object;

  constructor(props: Props) {
    super(props);
    this.state = {
      maskVisible: false,
    };

    this.msgMap = {
      zh: ChineseMsg,
      en: EnglishMsg,
    };
    this.handleMenuMaskChange = this.handleMenuMaskChange.bind(this);
  }

  componentDidMount(): void {
    // 防止任何情况下被禁止滚动后无法复原的BUG，只要引用了该组件，那么会在页面切换时初始化
    return enableScroll();
  }

  handleMenuMaskChange(maskVisible: boolean): void{
    if (maskVisible === true) {
      disableScroll();
    } else {
      enableScroll();
    }
    return this.setState({ maskVisible });
  }


  render(): React.ReactNode {
    const { maskVisible } = this.state;
    const { headless, children, locale, current, onLocaleChange, headStyle, footerless } = this.props;
    const message = this.msgMap[locale];
    return (
      <IntlProvider locale={locale} key={locale} messages={message}>
        <>
          {headless
            ? null
            : (
              <Header
                menu={(
                  <Menu
                    onMaskVisibleChange={this.handleMenuMaskChange}
                    locale={locale}
                    maskVisible={maskVisible}
                    current={current}
                    onLocaleChange={onLocaleChange}
                    extra={<LocaleSelector locale={locale} onLocaleChange={onLocaleChange} />}
                  />
              )}
                headStyle={headStyle}
              />
            )}
          {children}
          {footerless ? null : <Footer />}
        </>
      </IntlProvider>
    );
  }
}

export default MainLayout;
