export interface Request {
  url: string;
  method: string;
  headers?: any;
  body?: any;
  timeout?: number;
  responseType?: string;
  jsonRequest?: boolean;
}

export interface Response {
  url?: string;
  code?: number;
  status?: boolean;
}

export interface HttpError extends Error {
  request?: Request;
  httpStatusCode: number;
  status: any;
  response: any;
  responseType?: string;
  url?: string;
  authHeader?:string
}

export const error = response => {
  const url = response?.request._url.split("/")
  const authHeader = response.headers['www-authenticate']
  const httpError: HttpError = {
    httpStatusCode: response?.data?.httpStatusCode ?? response?.data?.code,
    response: response?.data.data,
    message: response?.data?.message ?? response?.data?.errordescription,
    name: "",
    url: url[url.length - 1],
    status: response?.status??response?.data?.status,
    authHeader:authHeader
  }

  return httpError
}
