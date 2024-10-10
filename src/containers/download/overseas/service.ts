import request from '../../../utils/request';

function getBaseUrl(): string {
  const env = process.env.NODE_ENV;
  if (env === 'production') {
    return 'https://javaapi.biliangwang.com';
  }
  return 'https://javaapi.biliangwang.com';
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function getAccountList(): Promise<any> {
  const baseUrl = getBaseUrl();
  const url = `${baseUrl}/overseasAccount/getOverseasAccountList`;
  return request({ url });
}
