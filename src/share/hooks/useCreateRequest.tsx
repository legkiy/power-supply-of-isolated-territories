import { AxiosProgressEvent } from 'axios';
import { useCallback, useState } from 'react';

type RequestFunction<T> = (
  onProgress: (event: AxiosProgressEvent) => void
) => Promise<T>;

const useCreateRequest = <T, D>(requestFunction: RequestFunction<T>) => {
  const [data, setData] = useState<null | D | T>(null);
  const [pending, setPending] = useState<boolean>(false);
  const [complete, setComplete] = useState<boolean>(false);
  const [error, setError] = useState<unknown>(null);
  const [progress, setProgress] = useState<number>(0);

  const executeRequest = useCallback(async () => {
    setPending(true);
    setComplete(false);
    setError(null);
    setProgress(0);

    try {
      const response = await requestFunction((event: AxiosProgressEvent) => {
        const total = event.total;
        if (total) {
          const currentProgress = Math.round((event.loaded * 100) / total);
          setProgress(currentProgress);
        }
      });
      setData(response);
      setComplete(true);
    } catch (err) {
      setError(err);
    } finally {
      setPending(false);
    }
  }, [requestFunction]);

  // useEffect(() => {
  //   executeRequest();
  // }, [executeRequest]);

  return { data, pending, complete, error, progress, executeRequest };
};
export default useCreateRequest;
