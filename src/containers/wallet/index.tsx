import React, { FC, ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';
import Responsive from '../../components/responsive';
import LinkGroup from '../../components/linkGroup';
import CoinIntroduceImg from '../../assets/wallet/coin_introduce@2x.png';
import ChainIntroduceImg from '../../assets/wallet/chain_introduce@2x.png';
import WalletIntroduceImg from '../../assets/wallet/wallet_introduce@2x.png';
import './style.scss';

type Props = {
  locale: Locale;
};

const WalletContainers: FC<Props> = (props: Props) => {
  const { locale } = props;
  const linkUrl = locale === 'zh' ? 'https://wj.qq.com/s2/3310869/09df/' : 'https://wj.qq.com/s2/3310869/09df/';
  return (
    <div className="wallet_container">
      <div className="coin_introduce_wrapper">
        <div className="coin_introduce_bg">
          <div className="coin_introduce">
            <h1><FormattedMessage id="WALLET_02003" description="19种币" /></h1>
            <p><FormattedMessage id="WALLET_02004A" description="标语" /></p>
            <p><FormattedMessage id="WALLET_02004B" description="标语" /></p>
            <img src={CoinIntroduceImg} alt="" className="coin_introduce_img" />
          </div>
        </div>
      </div>

      <div className="chain_introduce_wrapper">
        <div className="chain_introduce">
          <div className="desc">
            <Responsive
              desktops={(
                <h1>
                  <FormattedMessage id="WALLET_02005A" description="管理5大公链" />
                  <FormattedMessage id="WALLET_02005B" description="管理5大公链" />
                </h1>
)}
              mobiles={(
                <>
                  <h1><FormattedMessage id="WALLET_02005A" description="管理5大公链" /></h1>
                  <h1 className="all_token_title"><FormattedMessage id="WALLET_02005B" description="管理5大公链" /></h1>
                </>
)}
            />

            <p>BTC | EOS | ETH | TRX | ONT</p>
            <p><FormattedMessage id="WALLET_02006" description="添加代币管理" /></p>
          </div>
          <img src={ChainIntroduceImg} alt="" className="chain_introduce_img" />
        </div>
      </div>

      <div className="wallet_introduce_wrapper">
        <div className="wallet_introduce">
          <h1><FormattedMessage id="WALLET_02007" description="一个钱包管理所有资产" /></h1>
          <p><FormattedMessage id="WALLET_02008" description="一个助记词管理所有资产" /></p>
          <p><FormattedMessage id="WALLET_02009" description="去中心化钱包" /></p>
          <img src={WalletIntroduceImg} alt="" className="wallet_introduce_img" />
        </div>
      </div>
      <FormattedMessage id="WALLET_02002" description="资产上架">
        {(txt: string): ReactNode => <LinkGroup linkText={txt} internal={false} linkUrl={linkUrl} />}
      </FormattedMessage>

    </div>
  );
};

export default WalletContainers;
