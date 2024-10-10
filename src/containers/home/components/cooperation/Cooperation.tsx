import React, { ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import './Cooperation.scss';


type Logo = {
  readonly title: string;
  readonly url: string;
};

type Props = {
  readonly defaultLocale: Locale;
  logos: Array<Logo>;
};

export default class Cooperation extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.state = {};
    this.renderLogos = this.renderLogos.bind(this);
  }

  renderLogos(): Array<ReactElement> {
    const { logos } = this.props;
    return logos.map((logo: Logo): ReactElement => {
      const { url, title } = logo;
      return (<div key={title} className={`logoItem ${title}`} role="presentation" onClick={(): void => { window.open(url); }} />);
    });
  }

  render(): ReactElement {
    return (
      <div className="cooperation_wrap">
        <div className="cooperation">

          <div className="title">
            <h1><FormattedMessage id="HOME_01026" description="合作伙伴" /></h1>
          </div>
          <div className="split_line" />
          <div className="logos_content">
            {this.renderLogos()}
          </div>
        </div>
      </div>
    );
  }
}
