export const getData = (length: number): Promise<string[]> => {
  const data = Array.from({ length }, () => String(Math.random()));
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 10);
  });
};
