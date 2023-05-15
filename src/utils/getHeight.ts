export const getHeight = (className: string) =>
  document.querySelector(`.${className}`)?.clientHeight || 0;
