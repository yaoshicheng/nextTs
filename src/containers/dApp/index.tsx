import React, { FC, ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';
import Responsive from '../../components/responsive';
import LinkGroup from '../../components/linkGroup';
import Spliter from '../../assets/dApp/spliter.png';
import AssetsLogosPC from '../../assets/dApp/assets_logos_pc.png';
import AssetsLogosMobile from '../../assets/dApp/assets_logo_mobile.png';
import TradeIcons from '../../assets/dApp/trade_icons.png';
import ChainLogos from '../../assets/dApp/chain_logos.png';
import ChainSlogans from '../../assets/dApp/chain_slogans.png';
import './style.scss';

type Props = {
  locale: Locale;
};

const DAppContainer: FC<Props> = (props: Props) => {
  const { locale } = props;
  const linkUrl = locale === 'zh' ? 'https://wj.qq.com/s2/3310869/09df/' : 'https://wj.qq.com/s2/3310869/09df/';
  return (
    <div className="dapp_container">
      <div className="assets_wrapper">
        <div className="assets">
          <h1>
            <FormattedMessage id="DAPP_04001" description="标语" />
          </h1>
          <div className="assets_content">
            <div className="change_content">
              <h2><FormattedMessage id="DAPP_04003A" description="一键主流币兑换" /></h2>
              <h2><FormattedMessage id="DAPP_04003B" description="甄选好交易" /></h2>
              <Responsive
                desktops={<img src={AssetsLogosPC} alt="" className="assets_logos" />}
                mobiles={<img src={AssetsLogosMobile} alt="" className="assets_logos" />}
              />

            </div>
            <img src={Spliter} alt="" className="spliter" />
            <div className="trade_content">
              <Responsive
                desktops={(
                  <h2>
                    <FormattedMessage id="DAPP_04002A" description="去中心化" />
                    <FormattedMessage id="DAPP_04002B" description="一站式代币兑换" />
                  </h2>
)}
                mobiles={(
                  <>
                    <h2>
                      <FormattedMessage id="DAPP_04002A" description="去中心化" />
                    </h2>
                    <h2>
                      <FormattedMessage id="DAPP_04002B" description="一站式代币兑换" />
                    </h2>
                  </>
)}
              />

              <h2><FormattedMessage id="DAPP_04002C" description="深度撮合" /></h2>
              <img src={TradeIcons} alt="" className="assets_icons" />
            </div>
          </div>
        </div>
      </div>

      <div className="chain">
        <h1><FormattedMessage id="DAPP_04004" description="随时随地 畅游区块链" /></h1>
        <p><FormattedMessage id="DAPP_04005" description="标语" /></p>
        <p><FormattedMessage id="DAPP_04006" description="标语" /></p>
        <img src={ChainSlogans} alt="" className="chain_sloagns" />
        <img src={ChainLogos} alt="" className="chain_logos" />

      </div>
      <FormattedMessage id="DAPP_04007" description="申请上架DAPP">
        {(txt: string): ReactNode => <LinkGroup linkText={txt} linkUrl={linkUrl} internal={false} />}
      </FormattedMessage>

    </div>
  );
};

export default DAppContainer;
