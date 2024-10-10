import React, { ReactElement } from 'react';
import classnames from 'classnames';
import './style.scss';


type Props = {
  readonly locale: Locale;
  readonly type: string;
};

class HoverBtn extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
    this.genPrimaryClassName.bind(this);
    this.getHref = this.getHref.bind(this);
    this.getExtraHref = this.getExtraHref.bind(this);
  }

  componentDidMount(): void {
  }

  getHref(): string {
    const { type }: { type: string} = this.props;
    let href = '';
    switch (type) {
      case 'ios':
        href = 'https://itunes.apple.com/us/app/atoken-app/id1395835245?l=zh&ls=1&mt=8';
        break;
      case 'andriod':
      case 'google':
        href = 'https://play.google.com/store/apps/details?id=wallet.gem.com.pro';
        break;
      default:
        break;
    }
    return href;
  }

  getExtraHref(): string {
    const { type }: { type: string} = this.props;
    let href = '';
    switch (type) {
      case 'ios':
        href = 'https://testflight.apple.com/join/W0ofBWMF';
        break;
      case 'andriod':
      case 'google':
        href = 'https://app.biliangwang.com/apk/AToken_guanwanghb.apk';
        break;
      default:
        break;
    }
    return href;
  }

  genPrimaryClassName(): string {
    const { type }: { type: string} = this.props;
    return classnames('', type);
  }

  render(): ReactElement {
    const { locale } = this.props;
    const className: string = this.genPrimaryClassName();
    const href: string = this.getHref();
    const extraHref: string = this.getExtraHref();
    const extraClass = locale === 'zh' ? 'icon_extra' : 'icon_extra_en';
    return (
      <>
        <div className="btn_container">
          <a href={href} className={`${className} btn`}>
            <div className="icon" />
          </a>
          <a href={extraHref} className={`${className} btn btn_invisible`}>
            <div className={extraClass} />
          </a>
        </div>
      </>
    );
  }
}

export default HoverBtn;
