import React, { FC, ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import Link from 'next/link';
import WechatQRcode from '../../assets/common/wechat_qrcode.jpeg';
import Logo from '../../assets/common/footer_logo@2x.png';
import { NavigationItem, navigationList, navigationIcons, NavigationIcon } from '../../configs/navigation';
import Responsive from '../responsive';
import Icon from '../icon';
import './style.scss';

const Footer: FC = () => {
  const bottomList: ReactElement[] = navigationList
    .map((item: NavigationItem): ReactElement => {
      const { url, title } = item;
      return (
        <a href={url} key={title} target="_blank" rel="noopener noreferrer">
          <FormattedMessage id={title} />
        </a>
      );
    });

  const iconList: ReactElement[] = navigationIcons
    .map((item: NavigationIcon): ReactElement => {
      const { type, url = '' } = item;
      const wechat: boolean = type === 'wechat';
      return wechat ? (
        <div className="wechat" key="wechat">
          <Icon type={type} className="navigation_icon" />
          <img src={WechatQRcode} className="wechat_qrcode" alt="" />
        </div>
      ) : (
        <a href={url} key={`${type}-${url}`} target="_blank" rel="noopener noreferrer">
          <Icon type={type} className="navigation_icon" />
        </a>
      );
    });


  return (
    <div className="atoken_footer_wrapper">
      <div className="atoken_footer">
        <div className="navigation_list">
          <Responsive desktops={<img src={Logo} alt="" className="logo" />} />
          <dl className="user_support">
            <dt><FormattedMessage id="FOOTER_01001" description="用户支持" /></dt>
            <dd>
              <FormattedMessage id="FOOTER_01002" description="联系我们">
                {(txt: string): ReactElement => <a href="mailto:support@atoken.com">{txt}</a>}
              </FormattedMessage>
            </dd>
          </dl>
          <dl className="wallet_group">
            <dt><FormattedMessage id="FOOTER_01003" description="钱包团队" /></dt>
            <dd><Link href="/about"><a><FormattedMessage id="FOOTER_01004" description="关于我们" /></a></Link></dd>
          </dl>
          <dl className="focus_us">
            <dt><FormattedMessage id="FOOTER_01005" description="关注我们" /></dt>
            <dd>
              {iconList}
            </dd>
          </dl>
        </div>

        <div className="footer_bottom">
          <div className="bottom_navigation">
            {bottomList}
          </div>
          <p className="copyright">Copyright © 2019 AToken Limited. All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};


export default Footer;
