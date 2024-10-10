import React from 'react';
import Error from 'next/error';
import { NextPage, NextPageContext } from 'next';
import ErrorContainer from '../src/containers/error';

type ErrorProps = {
  statusCode: number;
};

const ErrorPage: NextPage<ErrorProps> = ({ statusCode }: ErrorProps) => {
  if (statusCode === 404) { return <ErrorContainer />; }
  return <Error statusCode={statusCode} />;
};

ErrorPage.getInitialProps = ({ res, err }: NextPageContext): ErrorProps => {
  let statusCode = 404;
  if (res) { statusCode = res.statusCode; }
  if (err) { statusCode = err.statusCode; }
  return { statusCode };
};

export default ErrorPage;
