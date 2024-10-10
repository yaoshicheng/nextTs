import React, { ReactElement } from 'react';
import { FormattedMessage } from 'react-intl';
import './WeChatMask.scss';
import Notify from '../../assets/common/notify.jpg';

type Props = {
  defaultLocale: string;
  visible: boolean;
  // onCancel?: any;
  // closable?: boolean | true;
};

export default class WeChatMask extends React.Component<Props> {
  componentDidMount(): void {}

  render(): ReactElement {
    // const { visible, onCancel, closable } = this.props;
    const { visible } = this.props;
    const className = visible ? 'wechat_mask visible' : 'wechat_mask invisible';
    return (
      <div className={className}>
        <img src={Notify} alt="" />
        <h3><FormattedMessage id="WECHAT_01001" description="点击右上角,选择在浏览器中打开" /></h3>
      </div>
    );
  }
}
