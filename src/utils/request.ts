import axios, { AxiosRequestConfig, AxiosError, AxiosResponse } from 'axios';

type Status = number | null;
type Msg = string | null;
type ResData = [Status, Msg, object?];
type ResError = [Status, null];

type ApiData = {
  status: Status;
  msg?: Msg;
  data?: object;
};


function handleResData(res: AxiosResponse<ApiData>): ResData {
  const { data: { status, msg, data } } = res;
  if (status !== 0) { return [status, null]; }
  return [null, msg, data];
}

function handleResErr(err: AxiosError): ResError {
  const _err = err;
  const { response: { status = 500 } = { status: 500 } } = _err;
  return [status, null];
}

/**
 * @param {AxiosRequestConfig} options --- axios的options配置
 */
export default function request(options: AxiosRequestConfig): Promise<ResData | ResError> {
  return axios(options)
    .then((data: AxiosResponse) => handleResData(data))
    .catch((err: AxiosError) => handleResErr(err));
}

// export default request;
