import React, { ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import dapps from '../../../../assets/home/yellow_coin@2x.png';
import finance from '../../../../assets/home/blue_lock@2x.png';
import defi from '../../../../assets/home/defi.png';

type FeatureConfig = {
  id: string;
  title: ReactElement;
  desc: ReactElement;
  src: string;
  justifyContent: 'start'|'end';
  labels: Array<ReactElement>;
};
const featureListConfig: Array<FeatureConfig> = [
  {
    id: 'finance',
    title: <FormattedMessage description="资产多重保障更安全" id="HOME_01003" />,
    desc: (
      <>
        <p><FormattedMessage description="私钥自持、离线签名，确保资产由你一手掌控" id="HOME_01004" /></p>
        <p><FormattedMessage description="多重加密、安全隔离，为你的资产保驾护航" id="HOME_01005" /></p>
      </>
    ),
    src: finance,
    justifyContent: 'start',
    labels: [
      <FormattedMessage id="HOME_01006" description="5层HD结构" />,
      <FormattedMessage id="HOME_01007" description="横向隔离" />,
      <FormattedMessage id="HOME_01008" description="纵向防御" />,
      <FormattedMessage id="HOME_01009" description="PBKDF2加密" />,
      <FormattedMessage id="HOME_01010" description="SHA-512加密" />,
    ],
  },
  {
    id: 'defi',
    title: <FormattedMessage description="DeFi生态享收益" id="HOME_01011" />,
    desc: (
      <>
        <p><FormattedMessage description="丰富的DeFi生态，支持多种去中心化增益" id="HOME_01012" /></p>
        <p><FormattedMessage description="委托抵押Staking，稳健安全增益10%起" id="HOME_01013" /></p>
      </>
    ),
    src: defi,
    justifyContent: 'end',
    labels: [
      <FormattedMessage id="HOME_01014" description="锁仓宝" />,
      <FormattedMessage id="HOME_01015" description="POS" />,
      <FormattedMessage id="HOME_01016" description="Staking" />,
    ],
  },
  {
    id: 'dapps',
    title: <FormattedMessage id="HOME_01017" description="发现海量DApps" />,
    desc: (
      <>
        <p><FormattedMessage id="HOME_01018" description="丰富的区块链应用" /></p>
        <p><FormattedMessage id="HOME_01019" description="触达用户" /></p>
      </>
    ),
    src: dapps,
    justifyContent: 'start',
    labels: [
      <FormattedMessage id="HOME_01020" description="交易" />,
      <FormattedMessage id="HOME_01021" description="娱乐" />,
      <FormattedMessage id="HOME_01022" description="游戏" />,
      <FormattedMessage id="HOME_01023" description="资讯" />,
      <FormattedMessage id="HOME_01024" description="挖矿" />,
      <FormattedMessage id="HOME_01025" description="金融" />,
    ],
  },
];

export default featureListConfig;
