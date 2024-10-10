import React, { FC, ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';
import LinkGroup from '../../components/linkGroup';
import DAppLogo from '../../assets/business/DApp.png';
import ProjectLogo from '../../assets/business/project.png';
import AssetLogo from '../../assets/business/asset.png';
import FlowLogo from '../../assets/business/flow.png';
import './style.scss';

type Props = {
  locale: Locale;
};

const BussinessContainer: FC<Props> = (props: Props) => {
  const { locale } = props;
  const linkUrl = locale === 'zh' ? 'https://wj.qq.com/s2/3310869/09df/' : 'https://wj.qq.com/s2/3310869/09df/';
  return (
    <div className="bussiness_container">
      <div className="sloagn_wrapper">
        <div className="sloagn">
          <div className="dapp">
            <img src={DAppLogo} alt="" />
            <h2><FormattedMessage id="BUSSINESS_05001" description="标语" /></h2>
          </div>
          <div className="project">
            <img src={ProjectLogo} alt="" />
            <h2><FormattedMessage id="BUSSINESS_05002" description="标语" /></h2>
          </div>
          <div>
            <img src={AssetLogo} alt="" />
            <h2><FormattedMessage id="BUSSINESS_05003" description="标语" /></h2>
          </div>
          <div>
            <img src={FlowLogo} alt="" />
            <h2><FormattedMessage id="BUSSINESS_05004" description="标语" /></h2>
          </div>
        </div>
      </div>
      <FormattedMessage id="MENU_01006" description="商务合作">
        {(txt: string): ReactNode => <LinkGroup linkText={txt} linkUrl={linkUrl} internal={false} />}
      </FormattedMessage>
    </div>
  );
};
export default BussinessContainer;
