export type HeadersType = {
  'content-type'?: string;
  [key: string]: string | undefined;
};
export function prettifyHeaders(headers: HeadersType) {
  const updatedHeaders: HeadersType = {};

  Object.keys(headers).forEach((key) => {
    const updatedKey = key.replace(/:/g, '');
    updatedHeaders[updatedKey] = headers[key];
  });

  return updatedHeaders;
}
