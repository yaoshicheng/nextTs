import React, { Component, ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
// import Clipboard from 'react-clipboard.js';
import Clipboard from 'clipboard';
import './style.scss';
import WeChartMask from '../../../components/weChatMask';
import ToastMessage from './toastMessage';
import Logo from '../../../assets/download/logo.png';
import Security from '../../../assets/download/security.png';
import CopyBtn from '../../../assets/download/copy.png';
import AppStorePng from '../../../assets/download/AppStore.png';
import PlanBtn from '../../../assets/download/planBtn.png';
import { inWeChatEnv } from '../../../utils/env';
import getAccountList from './service';

type Account = {
  readonly account: string;
  readonly password: string;
};

type Props = {
  readonly defaultLocale: string;
  accountList: Array<Account>;
};

type State = {
  videoShow: boolean;
  maskVisible: boolean;
  autoPlay: boolean;
  videoUrl: string;
  weChatEnv: boolean;
  accountList?: Array<Account>;
};


class DownloadOverseas extends Component<Props, State> {
  public globalToast: ToastMessage;

  constructor(props: Props) {
    super(props);
    const { accountList } = props;
    this.state = {
      videoShow: false,
      maskVisible: false,
      autoPlay: false,
      weChatEnv: true,
      accountList,
      videoUrl: 'https://app.biliangwang.com/%E8%A7%86%E9%A2%91%E6%BC%94%E7%A4%BA.mp4',
    };
    this.globalToast = new ToastMessage({});
    this.renderAccountItem = this.renderAccountItem.bind(this);
    this.handleShowVideo = this.handleShowVideo.bind(this);
    this.handleCloseVideo = this.handleCloseVideo.bind(this);
    this.renderAccountList = this.renderAccountList.bind(this);
    // this.handleCopySuccess = this.handleCopySuccess.bind(this);
    this.handleClickPlay = this.handleClickPlay.bind(this);
  }

  componentDidMount(): void {
    const weChatEnv = inWeChatEnv('client');
    this.setState({ weChatEnv });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    getAccountList().then((response: Array<any>): void => {
      const [err, , data] = response;
      if (!err) {
        this.setState({ accountList: data });
      }
    });

    const CopyBtns = document.getElementsByClassName('CopyBtn');
    if (CopyBtns) {
      const clipboard = new Clipboard('.CopyBtn');
      clipboard.on('success', (): void => {
        const { defaultLocale } = this.props;
        this.globalToast.showToast({ msg: defaultLocale === 'en' ? 'Copied' : '已复制', position: 'middle' });
      });
    }
  }

  handleClickPlay(): void {
    const { weChatEnv } = this.state;
    if (weChatEnv) {
      this.setState({ maskVisible: true });
    } else if (window) {
      window.location.href = 'https://itunes.apple.com/us/app/atoken-app/id1395835245?l=zh&ls=1&mt=8';
    }
  }

  handleShowVideo(): void {
    this.setState({
      videoShow: false,
    }, (): void => {
      this.setState({
        videoShow: true,
        autoPlay: true,
      });
    });
  }

  handleCloseVideo(): void {
    this.setState({
      videoShow: false,
      autoPlay: false,
    });
  }

  // handleCopySuccess(): void {
  //   const { defaultLocale } = this.props;
  //   this.globalToast.showToast({ msg: defaultLocale === 'en' ? 'Copied' : '已复制', position: 'middle' });
  // }

  // eslint-disable-next-line class-methods-use-this
  renderAccountItem(item: Account): ReactElement {
    const { account, password } = item;
    return (
      <div className="list_item" key={account}>
        <div className="name">
          <FormattedMessage id="DOWNLOAD_OVERSEAS_01007" description="海外账户" />
          {account}
          <img src={CopyBtn} className="CopyBtn" alt="" data-clipboard-text={account} />
        </div>
        <div className="pwd">
          <FormattedMessage id="DOWNLOAD_OVERSEAS_01008" description="密码" />
          {password}
          <img src={CopyBtn} className="CopyBtn" alt="" data-clipboard-text={password} />
        </div>
      </div>
    );
  }

  renderAccountList(): Array<ReactElement>| null {
    const { accountList } = this.state;
    // const accountList = [ { account: '1111111111111', password: '123456' } ];
    if (accountList && accountList.length > 0) {
      return accountList.map((item: Account): ReactElement => this.renderAccountItem(item));
    }
    return null;
  }

  render(): ReactElement {
    const { videoUrl, videoShow, maskVisible = false, autoPlay } = this.state;
    const { defaultLocale } = this.props;
    return (
      <>
        <div className="page-download_overseas">
          <div className="logo_container">
            <img src={Logo} className="logo" alt="logo" />
          </div>
          <p className="overseas_title"><FormattedMessage id="DOWNLOAD_OVERSEAS_01001" description="下载iOS海外应用版本" /></p>
          {
                defaultLocale === 'en'
                  ? ''
                  : (
                    <div role="presentation" className={`play_container ${videoShow ? 'underline' : ''}`} onClick={this.handleShowVideo}>
                      <img src={PlanBtn} className="playBtn" alt="play" />
                      <FormattedMessage id="DOWNLOAD_OVERSEAS_01002" description="观看下载教程" />
                    </div>
                  )
              }
          {
            videoShow && videoUrl
              ? (
                <video onEnded={this.handleCloseVideo} autoPlay={autoPlay} width={0} height={0} src={videoUrl} controls>
                  <track kind="captions" src="" />
                  您的浏览器不支持 video 标签。
                </video>
              ) : ''
          }
          <img role="presentation" onClick={this.handleClickPlay} src={AppStorePng} className="appStore_png" alt="appStore" />
          <div className="account_container">
            <div className="desc">
              <FormattedMessage
                id="DOWNLOAD_OVERSEAS_01003"
                description="说明"
                values={{ value: <span className="free"><FormattedMessage id="DOWNLOAD_OVERSEAS_01004" /></span> }}
              />
            </div>
            <div className="list_container">
              {this.renderAccountList()}
            </div>
          </div>
          <div className="tip_container">
            <div className="tip_head">
              <img src={Security} className="tipPng" alt="securityTip" />
              <FormattedMessage id="DOWNLOAD_OVERSEAS_01005" description="安全提示" />
            </div>
            <div className="tip_desc">
              <FormattedMessage id="DOWNLOAD_OVERSEAS_01006" description="安全提示说明" />
              <span className="tip_desc_bold"><FormattedMessage id="DOWNLOAD_OVERSEAS_01009" description="安全提示说明" /></span>
            </div>
          </div>

        </div>
        <WeChartMask defaultLocale={defaultLocale} visible={maskVisible} />
      </>
    );
  }
}

export default DownloadOverseas;
