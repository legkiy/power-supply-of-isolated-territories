import { useEffect, useState } from 'react';

interface QueryParams {
  [key: string]: string;
}

const handleParams = () => {
  const searchParams = new URLSearchParams(window.location.search);
  const params: QueryParams = {};
  for (const [key, value] of searchParams.entries()) {
    params[key] = value;
  }
  return params;
};

function useQueryParams() {
  const [queryParams, setQueryParams] = useState<QueryParams>(handleParams);

  useEffect(() => {
    const handlePopstate = () => {
      setQueryParams(handleParams());
    };
    window.addEventListener('popstate', handlePopstate);

    return () => {
      window.removeEventListener('popstate', handlePopstate);
    };
  }, []);

  function updateQueryParam(paramName: string, paramValue: string) {
    const newParams = { ...queryParams, [paramName]: paramValue };
    const searchParams = new URLSearchParams(newParams);
    const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
    window.history.pushState({}, '', newUrl);
    setQueryParams(newParams);
  }

  function removeQueryParam(paramName: string) {
    const { [paramName]: _, ...newParams } = queryParams;
    const searchParams = new URLSearchParams(newParams);
    const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
    window.history.pushState({}, '', newUrl);
    setQueryParams(newParams);
  }

  return {
    queryParams,
    updateQueryParam,
    removeQueryParam,
  };
}

export default useQueryParams;
