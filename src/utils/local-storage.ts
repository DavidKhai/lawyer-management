export const setItem = (key: string, data: unknown): void => {
  localStorage.setItem(key, JSON.stringify(data));
};

export const getItem = (key: string, exceptionResult: any = null): unknown => {
  const dataJson = localStorage.getItem(key);
  return dataJson ? JSON.parse(dataJson) : exceptionResult;
};

export const removeItem = (key: string): void => {
  localStorage.removeItem(key);
};
