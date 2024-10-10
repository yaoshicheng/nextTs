import React, { ReactElement } from 'react';
import Feature from './Feature';
import featureListConfig from './feature.config';
import './FeatureList.scss';

type Props = {
  readonly defaultLocale: Locale;
};

type State = {
  locale: Locale;
};

type FeatureConfig = {
  id: string;
  title: ReactElement;
  desc: ReactElement;
  src: string;
  justifyContent: 'start'|'end';
  labels: Array<ReactElement>;
};

class FeatureList extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const { defaultLocale } = props;
    this.state = {
      locale: defaultLocale,
    };
    this.renderFeatureList = this.renderFeatureList.bind(this);
    this.onLocaleChange = this.onLocaleChange.bind(this);
  }

  onLocaleChange(locale: Locale): void {
    return this.setState({ locale });
  }

  renderFeatureList(): Array<ReactElement> {
    const { locale } = this.state;
    return featureListConfig.map((featureListItem: FeatureConfig): ReactElement => {
      const { id } = featureListItem;
      return (
        <div key={id}>
          <Feature defaultLocale={locale} {...featureListItem} />
        </div>
      );
    });
  }

  render(): ReactElement {
    return (
      <div className="feature_list">
        <div className="right_bg" />
        {this.renderFeatureList()}
      </div>
    );
  }
}
export default FeatureList;
