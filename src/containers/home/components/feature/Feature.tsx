import React, { ReactElement } from 'react';
import './Feature.scss';

type Props = {
  defaultLocale: Locale;
  id: string;
  labels: Array<ReactElement>;
  desc: ReactElement;
  src: string;
  title: ReactElement;
  justifyContent: 'start'| 'end';
};

export default class Feature extends React.Component<Props> {
  constructor(props: Props) {
    super(props);
    this.genLabel = this.genLabel.bind(this);
  }

  genLabel(): ReactElement {
    const { id, labels } = this.props;
    return (
      <div className="label_content">
        {labels.map((label: ReactElement, index: number): ReactElement => <div key={`${id}_${index + 1}`}>{label}</div>)}
      </div>
    );
  }

  render(): ReactElement {
    const { src, desc, title, justifyContent, defaultLocale } = this.props;
    return (
      <div className={`feature ${justifyContent} ${defaultLocale}`}>
        <img src={src} alt="" className="feature_img" />
        <div className="text_content">
          <h1>{title}</h1>
          <div className="split_line" />
          <div className="desc">{desc}</div>
          {this.genLabel()}
        </div>

      </div>
    );
  }
}
