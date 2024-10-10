import React, { FC } from 'react';
import classnames from 'classnames';
import './style.scss';

type Props = {
  type: IconType;
  className?: string;
};

const Icon: FC<Props> = (props: Props) => {
  const { type, className } = props;
  const iconClassName = classnames('iconfont', `icon-${type}`, className);
  return <span className={iconClassName} />;
};

export default Icon;
