const getHeight = (className: string) =>
  document.querySelector(`.${className}`)?.clientHeight || 0;

export default getHeight;
