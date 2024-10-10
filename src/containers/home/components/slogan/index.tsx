import React, { ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import HoverBtn from '../hoverBtn';
import { getSystem } from '../../../../utils/env';
import Responsive from '../../../../components/responsive';
import qrCode from '../../../../assets/home/qrCode.jpg';
import videoCover from '../../../../assets/home/videoCover.png';
import './style.scss';


type Props = {
  readonly defaultLocale: Locale;
  platform: string;
};

type State = {
  readonly locale: Locale;
  readonly videoUrl: string;
  videoShow: boolean;
  platform: string;
};

class Slogan extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const { platform, defaultLocale } = props;
    this.state = {
      locale: defaultLocale,
      videoShow: false,
      platform,
      videoUrl: 'https://app.biliangwang.com/AToken2%E5%91%A8%E5%B9%B4%E5%A4%A7%E5%92%96%E7%A5%9D%E8%B4%BA%E8%A7%86%E9%A2%91.mp4',
    };
    this.handleShowVideo = this.handleShowVideo.bind(this);
    this.handleCloseVideo = this.handleCloseVideo.bind(this);
    this.renderBtnContainer = this.renderBtnContainer.bind(this);
  }

  componentDidMount(): void {
    const _platform = getSystem('client');
    const { platform } = this.props;
    if (platform !== _platform) {
      this.setState({ platform: _platform });
    }
  }

  handleCloseVideo(): void{
    this.setState({ videoShow: false });
  }

  handleShowVideo(): void{
    this.setState({ videoShow: true });
  }

  renderBtnContainer(): ReactElement {
    const { platform, locale } = this.state;
    switch (platform) {
      case 'android':
        return (
          <div className="btn_container android">
            <a href="https://play.google.com/store/apps/details?id=wallet.gem.com.pro" className="android btn">
              <div className="icon" />
            </a>
            <a href="https://app.biliangwang.com/apk/AToken_guanwanghb.apk" className="android btn btn_invisible">
              <div className={locale === 'zh' ? 'icon_extra' : 'icon_extra_en'} />
            </a>
          </div>
        );
      case 'apple':
        return (
          <div className="btn_container">
            <a href="https://itunes.apple.com/us/app/atoken-app/id1395835245?l=zh&ls=1&mt=8" className="ios btn">
              <div className="icon" />
            </a>
            {locale === 'zh' ? (
              <a href="https://testflight.apple.com/join/W0ofBWMF" className="ios btn">
                <div className="icon_extra" />
              </a>
            ) : ''}
          </div>
        );
      case 'pc':
      default:
        return (
          <div className="btn_container android">
            <a href="https://play.google.com/store/apps/details?id=wallet.gem.com.pro" className="android btn">
              <div className="icon" />
            </a>
            <a href="https://app.biliangwang.com/apk/AToken_guanwanghb.apk" className="android btn btn_invisible">
              <div className={locale === 'zh' ? 'icon_extra' : 'icon_extra_en'} />
            </a>
          </div>
        );
    }
  }

  render(): ReactElement {
    const { locale, videoShow, videoUrl } = this.state;
    const desktop = (
      <div className="slogan_container">
        <div className="left_container">
          <h1>All Token, AToken</h1>
          <p className="desc"><FormattedMessage id="HOME_01001" description="一个钱包，所有币种" /></p>
          <p className="desc"><FormattedMessage id="HOME_01002" description="支持公链" /></p>
          <div className="downloadBtn_container">
            <HoverBtn type="ios" locale={locale} />
            <HoverBtn type="google" locale={locale} />
            <div className="qrcode">
              <img alt="" src={qrCode} />
            </div>
          </div>
          <div role="presentation" onClick={this.handleShowVideo} className={`show-video-btn btn-${locale}`} />
        </div>
        <div className="right_container">
          <div className={`slogan_img ${locale}`} />
        </div>
      </div>
    );

    const phone = (
      <div className="slogan_phone">
        <h1>All Token, AToken</h1>
        <p className="desc"><FormattedMessage id="HOME_01001" description="一个钱包，所有币种" /></p>
        <p className="desc"><FormattedMessage id="HOME_01002" description="支持公链" /></p>
        {this.renderBtnContainer()}
        <div className={`slogan_img ${locale}`} />
      </div>
    );

    return (
      <>
        {(videoShow && videoUrl) ? (
          <div className="video-container">
            <div role="presentation" onClick={this.handleCloseVideo} className="close-video" />
            <div className="video-player">
              <video poster={videoCover} width={1000} src={videoUrl} controls>
                <track kind="captions" src={null} />
                  您的浏览器不支持 video 标签。
              </video>
            </div>
          </div>
        ) : null}
        <div className="slogan_box">
          <Responsive
            desktops={desktop}
            tablets={desktop}
            phones={phone}
          />
        </div>

      </>
    );
  }
}

export default Slogan;
