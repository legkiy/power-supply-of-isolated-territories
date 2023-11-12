const getLocal = () => {
  const queryRegionParams = new URLSearchParams(window.location.search);
  const lang = queryRegionParams.get('lang') as 'en' | 'ru';

  return lang;
};

export default getLocal;
