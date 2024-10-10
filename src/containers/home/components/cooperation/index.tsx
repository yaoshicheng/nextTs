import React, { ReactElement } from 'react';
import CooperationComponent from './Cooperation';
import logos from './cooperation.config';

type Props = {
  readonly defaultLocale: Locale;
};

export default class Cooperation extends React.PureComponent<Props> {
  render(): ReactElement {
    const { defaultLocale } = this.props;
    return <CooperationComponent defaultLocale={defaultLocale} logos={logos} />;
  }
}
