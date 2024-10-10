import React, { FC, ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';
import StakingImgPC from '../../assets/deFi/staking_img_pc.png';
import StakingImgMobile from '../../assets/deFi/staking_img_mobile.png';
import RewardImg from '../../assets/deFi/reward_img.png';
import Responsive from '../../components/responsive';
import LinkGroup from '../../components/linkGroup';
import FirstListIcon from '../../assets/deFi/first_list.png';
import SecondListIcon from '../../assets/deFi/second_list.png';
import ThirdListIcon from '../../assets/deFi/third_list.png';
import './style.scss';

type Props = {
  readonly locale: Locale;
};

const DeFiContainer: FC<Props> = ({ locale }: Props) => {
  const defiLink = locale === 'zh' ? 'https://mp.weixin.qq.com/s/DAw-lRudwQV7vsC-NxP8cA' : 'https://atoken2.s2.udesk.cn/hc/articles/19371?api_name=';
  const cooperationLink = locale === 'zh' ? 'https://wj.qq.com/s2/3310869/09df/' : 'https://wj.qq.com/s2/3310869/09df/';
  return (
    <div className="defi_container">
      <div className="staking_wrapper">
        <div className="staking">
          <h1><FormattedMessage id="DEFI_03001" description="Staking生态" /></h1>
          <p><FormattedMessage id="DEFI_03002" description="副标语" /></p>
          <p><FormattedMessage id="DEFI_03003" description="副标语" /></p>
          <Responsive
            desktops={<img src={StakingImgPC} alt="" className="staking_img" />}
            mobiles={<img src={StakingImgMobile} alt="" className="staking_img" />}
          />

        </div>
      </div>
      <div className="reward_wrapper">
        <div className="reward">
          <dl className="desc">
            <dt><h1><FormattedMessage id="DEFI_03004" description="抵押得收益" /></h1></dt>
            <dd>
              <img src={FirstListIcon} alt="" />
              <span><FormattedMessage id="DEFI_03005" description="生态支持" /></span>
            </dd>
            <dd>
              <img src={SecondListIcon} alt="" />
              <span><FormattedMessage id="DEFI_03006" description="主流币" /></span>
            </dd>
            <dd>
              <img src={ThirdListIcon} alt="" />
              <span><FormattedMessage id="DEFI_03007" description="ETH额外收益" /></span>
            </dd>
            <dd>
              <FormattedMessage id="DEFI_03008" description="教程">
                {(txt: string): ReactNode => <a href={defiLink} target="_blank" rel="noopener noreferrer">{txt}</a>}
              </FormattedMessage>
            </dd>
          </dl>
          <img src={RewardImg} className="reward_img" alt="" />
        </div>
      </div>
      <FormattedMessage id="DEFI_03009" description="DEFI合作">
        {(txt: string): ReactNode => <LinkGroup linkText={txt} linkUrl={cooperationLink} internal={false} />}
      </FormattedMessage>

    </div>
  );
};

export default DeFiContainer;
