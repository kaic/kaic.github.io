export const sanitizeString = (str: string) =>
  str.replace(/https:\/\//g, '').replace(/mailto:/g, '');
