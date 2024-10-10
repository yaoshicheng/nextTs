import React, { ReactElement } from 'react';
import Slogan from './components/slogan';
import FeatureList from './components/feature';
import Cooperation from './components/cooperation';
import './style.scss';

type Props = {
  readonly defaultLocale: Locale;
  platform: System;
};

type State = {
  readonly locale: Locale;
  platform: System;
};

class MainPage extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    const { defaultLocale, platform } = props;
    this.state = {
      locale: defaultLocale,
      platform,
    };
  }

  componentDidMount(): void {}

  render(): ReactElement {
    const { locale, platform } = this.state;
    return (
      <>
        <div className="main_page">
          <Slogan defaultLocale={locale} platform={platform} />
          <FeatureList defaultLocale={locale} />
          <Cooperation defaultLocale={locale} />
        </div>
      </>
    );
  }
}

export default MainPage;
