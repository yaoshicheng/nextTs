import React, { FC } from 'react';
import Link from 'next/link';
import NotFound from '../../assets/dApp/error_404.png';
import './style.scss';

type Props = {};

const ErrorContainer: FC<Props> = () => (
  <div className="error_container">
    <img src={NotFound} alt="" />
    <h2>出错了</h2>
    <p>找不到您请求的网页</p>
    <Link href="/"><a>返回首页</a></Link>
  </div>
);

export default ErrorContainer;
