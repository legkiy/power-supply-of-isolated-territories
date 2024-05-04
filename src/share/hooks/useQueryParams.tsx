import { useEffect, useState } from 'react';

interface QueryParams {
  [key: string]: string;
}

function useQueryParams() {
  const [queryParams, setQueryParams] = useState<QueryParams>(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const params: QueryParams = {};

    for (const [key, value] of searchParams.entries()) {
      params[key] = value;
    }
    return params;
  });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  useEffect(() => {
    function handlePopstate() {
      const searchParams = new URLSearchParams(window.location.search);
      const params: QueryParams = {};
      for (const [key, value] of searchParams.entries()) {
        params[key] = value;
      }
      setQueryParams(params);
    }

    window.addEventListener('popstate', handlePopstate);

    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, []);

  function addQueryParam(paramName: string, paramValue: string) {
    const newParams = { ...queryParams, [paramName]: paramValue };
    const searchParams = new URLSearchParams(newParams);
    const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
    window.history.pushState({}, '', newUrl);
    setQueryParams(newParams);
  }

  function updateQueryParam(paramName: string, newValue: string) {
    const newParams = { ...queryParams, [paramName]: newValue };
    const searchParams = new URLSearchParams(newParams);
    const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
    window.history.pushState({}, '', newUrl);
    setQueryParams(newParams);
  }

  return {
    queryParams,
    addQueryParam,
    updateQueryParam,
  };
}

export default useQueryParams;
