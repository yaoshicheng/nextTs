import React, { ReactElement, ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';
import LinkGroup from '../../components/linkGroup';
import './style.scss';

type Props = {
  readonly defaultLocale: Locale;
};

class About extends React.Component<Props> {
  componentDidMount(): void {}

  render(): ReactElement {
    const { defaultLocale } = this.props;
    const linkUrl = defaultLocale === 'zh' ? 'https://wj.qq.com/s2/3310869/09df/' : 'https://wj.qq.com/s2/3310869/09df/';
    return (
      <>
        <div className="about_page">
          <div className="detail_container">
            <FormattedMessage id="ABOUT_US_01001" description="关于我们">
              {(txt: string): ReactElement => (<p className="title">{txt}</p>)}
            </FormattedMessage>
            <FormattedMessage id="ABOUT_US_01002" description="描述1">
              {(txt: string): ReactElement => (<p className="detail">{txt}</p>)}
            </FormattedMessage>
            <FormattedMessage id="ABOUT_US_01003" description="描述2">
              {(txt: string): ReactElement => (<p className="detail">{txt}</p>)}
            </FormattedMessage>
            <FormattedMessage id="ABOUT_US_01004" description="描述3">
              {(txt: string): ReactElement => (<p className="detail">{txt}</p>)}
            </FormattedMessage>
            <FormattedMessage id="ABOUT_US_01005" description="描述4">
              {(txt: string): ReactElement => (<p className="detail">{txt}</p>)}
            </FormattedMessage>
          </div>
          <FormattedMessage id="MENU_01006" description="商务合作">
            {(txt: string): ReactNode => <LinkGroup linkText={txt} linkUrl={linkUrl} internal={false} />}
          </FormattedMessage>
        </div>
      </>
    );
  }
}

export default About;
