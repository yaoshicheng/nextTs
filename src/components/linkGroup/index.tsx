import React, { FC, ReactNode } from 'react';
import { FormattedMessage } from 'react-intl';
import Link from 'next/link';
import './style.scss';

type Props = {
  linkText: string;
  linkUrl: string;
  internal: boolean;
};

/**
 * LinkGroup --- Created By ChrisWen
 * --- 20191213
 * @prop {string} linkText --- 自定义按钮名称
 * @prop {string} linkUrl --- 自定义按钮URL，也可以是发送邮件的动作
 * @prop {boolean} internal --- 是否为内链，Next对外链及发送邮箱处理方式不同，需要此表示识别，请注意
 */
const LinkGroup: FC<Props> = (props: Props) => {
  const { linkText, linkUrl, internal } = props;
  return (
    <div className="link_group_wrapper">
      <div className="link_group">
        <Link href="/download">
          <FormattedMessage id="WALLET_02001" description="下载AToken">
            {(txt: string): ReactNode => <a className="link_item download_link" href="/download">{txt}</a>}
          </FormattedMessage>
        </Link>
        {internal
          ? <Link href={linkUrl}><a className="link_item">{linkText}</a></Link>
          : <a className="link_item" href={linkUrl} target="_blank" rel="noopener noreferrer">{linkText}</a>}
      </div>

    </div>
  );
};

export default LinkGroup;
