const setLang = (lang: 'en' | 'ru') => {
  const queryParams = new URLSearchParams(window.location.search);
  queryParams.set('lang', lang);
  const newUrl = `${window.location.pathname}?${queryParams.toString()}`;
  window.history.pushState(null, '', newUrl);
};
export default setLang;
