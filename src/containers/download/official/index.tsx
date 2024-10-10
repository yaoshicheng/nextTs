import React, { Component, ReactElement } from 'react';
import Link from 'next/link';
import { FormattedMessage } from 'react-intl';
import './style.scss';
import { getSystem, inWeChatEnv } from '../../../utils/env';
import sensors from '../../../utils/sensors';
import WeChartMask from '../../../components/weChatMask';
import Logo from '../../../assets/download/logo.png';
import DApps from '../../../assets/download/dapps.png';
import Defi from '../../../assets/download/defi.png';
import SafeBox from '../../../assets/download/safe.png';
import PhoneImg from '../../../assets/download/phone.png';
import ApplePlay from '../../../assets/download/apple.png';
import GooglePlay from '../../../assets/download/play.png';
import TestFlight from '../../../assets/download/testFlight.png';

type Props = {
  readonly defaultLocale: string;
  readonly platform: System;
};

type State = {
  env: string;
  play: string;
  weChatEnv: boolean;
  maskVisible: boolean;
  hasAtokenApp: boolean;
};

class Download extends Component<Props, State> {
  from: string;

  constructor(props: Props) {
    super(props);
    const { platform } = props;
    this.state = {
      env: platform,
      play: ApplePlay,
      weChatEnv: false,
      maskVisible: false,
      hasAtokenApp: true,
    };
    this.from = 'AToken';
    this.openAtoken = this.openAtoken.bind(this);
  }

  componentDidMount(): void {
    const env = getSystem('client');
    const { platform } = this.props;
    if (env !== platform) {
      this.setState({
        env,
        play: env === 'apple' ? ApplePlay : GooglePlay,
        weChatEnv: inWeChatEnv('client'),
      });
    } else {
      this.setState({
        weChatEnv: inWeChatEnv('client'),
      });
    }
    if (document && window) {
      let { location: { search } } = window;

      if (search.length > 0) {
        search = search.replace('?', '');
        const fields = search.split('&');
        for (let i = 0; i < fields.length; i += 1) {
          const query = fields[i].split('=');
          const [name, resource] = query;
          if (name && resource && name === 'from') {
            this.from = resource;
          }
        }
      }
      sensors.track('EnterATokenDownLoadPage', {
        resource: this.from,
      });
    }
  }

  openAtoken(): void {
    this.setState({ hasAtokenApp: false });
  }

  // eslint-disable-next-line class-methods-use-this
  sensorsTrack(os: string, downloadType: string): void {
    if (document) {
      sensors.track('DownLoadATokenClick', {
        resource: this.from,
        os,
        download_type: downloadType,
      });
    }
  }

  renderFoot(): ReactElement {
    const { env, play, weChatEnv, hasAtokenApp } = this.state;
    const { defaultLocale } = this.props;
    if (!weChatEnv && hasAtokenApp) {
      return (
        <button className="openAtoken" onClick={this.openAtoken} type="button">
          <FormattedMessage id="DOWNLOAD_01001" description="立即打开" />
        </button>
      );
    }
    if (env === 'apple') {
      if (defaultLocale !== 'zh') {
        return (
          <>
            <a onClick={(): void => this.sensorsTrack('IOS', 'APPStore')} href="https://itunes.apple.com/us/app/atoken-app/id1395835245?l=zh&ls=1&mt=8" className="play-btn">
              {play ? <img src={play} className="play-icon" alt="" /> : null}
              <span>{env === 'apple' ? 'App Store' : 'Google Play'}</span>
            </a>
            <a onClick={(): void => this.sensorsTrack('IOS', 'TestFlight')} className="download-btn" href="https://testflight.apple.com/join/W0ofBWMF">
              <img src={TestFlight} className="play-icon" alt="" />
              <span>TestFlight</span>
            </a>
          </>
        );
      }
      return (
        <>
          <Link href="/download/overseas" replace>
            <a onClick={(): void => this.sensorsTrack('IOS', 'APPStore')} role="presentation" className="play-btn">
              {play ? <img src={play} className="play-icon" alt="" /> : null}
              <span>App Store</span>
            </a>
          </Link>
          <a onClick={(): void => this.sensorsTrack('IOS', 'TestFlight')} className="download-btn" href="https://testflight.apple.com/join/W0ofBWMF">
            <img src={TestFlight} className="play-icon" alt="" />
            <span>TestFlight</span>
          </a>
        </>
      );
    }
    return (
      <>
        <a onClick={(): void => this.sensorsTrack('Android', 'GooglePlay')} href="https://play.google.com/store/apps/details?id=wallet.gem.com.pro" className="play-btn">
          {play ? <img src={play} className="play-icon" alt="" /> : null}
          <span>Google Play</span>
        </a>
        <a onClick={(): void => this.sensorsTrack('Android', 'APK')} className="download-btn" href="https://app.biliangwang.com/apk/AToken_guanwanghb.apk">
          <FormattedMessage id="DOWNLOAD_01002" description="下载APK" />
        </a>
      </>
    );
  }

  render(): ReactElement {
    const { maskVisible = false } = this.state;
    const { defaultLocale } = this.props;
    return (
      <div className={`page-download-${defaultLocale}`}>
        <div className="atoken-description">
          <img src={Logo} className="logo" alt="" />
          <div className="phone-wrapper">
            <img src={PhoneImg} className="phone-img" alt="" />
            <h1 className="title">
              <FormattedMessage id="HOME_01001" description="一个钱包，所有币种" />
            </h1>
            <p className="sub-title">
              <FormattedMessage id="HOME_01002" description="支持BTC, USDT, ETH, EOS等数十条公链 及其代币" />
            </p>
          </div>
        </div>

        <div className="security">
          <img src={SafeBox} className="box" alt="" />
          <p className="title">
            <FormattedMessage id="HOME_01003" description="资产多重保障更安全" />
          </p>
          <p className="description">
            <FormattedMessage id="HOME_01004" description="私钥自持、离线签名，确保资产由你一手掌控" />
          </p>
          <p className="description">
            <FormattedMessage id="HOME_01005" description="多重加密、安全隔离，为你的资产保驾护航" />
          </p>
          <div className="trait trait_center">
            <p className="tag"><FormattedMessage id="HOME_01006" description="纵向防御" /></p>
            <p className="tag"><FormattedMessage id="HOME_01007" description="横向隔离" /></p>
            <p className="tag"><FormattedMessage id="HOME_01008" description="5层HD结构" /></p>
          </div>
          <div className="trait trait_center">
            <p className="tag"><FormattedMessage id="HOME_01009" description="SHA-512加密" /></p>
            <p className="tag"><FormattedMessage id="HOME_01010" description="PBKDF2" /></p>
          </div>
        </div>

        <div className="defi">
          <img src={Defi} className="box" alt="" />
          <p className="title">
            <FormattedMessage id="HOME_01011" description="DeFi生态享收益" />
          </p>
          <p className="description">
            <FormattedMessage id="HOME_01012" description="丰富的DeFi生态，支持多种去中心化增益方式" />
          </p>
          <p className="description">
            <FormattedMessage id="HOME_01013" description="丰富的DeFi生态，支持多种去中心化增益方式 委托抵押Staking，稳健安全增益10%起" />
          </p>
          <div className="trait trait_center">
            <p className="tag"><FormattedMessage id="HOME_01014" description="锁仓宝" /></p>
            <p className="tag"><FormattedMessage id="HOME_01015" description="POS" /></p>
            <p className="tag"><FormattedMessage id="HOME_01016" description="Staking" /></p>
          </div>
        </div>

        <div className="dapps">
          <img src={DApps} className="box" alt="" />
          <div className="title">
            <FormattedMessage id="HOME_01017" description="发现海量DApps" />
          </div>
          <p className="description">
            <FormattedMessage id="HOME_01018" description="丰富的区块链应用，体验不一样的区块链世界" />
          </p>
          <p className="description">
            <FormattedMessage id="HOME_01019" description="完善的应用接入支持，快速触达用户" />
          </p>
          <div className="trait trait_center">
            <p className="tag"><FormattedMessage id="HOME_01020" description="交易" /></p>
            <p className="tag"><FormattedMessage id="HOME_01021" description="娱乐" /></p>
            <p className="tag"><FormattedMessage id="HOME_01022" description="游戏" /></p>
          </div>
          <div className="trait trait_center">
            <p className="tag"><FormattedMessage id="HOME_01023" description="资讯" /></p>
            <p className="tag"><FormattedMessage id="HOME_01024" description="挖矿" /></p>
            <p className="tag"><FormattedMessage id="HOME_01025" description="金融" /></p>
          </div>
        </div>
        <div className="footer">
          {this.renderFoot()}
        </div>
        <WeChartMask defaultLocale={defaultLocale} visible={maskVisible} />
      </div>
    );
  }
}

export default Download;
